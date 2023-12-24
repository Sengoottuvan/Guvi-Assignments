const express = require("express");
const filesystem = require("fs");
const path = require("path");

const app = express();
const PORT = 7000;


//To get all Files
app.get("/filenames", function (req, res) {
  filesystem.readdir("./backup", (err, files) => {
    if (err) {
      console.log("Error ❌", err);
      res.status(400).send("Error ❌");
    }
    console.log("The content of the Backup Folder is:", files);
    const filenames = files.filter(file => path.extname(file) === '.txt');
    res.status(200).send(filenames);
    });
  });

//To CreateFiles
app.post("/createfile", function (req, res) {
  const foldername='backup';
  const Filename = `${new Date().toISOString().replace(/:/g, "-")}.txt`;
  const FileContent = new Date().toISOString();
  const filelocation=path.join(foldername,Filename);
  filesystem.writeFile(filelocation, FileContent, (err) => {
    if (err) {
      console.error("Error ❌", err);
      res.status(400).send("Error ❌");
    } else {
      console.log("Completed writing File", Filename);
      res.status(200).send(`File Name ${Filename} created`);
    }
  });
});

app.listen(PORT, () => console.log("Server Started on Port", PORT));