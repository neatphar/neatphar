import { type } from "../../util/io.js";

const output = [
	"Core commands:",
	"resume         Redirects to Omar Aboelmagd's resume.",
	"contact        Provides contact information for Omar Aboelmagd.",
	"hello          Just a simple Hello message.",
	"help           Prints this message.",
	" ",
	"Misc commands:",
	"clear, joke, dino, debug, ",
	"fire, cowsay, matrix, reboot",
	" ",
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
