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

let isTouched = false;
let count = 0;

const randomGenerator = function(list){
  let randomIndex = Math.floor(Math.random()*list.length);
  return list[randomIndex];
}

const timeOut = function(){
  document.getElementById("rabit").style.display = "block";
  document.getElementById("start").style.pointerEvents = "none";
  let rabbitPos = setInterval(() => {
    let topLeft = randomGenerator(possibleMoves);
    document.getElementById("rabit").style.top = topLeft[0] + "px";
    document.getElementById("rabit").style.left = topLeft[1] + "px";
    if(isTouched){
      clearInterval(rabbitPos);
    };
    count = count + 1;
  },500);
}

const gameOver = function(){
  isTouched = true;
  count = Math.round(count/2);
  document.getElementById("rabit").onclick = null;
  alert("YOU WON! time taken is "+count+" seconds");
};