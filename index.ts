import { schedule, type HandlerResponse } from "@netlify/functions";

export const handler = schedule(
	"* * * * *",
	async (): Promise<HandlerResponse> => {
		const timestamp = new Date().toISOString();
		console.log(`Function invoked every minute. Timestamp: ${timestamp}`);

		return {
			statusCode: 200,
		};
	},
);

