import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function music(server: McpServer) {
  server.registerTool("music-album", { description: "Returns a random album name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.music.album() }],
    }
  })

  server.registerTool("music-artist", { description: "Returns a random artist name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.music.artist() }],
    }
  })

  server.registerTool("music-genre", { description: "Returns a random music genre.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.music.genre() }],
    }
  })

  server.registerTool("music-songName", { description: "Returns a random song name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.music.songName() }],
    }
  })

  return server
}
