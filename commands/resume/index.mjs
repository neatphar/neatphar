import { off } from "../../util/power.js";
import alert from "../../util/alert.js";

async function command() {
	await alert("Redirecting you to the Resume PDF.");
	off();
	window.location.href = '/resume.pdf';
}

export default command;
