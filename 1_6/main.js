const express = require("express");
const path = require("path");
const app = express();
let paths = [];
  
for (let i = 1; i <= 5; i++) {
	const filePath = path.join(__dirname, "/pages/page-" + i + ".html");
	paths.push(filePath);
	app.get("/page-" + i, (_req, res) => {
		res.sendFile(paths[i - 1]);
	});
}

app.listen(80, (err) => {
	if (err) console.log("err=> ", err);
});
