const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const websiteParts = [
	{ url: "", message: "Root Route" },
	{ url: "home", message: "Home Route" },
	{ url: "about", message: "About Route" },
	{ url: "contact", message: "Contact Route" },
];

// let requestedPart;
// app.use((req, res, next) => {
// 	requestedPart = req.url.trim().split("/")[1];
// 	// console.log("requestedPart: ", requestedPart);
// 	const targetPart = websiteParts.find((part) => part.url === requestedPart);
// 	if (targetPart) {
// 		res.send(targetPart.message);
// 		return;
// 	}
// 	res.send("not found");
// 	next();
// });

for (const section of websiteParts) {
	app.get("./" + section.url, (_req, res) => {
		res.send(section.message);
	});
}

app.listen(80, (err) => {
	if (err) console.log("err: ", err);
});
