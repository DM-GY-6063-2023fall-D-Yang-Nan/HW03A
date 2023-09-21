let bigDiam = 50;
let bigxPos = 0;
let bigyPos = 0;

let smallDiam = 20;
let smallxPos = 0;
let smallyPos = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(32,178,170);
    
    //Big circle
    noStroke();
    fill(127,255,170);
    for(let bigxPos = 0; bigxPos <= windowWidth; bigxPos += 100){
        for(let bigyPos = 0; bigyPos <= windowHeight; bigyPos += 100){
            circle(bigxPos,bigyPos,bigDiam);
        }
    }

   //Small circlr
   noStroke();
   fill(0,191,255);
   for(let smallxPos = 50; smallxPos <= windowWidth; smallxPos += 100){
    for(let smallyPos = 50; smallyPos <= windowHeight; smallyPos += 100){
        circle(smallxPos,smallyPos,smallDiam);
    }
}


}
