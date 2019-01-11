const possibleMoves = [[215,23],
  [245,400],
  [225,760],
  [215,1125],
  [350,1248],
  [520,1175],
  [378,870],
  [525,785],
  [345,610],
  [485,420],
  [520,75],
  [350,150]];

class Counter {
  constructor (){
    this.initialTime = 0;
  }
  
  count(){
    this.initialTime++;
  }
};
  
let isTouched = false;
let time = new Counter();

const randomGenerator = function(list){
  let randomIndex = Math.floor(Math.random()*list.length);
  return list[randomIndex];
}

const withPx = number => number + "px";

const randomPos = function(document){
  let topLeft = randomGenerator(possibleMoves);
  document.getElementById("rabit").style.top = withPx(topLeft[0]);
  document.getElementById("rabit").style.left = withPx(topLeft[1]);
}

const timeOut = function(){
  document.getElementById("rabit").style.display = "block";
  document.getElementById("start").style.pointerEvents = "none";
  let rabbitPos = setInterval(() => {
    randomPos(document);
    if(isTouched){
      clearInterval(rabbitPos);
    };
    time.count();
  },500);
}

const gameOver = function(){
  isTouched = true;
  let count = Math.round(time.initialTime / 2);
  document.getElementById("rabit").onclick = null;
  alert("YOU WON! time taken is "+count+" seconds");
};