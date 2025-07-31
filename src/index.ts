#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createLnlinkApi, registerLnlinkTools } from "./lnlink-api.js";

export const getMcpLnLinkServer = async (lnlinkApiEnv: any) => {
  let privateKey;
  let sendTo;
  let lnlinkApiEnvTemp = {};
  //Check if running in browser
  if (typeof window === "undefined") {
    privateKey = process.argv[2];
    sendTo = process.argv[3];
    if (!privateKey) {
      console.error("Please provide private key as startup parameter");
      process.exit(1);
    }
    if (!sendTo) {
      console.error("Please provide sendTo as startup parameter");
      process.exit(1);
    }

    lnlinkApiEnvTemp = {
      ...lnlinkApiEnv,
      privateKey,
      sendTo,
    };
  } else {
    lnlinkApiEnvTemp = {
      ...lnlinkApiEnv,
    };
  }

  const lnlinkApi = createLnlinkApi(lnlinkApiEnvTemp);
  // await lnlinkApi.init();

  const server = new McpServer({
    name: "mcp-lnlink-service",
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

  //register lnlink tools
  registerLnlinkTools(server, lnlinkApi);

  //Check if running in browser
  if (typeof window === "undefined") {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("LnLink MCP Server running on stdio");
  }
  return server;
};

getMcpLnLinkServer({
  env: "development",
  sendTo: "npub1reg0m7776sqmjsgrw59pq9un2u430g7pxeygyszge6nct5sv5fks3n9f4n",
}).catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
