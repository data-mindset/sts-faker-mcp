import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function lorem(server: McpServer) {
  // Define the strategy enum for the word method
  const StrategyEnum = z.enum(["fail", "closest", "shortest", "longest", "any-length"])

  // Define the common count schema that can be either a number or a min/max object
  const countSchema = <T extends z.ZodTypeAny>(schema: T) =>
    z.union([
      schema,
      z.object({
        min: z.number().describe("The minimum number to generate."),
        max: z.number().describe("The maximum number to generate."),
      }),
    ])

  server.registerTool("lorem-word", { description: "Generates a word of a specified length.", inputSchema: {
      length: z
        .union([
          z.number(),
          z.object({
            min: z.number().describe("The minimum length of the word."),
            max: z.number().describe("The maximum length of the word."),
          }),
        ])
        .optional()
        .describe("The expected length of the word."),
      strategy: StrategyEnum.optional().describe(
        "The strategy to apply when no words with a matching length are found. Available strategies: 'fail', 'shortest', 'closest', 'longest', 'any-length'.",
      ),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.word(args) }],
      }
    },
  )

  server.registerTool("lorem-words", { description: "Generates a space separated list of words.", inputSchema: {
      count: countSchema(z.number()).optional().describe("The number of words to generate."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.words(args.count) }],
      }
    },
  )

  server.registerTool("lorem-sentence", { description: "Generates a space separated list of words beginning with a capital letter and ending with a period.", inputSchema: {
      wordCount: countSchema(z.number()).optional().describe("The number of words that should be in the sentence."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.sentence(args.wordCount) }],
      }
    },
  )

  server.registerTool("lorem-slug", { description: "Generates a slugified text consisting of the given number of hyphen separated words.", inputSchema: {
      wordCount: countSchema(z.number()).optional().describe("The number of words to generate."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.slug(args.wordCount) }],
      }
    },
  )

  server.registerTool("lorem-sentences", { description: "Generates the given number of sentences.", inputSchema: {
      sentenceCount: countSchema(z.number()).optional().describe("The number of sentences to generate."),
      separator: z.string().optional().describe("The separator to add between sentences."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.sentences(args.sentenceCount, args.separator) }],
      }
    },
  )

  server.registerTool("lorem-paragraph", { description: "Generates a paragraph with the given number of sentences.", inputSchema: {
      sentenceCount: countSchema(z.number()).optional().describe("The number of sentences to generate."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.paragraph(args.sentenceCount) }],
      }
    },
  )

  server.registerTool("lorem-paragraphs", { description: "Generates the given number of paragraphs.", inputSchema: {
      paragraphCount: countSchema(z.number()).optional().describe("The number of paragraphs to generate."),
      separator: z.string().optional().describe("The separator to use."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.paragraphs(args.paragraphCount, args.separator) }],
      }
    },
  )

  server.registerTool("lorem-text", { description: "Generates a random text based on a random lorem method.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.lorem.text() }],
    }
  })

  server.registerTool("lorem-lines", { description: "Generates the given number lines of lorem separated by '\\n'.", inputSchema: {
      lineCount: countSchema(z.number()).optional().describe("The number of lines to generate."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.lorem.lines(args.lineCount) }],
      }
    },
  )

  return server
}
