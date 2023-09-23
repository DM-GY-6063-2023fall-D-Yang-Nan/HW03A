let bigDiam = 50;
let bigxPos = 0;
let bigyPos = 0;
let L = 200;


let smallDiam = 20;
let smallxPos = 0;
let smallyPos = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(32,178,170);
    
    //Big circle 1
    noStroke();
    fill(127,255,170);
    for(let bigxPos = 0; bigxPos <= windowWidth; bigxPos += L){
        for(let bigyPos = 0; bigyPos <= windowHeight; bigyPos += L){
            circle(bigxPos,bigyPos,bigDiam);
        }
    }

    //Big circle 2
    noStroke();
    fill(127,255,170);
    for(let bigxPos = L/2; bigxPos <= windowWidth; bigxPos += L){
        for(let bigyPos = L/2; bigyPos <= windowHeight; bigyPos += L){
            circle(bigxPos,bigyPos,bigDiam);
        }
    }


//    Small circlr 1
   noStroke();
   fill(0,191,255);
   for(let smallxPos = L/2; smallxPos <= windowWidth; smallxPos += L){
    for(let smallyPos = 0; smallyPos <= windowHeight; smallyPos += L){
        circle(smallxPos,smallyPos,smallDiam);
    }
}

//    Small circlr 2
noStroke();
fill(0,191,255);
for(let smallxPos = 0; smallxPos <= windowWidth; smallxPos += L){
 for(let smallyPos = L/2; smallyPos <= windowHeight; smallyPos += L){
     circle(smallxPos,smallyPos,smallDiam);
 }
}


}
