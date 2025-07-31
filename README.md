# LnLink MCP Node Service

This is a **Model Context Protocol (MCP) Node Service** designed to facilitate interaction with **LnLink nodes**, which are built upon the **Nostr protocol**. It provides a robust interface for managing and interacting with both **Lightning Network (LND/LITD)** and **RGB Protocol** functionalities.

## Features

*   **Nostr-based Interaction:** Seamlessly connects and interacts with LnLink nodes leveraging the Nostr protocol.
*   **Comprehensive Lightning Network Management:** Provides tools for LND/LITD operations, including:
    *   Node status and information queries
    *   Wallet management (initialization, unlocking, balance checks, address generation)
    *   Peer and channel management (listing peers, opening/closing channels, connecting to peers)
    *   Invoice creation and payment
*   **RGB Protocol Integration:** Supports RGB Protocol functionalities for colored assets, including:
    *   Service status and information queries
    *   Wallet management (initialization, unlocking, balance checks, address generation)
    *   UTXO management
    *   Peer and channel management
    *   Invoice creation and payment for RGB assets
*   **Command-Line Interface (CLI) Ready:** Designed to be easily executed via `npx` as a command-line tool.

## Installation

1.  **Node.js Requirement:** Ensure you have Node.js installed (version 16 or higher recommended).
2.  **Clone Repository:**
    ```bash
    git clone https://github.com/your-repo/lnlink-mcp-service.git
    cd lnlink-mcp-service
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```

## Building the Project

To compile TypeScript files to JavaScript, use the following command:

```bash
npm run build
```

This command will:
1.  Compile TypeScript files using [Vite](https://vitejs.dev/).
2.  Make the built JavaScript files (located in the `dist/` directory) executable.

## Usage

After building the project, you can start the service:

```bash
npm start
```

### Running with npx

This service is designed to be run as an `npx` command. You will need to provide your Nostr private key and a `sendTo` public key as arguments.

Example `mcpServers` configuration for your client (replace placeholders with your actual keys):

```json
{
  "mcpServers": {
    "lnlink": {
      "command": "npx",
      "args": [
        "lnlink-mcp-service@latest",
        "YOUR_NOSTR_PRIVATE_KEY_HERE",
        "YOUR_NOSTR_PUBLIC_KEY_TO_SEND_TO_HERE"
      ]
    }
  }
}
```
**Note:** For local development and testing, after running `npm run build` in this project, you can use `yarn link` (in this project's root) and then `yarn link lnlink-mcp-service` (in your client project's root) to use your local development version directly via `npx`.

## Dependencies

*   `@modelcontextprotocol/sdk`: Core SDK for Model Context Protocol interactions.
*   `lnlink-js-sdk`: JavaScript SDK for interacting with LnLink nodes.
*   `zod`: TypeScript-first schema validation library.
*   `vite`: Next generation frontend tooling, used for building this service.
