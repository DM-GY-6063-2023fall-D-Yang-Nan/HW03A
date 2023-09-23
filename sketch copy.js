let bigDiam = 50;
let bigxPos = 0;
let bigyPos = 0;
let L = 100;

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
    for(let bigxPos = 0; bigxPos <= windowWidth; bigxPos += L){
        for(let bigyPos = 0; bigyPos <= windowHeight; bigyPos += L){
            circle(bigxPos,bigyPos,bigDiam);
        }
    }

   //Small circlr
   noStroke();
   fill(0,191,255);
   for(let smallxPos = L/2; smallxPos <= windowWidth; smallxPos += L){
    for(let smallyPos = L/2; smallyPos <= windowHeight; smallyPos += L){
        circle(smallxPos,smallyPos,smallDiam);
    }
}


}
