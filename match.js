let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");

link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

function getMatch(link){
    request(link , cb);
}

function cb(error  , response , html){
    console.log("inside callback")
    parseData(html);
}

function parseData(html){

    let ch = cheerio.load("html");
    console.log(ch);
    let bothInnings = ch('.card.content-block.match-scorecard-table').text;
    console.log(bothInnings.length);
    for(let i = 0 ; i < bothInnings.length ; i++){
        let teamName = ch(bothInnings[i]).find('.header-title.label').text();
        console.log(teamName);
        teamName = teamName.split("INNINGS")[0].trim();
        console.log(teamName);
        let allTrs = ch(bothInnings[i]).find(".table.batsman tbody tr");
        for(let j = 0 ; j < allTrs.length-1 ; j++){
            let allTds = ch(allTrs[j]).find("td");
            if(allTds.length > 1 ){
                let batsmanName = ch(allTds[0]).find("a").text().trim();
                let runs = ch(allTds[2]).text().trim();
                let balls = ch(allTds[3]).text().trim();
                let fours = ch(allTds[5]).text().trim();
                let sixes = ch(allTds[6]).text().trim();
                let strikeRate = ch(allTds[7]).text().trim();

                processDetails(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
            }
        }
    }
    console.log("##################################################################")
}