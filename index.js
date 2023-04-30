const express = require("express");
const app = express();
let PORT = process.env.PORT  || 3000;
const data = require("./calender.json");

app.get("/", (req, res) => 
{
    res.send(data)
})

app.get("/:year", (req, res) =>
{
    const year = req.params.year;
    res.send(data[year.toString()]);
})

app.get("/:year/:month", (req, res) =>
{
    const year = req.params.year;
    const month = req.params.month;
    res.send(data[year.toString()][month.toString()]);
})

app.listen(PORT, () => 
{
    console.log(`${PORT}`);
})