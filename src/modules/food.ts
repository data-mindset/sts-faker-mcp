import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function food(server: McpServer) {
  server.registerTool("food-adjective", { description: "Generates a random dish adjective.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.adjective() }],
    }
  })

  server.registerTool("food-description", { description: "Generates a random dish description.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.description() }],
    }
  })

  server.registerTool("food-dish", { description: "Generates a random dish name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.dish() }],
    }
  })

  server.registerTool("food-ethnicCategory", { description: "Generates a random food's ethnic category.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.ethnicCategory() }],
    }
  })

  server.registerTool("food-fruit", { description: "Generates a random fruit name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.fruit() }],
    }
  })

  server.registerTool("food-ingredient", { description: "Generates a random ingredient name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.ingredient() }],
    }
  })

  server.registerTool("food-meat", { description: "Generates a random meat.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.meat() }],
    }
  })

  server.registerTool("food-spice", { description: "Generates a random spice name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.spice() }],
    }
  })

  server.registerTool("food-vegetable", { description: "Generates a random vegetable name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.food.vegetable() }],
    }
  })

  return server
}
