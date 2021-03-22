let request = require("request");
let cheerio = require("cheerio");
const getAllMatches = require("./allMatches");


let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";


request(link , cb);


function cb(error , response , html){
    console.log("inside callback");
    parseData(html);
}


function parseData(html){
    let ch = cheerio.load(html);
    let link = ch(".widget-items.cta-link a").attr("href");
    let completeLink = "https://www.espncricinfo.com"+link;
    console.log(completeLink);
    getAllMatches(completeLink);
}