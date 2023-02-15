const express = require("express");
const path = require("path");
const app = express();

app.use((req, res) => {
	const url = req.url;
	const fileNumber = Number(url.split("-")[1]);
	if (fileNumber >= 1 && fileNumber <= 5) {
		res.sendFile(path.join(__dirname, `../pages/page-${fileNumber}.html`));
		return;
	}
	res.send("page not found");
});

app.listen(80, (err) => {
	if (err) console.log("err=> ", err);
});
