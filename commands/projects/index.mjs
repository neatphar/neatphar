import { type } from "../../util/io.js";

const output = [
	"Usage: projects [PROJECT NAME] in order to go to the GitHub repository of the project.",
	"",
	"Hanzaker: A search engine for students in Egyptian school curriculum.",
	"Xcessible: A job hunting platform for people with disabilities.",
	"Telegram Monitor Bot: A personal customized monitor that utilizes Telegram as a notification platform.",
	"Movie Junkie App: A Jetpack Compose Android application written in Kotlin",
	"Homelab: Omar's personal kubernetes-based homelab.",
	"Others: Other projects at https://github.com/neatphar.",
];

async function command(args = "") {
	switch (args.toLowerCase()) {
		case "hanzaker":
			await type("Redirecting you to Hanzaker's GitHub repository...", { initialWait: 250, lineWait: 1000 });
			window.open('https://github.com/neatphar/hanzaker', '_blank').focus();
			break;
	
		case "xcessible":
			await type("Redirecting you to Xcessible's GitHub repository...", { initialWait: 250, lineWait: 1000 });
			window.open('https://github.com/neatphar/Xcessible', '_blank').focus();
			break;
	
		case "telegram monitor bot":
			await type("Redirecting you to Telegram Monitor Bot's GitHub repository...", { initialWait: 250, lineWait: 1000 });
			window.open('https://github.com/neatphar/telegram-monitor-bot', '_blank').focus();
			break;
	
		case "movie junkie app":
			await type("Redirecting you to Movie Junkie App's GitHub repository...", { initialWait: 250, lineWait: 1000 });
			window.open('https://github.com/neatphar/movie-junkie-app', '_blank').focus();
			break;

		case "homelab":
			await type("The GitHub repository for the Homelab is private and not accessible.", { initialWait: 250, lineWait: 1000 });
			break;
			
		case "others":
			await type("Redirecting you to neatphar's GitHub account...", { initialWait: 250, lineWait: 1000 });
			window.open('https://github.com/neatphar/', '_blank').focus();
			break;
	
		default:
			await type(output, {
				wait: 15,
				initialWait: 500,
				finalWait: 100,
				lineWait: 15,
			});
			break;
	}
}

export default command;
