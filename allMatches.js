let request = require("request");
let cheerio = require("cheerio");

function getAllMatches(link){
    request(link , cb);
}

function cb(error , response , html){
    parseData(html);
}

function parseData(html){
    let ch = cheerio.load(html);
    let allATags = ch('a[data-hover = "Scorecard"]');
    for( let i = 0 ; i < allATags.length ; i++){
        let link = allATags[i].attribs("href");
        let completeLink = "https://www.espncricinfo.com" + link;
        getMatch(completeLink);
    }
}