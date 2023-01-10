const { Console } = require('console');
const fs= require('fs');

let scriptTag = /<script defer="defer"(.*?)<\/script>/gi;
let linkTag = /<link href=(.*?)\/static.*\"(.*?)rel="stylesheet">/gi;

let getTags = [scriptTag,linkTag];
let newTags = [];
let oldTags = [];

// read index.html file from build folder

const readHtml = ()=>{

    fs.readFile('build/index.html', 'utf-8', (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let input = data;
        for(let tag of getTags){
            if(tag.test(input)) {
            var matches = input.match(tag);
            for(var match in matches) {
                console.log(matches[match]);
                newTags.push(matches[match]);
            } 
            } else {
                console.log("No matches found!");
            }
    }
     writeHtml();
    });
}

readHtml();

// write index.html file to Experience folder

const writeHtml = ()=>{
    let input;
    fs.readFile('Experience/index.htm', 'utf-8', (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        input = data;
        for(let tag of getTags){
            if(tag.test(input)) {
            var matches = input.match(tag);
            for(var match in matches) {
                console.log(matches[match]);
                oldTags.push(matches[match]);
            } 
            } else {
                console.log("No matches found!");
            }
    }

        let newAddedOne = input.replace(oldTags[0],newTags[0]);
        let newAddedTwo = newAddedOne.replace(oldTags[1],newTags[1]);

        fs.writeFile('Experience/index.htm', newAddedTwo, err=>{
            if(err){
                console.log(err);
                return;
            }
    
        });

    });

}




