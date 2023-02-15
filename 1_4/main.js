const express = require("express");
const path = require("path");
const app = express();

app.get("/picture", (_req, res) => {
	const imagePath = path.join(__dirname, "village.jpg");
	res.sendFile(imagePath);
});
app.get("/home", (_req, res) => {
	const htmlContent = `<h1 style="color:red;">Home Page</h1>`;
	res.send(htmlContent);
});

app.listen(80, (err) => {
	if (err) console.log("err=> ", err);
});
