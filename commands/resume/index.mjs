import { type } from "../../util/io.js";

async function command() {
	await type("Redirecting you to the Resume PDF...", { initialWait: 250, lineWait: 1000 });
	window.open('/resume.pdf', '_blank').focus();
	return; 
}

export default command;
