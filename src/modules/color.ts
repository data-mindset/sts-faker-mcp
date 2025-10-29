import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function color(server: McpServer) {
  // Define common schemas
  const casingSchema = z
    .enum(["lower", "upper", "mixed"])
    .optional()
    .describe("Letter type case of the generated hex color.")
  const includeAlphaSchema = z.boolean().optional().describe("Adds an alpha value to the color.")
  const cssSpaceSchema = z
    .enum(["sRGB", "display-p3", "rec2020", "a98-rgb", "prophoto-rgb"])
    .optional()
    .describe("Color space to generate the color for.")

  server.registerTool("color-human", { description: "Returns a random human-readable color name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.color.human() }],
    }
  })

  server.registerTool(
    "color-space", { description: "Returns a random color space name from the worldwide accepted color spaces.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.color.space() }],
      }
    },
  )

  server.registerTool("color-cssSupportedFunction", { description: "Returns a random css supported color function name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.color.cssSupportedFunction() }],
    }
  })

  server.registerTool("color-cssSupportedSpace", { description: "Returns a random css supported color space name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.color.cssSupportedSpace() }],
    }
  })

  server.registerTool("color-rgb", { description: "Returns an RGB color.", inputSchema: {
      prefix: z
        .string()
        .optional()
        .describe("Prefix of the generated hex color. Only applied when 'hex' format is used."),
      casing: casingSchema,
      format: z
        .union([z.literal("hex"), z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated RGB color."),
      includeAlpha: includeAlphaSchema,
    } }, async (args) => {
      const result = faker.color.rgb(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.registerTool("color-cmyk", { description: "Returns a CMYK color.", inputSchema: {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated CMYK color."),
    } }, async (args) => {
      const result = faker.color.cmyk(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.registerTool("color-hsl", { description: "Returns an HSL color.", inputSchema: {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated HSL color."),
      includeAlpha: includeAlphaSchema,
    } }, async (args) => {
      const result = faker.color.hsl(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.registerTool("color-hwb", { description: "Returns an HWB color.", inputSchema: {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated HWB color."),
    } }, async (args) => {
      const result = faker.color.hwb(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.registerTool("color-lab", { description: "Returns a LAB (CIELAB) color.", inputSchema: {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated LAB color."),
    } }, async (args) => {
      const result = faker.color.lab(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.registerTool("color-lch", { description: "Returns an LCH color.", inputSchema: {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated LCH color."),
    } }, async (args) => {
      const result = faker.color.lch(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.registerTool("color-colorByCSSColorSpace", { description: "Returns a random color based on CSS color space specified.", inputSchema: {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated color."),
      space: cssSpaceSchema,
    } }, async (args) => {
      const result = faker.color.colorByCSSColorSpace(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  return server
}
