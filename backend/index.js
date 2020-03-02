"use strict";

const fs = require("fs");
const path = require("path");
const axios = require("axios");

async function downloadResume() {
  const url =
    "https://drive.google.com/file/d/14Zi2Dk-u8Akzs3BB4gvFq9Fs0XcSMjMD/view?usp=sharing";
  const resumePath = path.resolve(__dirname, "resume", "BILAL SARIMESELI TECH RESUME -page-001.jpg");
  const writer = fs.createWriteStream(resumePath);
  const response = await axios({
    url: url,
    method: "GET",
    responseType: "stream"
  });

  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

downloadResume().then(() => {
  console.log("Download Completed")
})