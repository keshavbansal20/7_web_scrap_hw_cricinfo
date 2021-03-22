let request = require("request");
let cheerio = require("cheerio");
const getMatch = require("./match");
// let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";


function getAllMatches(link){
    request(link , cb);
}


function cb(error , response , html){
    if(error ){
        console.log(error);
    }else{
        parseData(html);
    }
    
}

function parseData(html){
    let ch = cheerio.load(html);
    let allATags = ch('a[data-hover = "Scorecard"]');

    for( let i = 0 ; i < allATags.length ; i++){
        let link = ch(allATags[i]).attr("href");
        let completeLink = "https://www.espncricinfo.com" + link;
        // console.log(completeLink);
        getMatch(completeLink);
    }
}


module.exports = getAllMatches;