import { type } from "../../util/io.js";

async function command(args = "") {
	switch (args) {
		case "email":
			await type(["Email: omar@aboelmagd.me"]);
			break;
	
		case "phone":
			await type(["Phone Number: +49 000 000 000"]);
			break;
	
		case "address":
			await type(["Address: Bonn, Germany."]);
			break;
		
		default:
			await type(["Usage: contact [email|phone|address]", "Provides contact information for Omar Aboelmagd."]);
			break;
	}
}

export default command;
