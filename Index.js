const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const requests = require('requests');

const htmlFile = fs.readFileSync("Index.html", 'utf-8');

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature =  temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature =  temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature =  temperature.replace("{%location%}", orgVal.name);
    temperature =  temperature.replace("{%country%}", orgVal.sys.country);
    return temperature;
}

app.get('/', (req, res) => {

    requests('http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7450e1534517642757676a1d1e064739')
    
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        // console.log(arrdata[0].main.temp);
        const realtimedata = arrdata.map((val) =>  replaceVal(htmlFile, val)).join("");
        res.send(realtimedata);
    })
    
    .on("end", (err) => {
        if (err) return console.log("connections closed dur to errors", err);
        // res.end();
    });
});

app.listen(8000, () => {
    console.log("server listing on port 8000");
});