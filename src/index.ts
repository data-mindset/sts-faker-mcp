import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

// Import all Faker modules
import { airline } from "./modules/airline.js"
import { animal } from "./modules/animal.js"
import { book } from "./modules/book.js"
import { color } from "./modules/color.js"
import { commerce } from "./modules/commerce.js"
import { company } from "./modules/company.js"
import { database } from "./modules/database.js"
import { date } from "./modules/date.js"
import { finance } from "./modules/finance.js"
import { food } from "./modules/food.js"
import { git } from "./modules/git.js"
import { hacker } from "./modules/hacker.js"
import { image } from "./modules/image.js"
import { internet } from "./modules/internet.js"
import { location } from "./modules/location.js"
import { lorem } from "./modules/lorem.js"
import { music } from "./modules/music.js"
import { person } from "./modules/person.js"
import { phone } from "./modules/phone.js"
import { science } from "./modules/science.js"
import { system } from "./modules/system.js"
import { vehicle } from "./modules/vehicle.js"
import { word } from "./modules/word.js"

// Optional: Config schema (minimal or empty since Faker doesn't require configuration)
export const configSchema = z.object({})

export default function createServer({
	config,
}: {
	config: z.infer<typeof configSchema>
}) {
	const server = new McpServer({
		name: "Faker MCP Server",
		version: "1.0.0",
	})

	// Register all 23 Faker modules (230 total tools)
	airline(server)
	animal(server)
	book(server)
	color(server)
	commerce(server)
	company(server)
	database(server)
	date(server)
	finance(server)
	food(server)
	git(server)
	hacker(server)
	image(server)
	internet(server)
	location(server)
	lorem(server)
	music(server)
	person(server)
	phone(server)
	science(server)
	system(server)
	vehicle(server)
	word(server)

	return server.server
}
