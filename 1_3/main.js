const express = require("express");
const { readFile } = require("fs/promises");
const app = express();

const readUsersData = async (dataFile) => {
	try {
		const jsonData = await readFile(dataFile, "utf-8");
		const data = JSON.parse(jsonData);
		return data;
	} catch (error) {
		console.log("error=> ", error);
	}
};
(async () => {
	const users = await readUsersData("./user-data.json");
	const admins = users.filter((user) => user.role === "admin");

	app.get("/get-all-users", (_req, res) => {
		res.send(users);
	});

	app.get("/admins", (_req, res) => {
		res.send(admins);
	});
})();

app.listen(80, (err) => {
	if (err) console.log("err=>> ", err);
});
