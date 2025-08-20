import { schedule, type HandlerResponse } from "@netlify/functions";

export const handler = schedule(
	"45 1 * * *",
	async (): Promise<HandlerResponse> => {
		const currentTime = new Date().toLocaleTimeString("en-US", {
			timeZone: "Asia/Jakarta",
		});
		console.log(`Function invoked at ${currentTime} WIB.`);
		console.log(
			"This is the task that will run automatically at 08:45 WIB on Netlify!",
		);

		return {
			statusCode: 200,
		};
	},
);

