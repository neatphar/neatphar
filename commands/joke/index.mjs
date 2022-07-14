import { type } from "../../util/io.js";

function random_pick(input_array) {
	return input_array[Math.floor(Math.random() * input_array.length)];
}

const jokes = [
	["I would tell you a UDP joke...", "... but you might not get it."],
	["I'd tell you a DNS joke but be advised...", "... it could take up to 24 hours for everyone to get it."],
	["I think there is a duck in my router.", "It always goes NAT, NAT, NAT."],
	["I wanted to write an IPv4 joke...", "... but all the good ones were already exhausted."],
];


async function command() {
	await type(random_pick(jokes), { initialWait: 500, lineWait: 1000 });
	return; 
}

export default command;
