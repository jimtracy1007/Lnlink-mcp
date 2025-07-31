// @ts-ignore
import { LnlinkSdk, Singer } from "lnlink-js-sdk";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function createLnlinkApi(lnlinkSdkEnv: any) {
  const singer = lnlinkSdkEnv?.privateKey
    ? new Singer({
        privateKey: lnlinkSdkEnv?.privateKey,
      })
    : undefined;

  const lnlinkApi = new LnlinkSdk({
    ...lnlinkSdkEnv,
    singer: lnlinkSdkEnv?.privateKey ? singer : lnlinkSdkEnv?.singer,
  });

  return lnlinkApi;
}

export function registerLnlinkTools(server: McpServer, lnlinkApi: any) {
  // Fee Rate Tools
  server.tool(
    "LND_GetFeeRate",
    "LND_Get real-time Bitcoin network fee rates",
    {},
    async ({}) => {
      const feeRate = await lnlinkApi.fee.getFeeRate();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(feeRate),
          },
        ],
      };
    }
  );

  // LITD/LND Tools
  server.tool(
    "LND_GetLitdInfo",
    "QUERY_NODE_INFO: Get comprehensive LITD/LND/Taproot Assets node information including status, balance, channels, and assets. This is a READ-ONLY query, does not modify data.",
    {},
    async ({}) => {
      const info = await lnlinkApi.litd.getInfo();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(info),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_GetLitdState",
    "QUERY_NODE_STATE: Get LITD/LND/Taproot Assets node service state. Returns: 0=not_initialized (can use LND_CREATE_NEW_WALLET), 1=locked (use LND_UNLOCK_EXISTING_WALLET), 2=unlocking, 3=rpc_active, 4=running. This is a READ-ONLY query, does not modify data.",
    {},
    async ({}) => {
      const state = await lnlinkApi.litd.getState();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(state),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_StartLitd",
    "LND_Start LITD/LND/Taproot Assets service",
    {},
    async ({}) => {
      const result = await lnlinkApi.litd.startLitd();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_StopLitd",
    "LND_Stop LITD/LND/Taproot Assets service",
    {},
    async ({}) => {
      const result = await lnlinkApi.litd.stopLitd();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_RestartLitd",
    "LND_Restart LITD/LND/Taproot Assets service",
    {},
    async ({}) => {
      const result = await lnlinkApi.litd.restartLitd();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_UnlockLitdWallet",
    "LND_Unlock LITD/LND/Taproot Assets wallet with password",
    {
      password: z.string().describe("Wallet password"),
    },
    async ({ password }) => {
      const result = await lnlinkApi.litd.unlockWallet({ password });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_GenerateLitdSeed",
    "LND_GENERATE_SEED: Generate new 24-word mnemonic seed for creating a new LITD/LND/Taproot Assets wallet. WARNING: Only use when user explicitly requests creating a completely new wallet. This is step 1 of new wallet creation, followed by LND_InitLitdWallet. Do not call unless user specifically asks to create a new wallet.",
    {},
    async ({}) => {
      const seed = await lnlinkApi.litd.genseed();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(seed),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_InitLitdWallet",
    "LND_CREATE_NEW_WALLET: Creates a completely new LITD/LND/Taproot Assets wallet. WARNING: This will OVERWRITE any existing wallet data. Only use for first-time setup or when explicitly creating a new wallet. Prerequisites: 1) Check LND_GetLitdState shows state 0 (not initialized), 2) Call LND_GenerateLitdSeed first. If wallet exists, use LND_UnlockLitdWallet instead.",
    {
      password: z.string().describe("Wallet password (e.g., '12345678')"),
      seed_words: z
        .string()
        .describe(
          "24-word mnemonic seed from LND_GenerateLitdSeed, separated by spaces (e.g., 'word1 word2 word3...')"
        ),
    },
    async ({ password, seed_words }) => {
      const seed = seed_words.trim().split(/\s+/);
      if (seed.length !== 24) {
        throw new Error(
          `Expected 24 seed words, but got ${seed.length}. Please provide exactly 24 words separated by spaces.`
        );
      }

      const result = await lnlinkApi.litd.initWallet({ password, seed });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_GetLitdWalletBalance",
    "LND_Get LITD/LND/Taproot Assets wallet balance. IMPORTANT: The returned balance is in satoshis. When presenting this to the user, convert it to BTC by dividing by 100,000,000 (1 BTC = 10^8 satoshis) and display both the BTC and satoshi values.",
    {},
    async ({}) => {
      const balance = await lnlinkApi.litd.walletBalance();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(balance),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_GenerateLitdAddress",
    "LND_Generate new Bitcoin address for LITD/LND/Taproot Assets wallet",
    {},
    async ({}) => {
      const address = await lnlinkApi.litd.newAddress();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(address),
          },
        ],
      };
    }
  );

  //listLitdPeers
  server.tool(
    "LND_ListLitdPeers",
    "LND_List all connected Lightning peers for LITD/LND/Taproot Assets. Returns details about each peer, including their public key, IP address, and connection status.",
    {},
    async ({}) => {
      const peers = await lnlinkApi.litd.listPeers();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(peers),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_OpenLightningChannel",
    "LND_Open a Lightning channel for LITD/LND/Lightning/BTC Channel. BEFORE calling this tool, you MUST first use the `LND_ListLitdPeers` tool to get a list of connected peers. Present these peers to the user and ask them to confirm which peer they want to open a channel with. You will need the `node_pubkey` and `host` from the selected peer. Additionally, you MUST proactively call `LND_GetFeeRate` to obtain the current optimal fee rate (e.g., recommend `fastestFee` or `halfHourFee` from `LND_GetFeeRate` * 1.5 for `sat_per_vbyte`). The 'amount' is in satoshis, and when displayed, should also be converted to BTC (1 BTC = 10^8 satoshis). AFTER a successful channel opening, you MUST proactively call `LND_ListLightningChannels` to display the status of the newly created channel.",
    {
      host: z
        .string()
        .describe("Target node host:port (e.g., 'regtest.lnfi.network:9735')"),
      node_pubkey: z.string().describe("Target node public key"),
      amount: z.number().describe("Channel capacity in satoshis"),
      push_amount: z
        .number()
        .optional()
        .describe("Initial amount to push to peer (default: 0)"),
      sat_per_vbyte: z
        .number()
        .optional()
        .describe("Fee rate per vbyte (use GetFeeRate * 1.5)"),
    },
    async ({ host, node_pubkey, amount, push_amount, sat_per_vbyte }) => {
      const result = await lnlinkApi.litd.openChannel({
        host,
        node_pubkey,
        amount,
        push_amount: push_amount || 0,
        sat_per_vbyte,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_ListLightningChannels",
    "LND_List all Lightning channels (open, pending, closed) for LITD/LND/Taproot Assets. This includes both Bitcoin Lightning channels and Taproot Assets channels. For Bitcoin channels, capacities and balances are in satoshis; when displayed, they should also be converted to BTC (1 BTC = 10^8 satoshis). For Taproot Assets channels, amounts are in their smallest unit; use the asset's 'decimals' field (obtainable from `LND_ListAssets` or `LND_GetLitdInfo`) to convert to a human-readable format: formatted_amount = raw_amount / (10 ^ decimals). Always show both raw and formatted values when presenting channel details.",
    {},
    async ({}) => {
      const channels = await lnlinkApi.litd.listChannels();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(channels),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_CloseLightningChannel",
    "LND_Close a Lightning channel for LITD/LND/Taproot Assets.",
    {},
    async ({}) => {
      const result = await lnlinkApi.litd.closeChannel();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_ConnectLightningPeer",
    "LND_Connect to a Lightning peer for LITD/LND/Taproot Assets.",
    {
      host: z
        .string()
        .describe(
          "Target node IP address and port, e.g. regtest.lnfi.network:9735"
        ),
      pubkey: z.string().describe("Target node public key"),
      perm: z
        .boolean()
        .optional()
        .describe("Whether to connect permanently (optional, default is true)"),
    },
    async ({ host, pubkey, perm }) => {
      const result = await lnlinkApi.litd.connectPeer({
        host,
        pubkey,
        perm,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_CreateLightningInvoice",
    "LND_Create a Lightning invoice for LITD/LND/BTC Channel Invoice. The 'amt' is in satoshis, and when displayed, should also be converted to BTC (1 BTC = 10^8 satoshis).",
    {
      amt: z.number().describe("Invoice amount in satoshis"),
      memo: z.string().optional().describe("Invoice memo/description"),
    },
    async ({ amt, memo }) => {
      const result = await lnlinkApi.litd.addInvoice({ amt, memo });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "LND_PayLightningInvoice",
    "LND_Pay a Lightning invoice using LITD/LND/BTC Channel Invoice.",
    {
      payment_request: z.string().describe("Lightning payment request string"),
    },
    async ({ payment_request }) => {
      const result = await lnlinkApi.litd.payInvoice({ payment_request });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  // Taproot Assets Tools
  server.tool(
    "Taproot_GenerateTaprootAddress",
    "Taproot_Generate new Taproot Assets address (requires asset ID from ListAssets). AFTER generating the address, you MUST proactively call `DecodeTapdAddress` with the newly generated address to validate it. If the validation fails, you MUST regenerate the address until it passes validation.",
    {
      asset_id: z.string().describe("Asset ID from ListAssets assets list"),
      amt: z
        .number()
        .describe(
          "Asset amount (multiply user input by 10^decimal from ListAssets)"
        ),
    },
    async ({ asset_id, amt }) => {
      const result = await lnlinkApi.litd.newTapdAddr({ asset_id, amt });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  //decodeTapdAddr
  server.tool(
    "Taproot_DecodeTapdAddress",
    "Taproot_Decode Taproot Assets address",
    {
      address: z.string().describe("Taproot Assets address"),
    },
    async ({ address }) => {
      const result = await lnlinkApi.litd.decodeTapdAddr(address);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  //listAssets({ page_index = 0, page_size = 20 })
  server.tool(
    "Taproot_ListAssets",
    "QUERY_ASSET_BALANCES: List all Taproot Assets and their detailed information, including balances. For each asset, use the 'decimals' field in the response to format the displayed amount: formatted_amount = raw_amount / (10 ** decimals). Show both the raw amount and the formatted amount. This is a READ-ONLY query, does not modify data.",
    {
      page_index: z.number().describe("Page index"),
      page_size: z.number().describe("Page size"),
    },
    async ({ page_index = 0, page_size = 20 }) => {
      const assets = await lnlinkApi.litd.listAssets({
        page_index,
        page_size,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(assets),
          },
        ],
      };
    }
  );

  server.tool(
    "Taproot_SendTaprootAssets",
    "TRANSFER_ASSETS: Send Taproot Assets to a specific address. WARNING: This is a REAL MONEY TRANSFER that cannot be undone. Only use when user EXPLICITLY says 'send', 'transfer', 'pay' with specific recipient address. NEVER use for queries, balance checks, or information display.",
    {
      tap_addr: z.string().describe("Taproot Assets address to send to"),
    },
    async ({ tap_addr }) => {
      const result = await lnlinkApi.litd.sendTapdAssets({
        tap_addrs: [tap_addr],
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "Taproot_CreateTaprootChannel",
    "Taproot_Create a Taproot Assets channel. BEFORE calling this tool, you MUST first use the `ListLitdPeers` tool to get a list of connected peers. Present these peers to the user and ask them to confirm which peer they want to open a channel with. You will need the `node_pubkey` from the selected peer. Additionally, you MUST proactively call `GetFeeRate` to obtain the current optimal fee rate (e.g., recommend `fastestFee` or `halfHourFee` from `GetFeeRate` * 1.5 for `fee_rate_sat_per_vbyte`). You also MUST proactively call `ListAssets` to get the `decimals` for the specified `asset_id` to ensure correct formatting of `asset_amount` (asset_amount = user_provided_amount * (10 ** decimals)). AFTER a successful channel opening, you MUST proactively call `ListLightningChannels` to display the status of the newly created channel.",
    {
      asset_amount: z.number().describe("Asset amount"),
      asset_id: z.string().describe("Asset ID"),
      node_pubkey: z.string().describe("Target node public key"),
      fee_rate_sat_per_vbyte: z.number().describe("Fee rate per vbyte"),
    },
    async ({ asset_amount, asset_id, node_pubkey, fee_rate_sat_per_vbyte }) => {
      const result = await lnlinkApi.litd.createTapdChannel({
        asset_amount,
        asset_id,
        node_pubkey,
        fee_rate_sat_per_vbyte,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "Taproot_CreateTaprootInvoice",
    "Taproot_Creates an invoice for a specific Taproot asset. IMPORTANT: This tool requires the asset's technical ID and the amount in its smallest unit.",
    {
      asset_id: z
        .string()
        .describe(
          "The technical ID of the asset. To get this, you MUST first call the `ListAssets` tool and find the asset by its name in the returned list."
        ),
      asset_amount: z
        .number()
        .describe(
          "The amount in the asset's smallest unit. To calculate this, you MUST use the `decimal` field from the asset information provided by `ListAssets`. The formula is: asset_amount = user_provided_amount * (10 ** decimal)."
        ),
    },
    async ({ asset_id, asset_amount }) => {
      const result = await lnlinkApi.litd.addTapdInvoice({
        asset_id,
        asset_amount,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "Taproot_DecodeTaprootPaymentRequest",
    "Taproot_Decode a Taproot Assets Lightning Network payment request. This tool returns the decoded details, including asset ID, amount, and payment hash.",
    {
      payment_request: z
        .string()
        .describe("Taproot Assets payment request string"),
      asset_id: z.string().describe("Asset ID"),
    },
    async ({ payment_request, asset_id }) => {
      const result = await lnlinkApi.litd.decodeAssetPayReq({
        payment_request,
        asset_id,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "Taproot_PayTaprootInvoice",
    "Taproot_Pay a Taproot Assets Lightning Network invoice. BEFORE calling this tool, you MUST proactively call `ListAssets` to confirm that the provided `asset_id` exists in your wallet's assets. Then, you MUST proactively call `DecodeTaprootPaymentRequest` with the `payment_request` to verify the `asset_id` and `asset_amount`. It is CRUCIAL that the `asset_id` and `asset_amount` passed to this tool MATCH the values returned by `DecodeTaprootPaymentRequest`. If there is any discrepancy, you MUST inform the user of the mismatch and NOT proceed with the payment until it is resolved or confirmed by the user. Only proceed if the decoded values are consistent with the intended payment. Additionally, you SHOULD proactively call `ListLightningChannels` to identify a suitable `outgoing_chan_id` (a channel that supports the specified `asset_id`) to optimize the payment route. If a suitable channel is found, pass its `outgoing_chan_id` as a parameter. This tool executes the payment and returns the transaction details upon success. AFTER a successful payment, you MUST proactively call `ListLightningChannels` to display the latest channel data related to the asset that was just paid.",
    {
      asset_id: z.string().describe("Asset ID"),
      asset_amount: z
        .number()
        .describe("Asset amount (convert using decimal from ListAssets)"),
      payment_request: z.string().describe("Asset payment request"),
      outgoing_chan_id: z
        .string()
        .optional()
        .describe("Optional outgoing channel ID"),
    },
    async ({ asset_id, asset_amount, payment_request, outgoing_chan_id }) => {
      const result = await lnlinkApi.litd.sendTapdPayment({
        asset_id,
        asset_amount,
        payment_request,
        outgoing_chan_id,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  // RGB Tools----------------------------------------------
  server.tool(
    "RGB_GetRgbState",
    "QUERY_SERVICE_STATE: Get RGB service state. Returns: 0=not_initialized (can use RGB_CREATE_NEW_WALLET), 1=locked (use RGB_UNLOCK_EXISTING_WALLET), 2=unlocking, 3=syncing, 4=server_active. This is a READ-ONLY query, does not modify data.",
    {},
    async ({}) => {
      const state = await lnlinkApi.rgb.getState();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(state),
          },
        ],
      };
    }
  );

  server.tool("RGB_StartRgb", "RGB_Start RGB service", {}, async ({}) => {
    const result = await lnlinkApi.rgb.startRGB();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  });

  server.tool("RGB_StopRgb", "RGB_Stop RGB service", {}, async ({}) => {
    const result = await lnlinkApi.rgb.stopRGB();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  });

  server.tool("RGB_RestartRgb", "RGB_Restart RGB service", {}, async ({}) => {
    const result = await lnlinkApi.rgb.restartRGB();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  });

  server.tool(
    "RGB_GetRgbInfo",
    "QUERY_SERVICE_INFO: Get comprehensive RGB service information, including asset details and node status. This is a READ-ONLY query, does not modify data.",
    {},
    async ({}) => {
      const info = await lnlinkApi.rgb.getInfo();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(info),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_InitRgbWallet",
    "RGB_CREATE_NEW_WALLET: Creates a completely new RGB wallet. WARNING: This will OVERWRITE any existing RGB wallet data. Only use when user EXPLICITLY instructs to create a new RGB wallet or for first-time setup. Prerequisites: 1) RGB service must be running (check RGB_GetRgbState), 2) Only call when user explicitly requests wallet creation. If wallet exists, use RGB_UnlockRgbWallet instead.",
    {
      password: z.string().describe("Wallet password"),
    },
    async ({ password }) => {
      const result = await lnlinkApi.rgb.genseed(password);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_UnlockRgbWallet",
    "RGB_Unlock RGB wallet with password. IMPORTANT: Success of this operation should be determined by checking the returned `code`, as this API does not return detailed `data`.",
    {
      password: z.string().describe("Wallet password"),
    },
    async ({ password }) => {
      const result = await lnlinkApi.rgb.unlock(password);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_GetRgbWalletBalance",
    "RGB_Get RGB wallet balance including vanilla Bitcoin (BTC) and colored assets. IMPORTANT: All returned amounts are in their smallest unit (raw precision). For assets, use the 'decimals' field to convert to human-readable format: formatted_amount = raw_amount / (10 ** decimals). Show both raw and formatted values when presenting data to users.",
    {},
    async ({}) => {
      const balance = await lnlinkApi.rgb.walletBalance();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(balance),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_GenerateRgbAddress",
    "RGB_Generate new RGB wallet address",
    {},
    async ({}) => {
      const address = await lnlinkApi.rgb.newAddress();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(address),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_SendRgbCoins",
    "TRANSFER_BTC: Send Bitcoin (BTC) to specified address. WARNING: This is a REAL MONEY TRANSFER that cannot be undone. Only use when user EXPLICITLY says 'send', 'transfer', 'pay' with specific recipient address. NEVER use for queries, balance checks, or information display.",
    {
      address: z.string().describe("Target Bitcoin address"),
      amount: z.number().describe("Amount in satoshis"),
    },
    async ({ address, amount }) => {
      const result = await lnlinkApi.rgb.sendCoins({ address, amount });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_CreateRgbUtxos",
    "RGB_Create UTXOs for RGB operations",
    {
      num: z.number().describe("Number of UTXOs to create"),
      size: z.number().describe("Size of each UTXO in satoshis"),
      fee_rate: z.number().describe("Transaction fee rate"),
    },
    async ({ num, size, fee_rate }) => {
      const result = await lnlinkApi.rgb.createUtxos({ num, size, fee_rate });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_ListRgbUnspents",
    "RGB_List all unspent transaction outputs (UTXOs)",
    {},
    async ({}) => {
      const unspents = await lnlinkApi.rgb.listUnspents();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(unspents),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_CreateRgbInvoice",
    "RGB_Create RGB invoice (for first-time asset receipt, do not provide asset_id)",
    {
      duration_seconds: z
        .number()
        .describe("Invoice validity duration in seconds"),
      asset_id: z
        .string()
        .optional()
        .describe("Asset ID (omit for first-time asset receipt)"),
    },
    async ({ duration_seconds, asset_id }) => {
      const result = await lnlinkApi.rgb.createRgbInvoice({
        duration_seconds,
        asset_id,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_ListRgbPeers",
    "RGB_List all connected RGB peers",
    {},
    async ({}) => {
      const peers = await lnlinkApi.rgb.listPeers();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(peers),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_ConnectRgbPeer",
    "RGB_Connect to RGB peer",
    {
      pubkey: z.string().describe("Target node public key"),
      host: z.string().describe("Target node IP address and port"),
    },
    async ({ pubkey, host }) => {
      const result = await lnlinkApi.rgb.connectPeer({ pubkey, host });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_ListRgbChannels",
    "RGB_List all RGB channels",
    {},
    async ({}) => {
      const channels = await lnlinkApi.rgb.listChannels();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(channels),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_OpenRgbChannel",
    "RGB_Open RGB channel (check sufficient balance with GetRgbInfo first)",
    {
      asset_id: z
        .string()
        .optional()
        .describe("Asset ID for RGB asset channel"),
      asset_amount: z
        .number()
        .optional()
        .describe("Asset amount (convert using decimal from GetRgbInfo)"),
      fee_rate_sat_per_vbyte: z
        .number()
        .optional()
        .describe("Fee rate per vbyte (GetFeeRate * 1.5)"),
      capacity_sat: z
        .number()
        .optional()
        .describe("BTC channel capacity in satoshis"),
    },
    async ({
      asset_id,
      asset_amount,
      fee_rate_sat_per_vbyte,
      capacity_sat,
    }) => {
      const options: any = {};
      if (asset_id && asset_amount) {
        options.asset_id = asset_id;
        options.asset_amount = asset_amount;
        options.fee_rate_sat_per_vbyte = fee_rate_sat_per_vbyte;
      } else if (capacity_sat) {
        options.capacity_sat = capacity_sat;
      }
      const result = await lnlinkApi.rgb.openChannel(options);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_CreateRgbLightningInvoice",
    "RGB_Creates an invoice for a specific RGB asset. IMPORTANT: This tool requires the asset's technical ID and the amount in its smallest unit.",
    {
      asset_id: z
        .string()
        .describe(
          "The technical ID of the asset. To get this, you MUST first call the `GetRgbInfo` tool and find the asset by its name in the returned list."
        ),
      asset_amount: z
        .number()
        .describe(
          "The amount in the asset's smallest unit. To calculate this, you MUST use the `decimal` field from the asset information provided by `GetRgbInfo`. The formula is: asset_amount = user_provided_amount * (10 ** decimal)."
        ),
    },
    async ({ asset_id, asset_amount }) => {
      const result = await lnlinkApi.rgb.createInvoice({
        asset_id,
        asset_amount,
      });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_DecodeRgbLightningInvoice",
    "RGB_Decode RGB Lightning invoice",
    {
      invoice: z.string().describe("Lightning invoice string"),
    },
    async ({ invoice }) => {
      const result = await lnlinkApi.rgb.decodeLnInvoice({ invoice });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );

  server.tool(
    "RGB_PayRgbLightningInvoice",
    "RGB_Pay RGB Lightning invoice",
    {
      invoice: z.string().describe("RGB Lightning invoice string"),
    },
    async ({ invoice }) => {
      const result = await lnlinkApi.rgb.payInvoice({ invoice });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    }
  );
}
