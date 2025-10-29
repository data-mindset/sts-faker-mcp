import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function finance(server: McpServer) {
  server.registerTool("finance-accountName", { description: "Generates a random account name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.accountName() }],
    }
  })

  server.registerTool("finance-accountNumber", { description: "Generates a random account number.", inputSchema: {
      length: z.number().optional().describe("The length of the account number."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.accountNumber(args) }],
      }
    },
  )

  server.registerTool("finance-amount", { description: "Generates a random amount between the given bounds (inclusive).", inputSchema: {
      min: z.number().optional().describe("The lower bound for the amount."),
      max: z.number().optional().describe("The upper bound for the amount."),
      dec: z.number().optional().describe("The number of decimal places for the amount."),
      symbol: z.string().optional().describe("The symbol used to prefix the amount."),
      autoFormat: z
        .boolean()
        .optional()
        .describe("If true this method will use Number.toLocaleString(). Otherwise it will use Number.toFixed()."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.amount(args) }],
      }
    },
  )

  server.registerTool("finance-bic", { description: "Generates a random SWIFT/BIC code based on the ISO-9362 format.", inputSchema: {
      includeBranchCode: z
        .boolean()
        .optional()
        .describe("Whether to include a three-digit branch code at the end of the generated code."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.bic(args) }],
      }
    },
  )

  server.registerTool("finance-bitcoinAddress", { description: "Generates a random Bitcoin address.", inputSchema: {
      type: z.enum(["legacy", "segwit", "bech32", "taproot"]).optional().describe("The bitcoin address type."),
      network: z.enum(["mainnet", "testnet"]).optional().describe("The bitcoin network."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.bitcoinAddress(args) }],
      }
    },
  )

  server.registerTool("finance-creditCardCVV", { description: "Generates a random credit card CVV.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.creditCardCVV() }],
    }
  })

  server.registerTool("finance-creditCardIssuer", { description: "Returns a random credit card issuer.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.creditCardIssuer() }],
    }
  })

  server.registerTool("finance-creditCardNumber", { description: "Generates a random credit card number.", inputSchema: {
      issuer: z
        .string()
        .optional()
        .describe("The name of the issuer (case-insensitive) or the format used to generate one."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.creditCardNumber(args) }],
      }
    },
  )

  server.registerTool(
    "finance-currency", { description: "Returns a random currency object, containing code, name, symbol, and numericCode properties.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: JSON.stringify(faker.finance.currency()) }],
      }
    },
  )

  server.registerTool("finance-currencyCode", { description: "Returns a random currency code.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencyCode() }],
    }
  })

  server.registerTool("finance-currencyName", { description: "Returns a random currency name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencyName() }],
    }
  })

  server.registerTool("finance-currencyNumericCode", { description: "Returns a random currency numeric code.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencyNumericCode() }],
    }
  })

  server.registerTool("finance-currencySymbol", { description: "Returns a random currency symbol.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencySymbol() }],
    }
  })

  server.registerTool("finance-ethereumAddress", { description: "Creates a random, non-checksum Ethereum address.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.ethereumAddress() }],
    }
  })

  server.registerTool("finance-iban", { description: "Generates a random IBAN.", inputSchema: {
      countryCode: z.string().optional().describe("The country code from which you want to generate an IBAN."),
      formatted: z.boolean().optional().describe("Return a formatted version of the generated IBAN."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.iban(args) }],
      }
    },
  )

  server.registerTool("finance-litecoinAddress", { description: "Generates a random Litecoin address.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.litecoinAddress() }],
    }
  })

  server.registerTool("finance-maskedNumber", { description: "Generates a random masked number.", inputSchema: {
      length: z.number().optional().describe("The length of the unmasked number."),
      parens: z.boolean().optional().describe("Whether to use surrounding parenthesis."),
      ellipsis: z.boolean().optional().describe("Whether to prefix the number with an ellipsis."),
      maskChar: z.string().optional().describe("The character to use as a mask."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.maskedNumber(args) }],
      }
    },
  )

  server.registerTool("finance-pin", { description: "Generates a random PIN.", inputSchema: {
      length: z.number().optional().describe("The length of the PIN to generate."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.pin(args) }],
      }
    },
  )

  server.registerTool("finance-routingNumber", { description: "Generates a random routing number.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.routingNumber() }],
    }
  })

  server.registerTool("finance-transactionDescription", { description: "Generates a random transaction description.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.transactionDescription() }],
    }
  })

  server.registerTool("finance-transactionType", { description: "Returns a random transaction type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.finance.transactionType() }],
    }
  })

  return server
}
