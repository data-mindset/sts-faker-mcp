import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function animal(server: McpServer) {
  server.registerTool(`animal-dog`, { description: "Returns a random dog breed.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.dog() }],
    }
  })

  server.registerTool(`animal-cat`, { description: "Returns a random cat breed.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.cat() }],
    }
  })

  server.registerTool(`animal-snake`, { description: "Returns a random snake species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.snake() }],
    }
  })

  server.registerTool(`animal-bear`, { description: "Returns a random bear species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.bear() }],
    }
  })

  server.registerTool(`animal-lion`, { description: "Returns a random lion species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.lion() }],
    }
  })

  server.registerTool(`animal-cetacean`, { description: "Returns a random cetacean species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.cetacean() }],
    }
  })

  server.registerTool(`animal-horse`, { description: "Returns a random horse breed.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.horse() }],
    }
  })

  server.registerTool(`animal-bird`, { description: "Returns a random bird species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.bird() }],
    }
  })

  server.registerTool(`animal-cow`, { description: "Returns a random cow species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.cow() }],
    }
  })

  server.registerTool(`animal-fish`, { description: "Returns a random fish species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.fish() }],
    }
  })

  server.registerTool(`animal-crocodilia`, { description: "Returns a random crocodilian species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.crocodilia() }],
    }
  })

  server.registerTool(`animal-insect`, { description: "Returns a random insect species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.insect() }],
    }
  })

  server.registerTool(`animal-rabbit`, { description: "Returns a random rabbit species.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.rabbit() }],
    }
  })

  server.registerTool(`animal-rodent`, { description: "Returns a random rodent breed.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.rodent() }],
    }
  })

  server.registerTool(`animal-type`, { description: "Returns a random animal type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.type() }],
    }
  })

  server.registerTool(`animal-petName`, { description: "Returns a random pet name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.animal.petName() }],
    }
  })

  return server
}
