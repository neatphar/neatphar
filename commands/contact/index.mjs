import { type } from "../../util/io.js";

async function command(args = "") {
	switch (args) {
		case "email":
			await type(["Email: omar@aboelmagd.me"]);
			break;
	
		case "phone":
			await type(["Phone Number: +(49) 177-2708-6965"]);
			break;
	
		case "address":
			await type(["Address: Düsseldorf, Germany."]);
			break;
		
		default:
			await type(["Usage: contact [email|phone|address]", "Provides contact information for Omar Aboelmagd."]);
			break;
	}
}

export default command;
