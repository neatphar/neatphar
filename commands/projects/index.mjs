import { type } from "../../util/io.js";

const output = [
	"List of projects:",
	"Hanzaker         			A search engine for students in Egyptian school curriculum.",
	"Xcessible       			A job hunting platform for people with disabilities.",
	"Telegram Monitor Bot       A personal customized monitor that utilizes Telegram as a notification platform.",
	"Movie Junkie App       	A Jetpack Compose Android application written in Kotlin",
	"Homelab          			Omar's personal kubernetes-based homelab.",
	"Others           			Other projects at https://github.com/neatphar.",
];



async function command() {
	await type(output, {
		wait: 15,
		initialWait: 500,
		finalWait: 100,
		lineWait: 15,
	});
	return; 
}

export default command;
