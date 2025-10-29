import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function database(server: McpServer) {
  server.registerTool("database-column", { description: "Returns a random database column name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.database.column() }],
    }
  })

  server.registerTool("database-type", { description: "Returns a random database column type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.database.type() }],
    }
  })

  server.registerTool("database-collation", { description: "Returns a random database collation.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.database.collation() }],
    }
  })

  server.registerTool("database-engine", { description: "Returns a random database engine.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.database.engine() }],
    }
  })

  server.registerTool("database-mongodbObjectId", { description: "Returns a MongoDB ObjectId string.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.database.mongodbObjectId() }],
    }
  })

  return server
}
