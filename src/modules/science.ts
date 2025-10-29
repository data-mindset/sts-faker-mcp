import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function science(server: McpServer) {
  server.registerTool("science-chemicalElement", { description: "Returns a random periodic table element.", inputSchema: {} }, async () => {
    const element = faker.science.chemicalElement()
    return {
      content: [{ type: "text", text: JSON.stringify(element) }],
    }
  })

  server.registerTool("science-unit", { description: "Returns a random scientific unit.", inputSchema: {} }, async () => {
    const unit = faker.science.unit()
    return {
      content: [{ type: "text", text: JSON.stringify(unit) }],
    }
  })

  return server
}
