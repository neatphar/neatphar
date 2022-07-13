import { type } from "../../util/io.js";
import { off } from "../../util/power.js";

async function command() {
	await type(["Redirecting you to the Resume PDF. Bye."]);
	off();
	window.location.href = '/resume.pdf';
}

export default command;
