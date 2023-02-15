const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("", (_req, res) => res.send("hello"));

app.listen(5000, (err) => {
	if (err) console.log("err==>", err);
});
