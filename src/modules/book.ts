import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function book(server: McpServer) {
  server.registerTool("book-author", { description: "Returns a random author name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.book.author() }],
    }
  })

  server.registerTool("book-format", { description: "Returns a random book format.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.book.format() }],
    }
  })

  server.registerTool("book-genre", { description: "Returns a random genre.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.book.genre() }],
    }
  })

  server.registerTool("book-publisher", { description: "Returns a random publisher.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.book.publisher() }],
    }
  })

  server.registerTool("book-series", { description: "Returns a random series.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.book.series() }],
    }
  })

  server.registerTool("book-title", { description: "Returns a random title.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.book.title() }],
    }
  })

  return server
}
