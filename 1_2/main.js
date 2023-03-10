const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const websiteParts = [
	{ url: "", message: "Root Route" },
	{ url: "home", message: "Home Route" },
	{ url: "about", message: "About Route" },
	{ url: "contact", message: "Contact Route" },
];

app.use((req, res, next) => {
	let requestedPart = req.url.trim().split("/")[1];
	const targetPart = websiteParts.find((part) => part.url === requestedPart);
	if (targetPart) {
		res.send(targetPart.message);
		return;
	}
	res.send("not found");
	next();
});

app.listen(80, (err) => {
	if (err) console.log("err: ", err);
});
