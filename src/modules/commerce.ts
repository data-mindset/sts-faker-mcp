import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function commerce(server: McpServer) {
  server.registerTool("commerce-department", { description: "Returns a department inside a shop.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.department() }],
    }
  })
  server.registerTool("commerce-productName", { description: "Generates a random descriptive product name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productName() }],
    }
  })
  server.registerTool("commerce-price", { description: "Generates a price between min and max (inclusive).", inputSchema: {
      min: z.number().optional().describe("The minimum price."),
      max: z.number().optional().describe("The maximum price."),
      dec: z.number().optional().describe("The number of decimal places."),
      symbol: z.string().optional().describe("The currency value to use."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.commerce.price(args) }],
      }
    },
  )
  server.registerTool("commerce-productAdjective", { description: "Returns an adjective describing a product.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productAdjective() }],
    }
  })
  server.registerTool("commerce-productMaterial", { description: "Returns a material of a product.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productMaterial() }],
    }
  })
  server.registerTool("commerce-product", { description: "Returns a short product name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.product() }],
    }
  })
  server.registerTool("commerce-productDescription", { description: "Returns a product description.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productDescription() }],
    }
  })
  server.registerTool("commerce-isbn", { description: "Returns a random ISBN identifier.", inputSchema: {
      union: z.union([
        z.literal(10),
        z.literal(13),
        z.object({
          variant: z
            .union([z.literal(10), z.literal(13)])
            .optional()
            .describe(
              "The variant of the identifier to return. Can be either 10 (10-digit format) or 13 (13-digit format).",
            ),
          separator: z.string().optional().describe("The separator to use in the format."),
        }),
      ]),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.commerce.isbn(args.union) }],
      }
    },
  )
  return server
}
