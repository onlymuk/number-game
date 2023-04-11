//랜덤번호 지정
//번호 입력 go 버튼 누름
//만약에 유저가 랜덤번호 맞추면, 맞춤
// 작다 그러면 down, 크다 그러면 up
//reset 버튼을 누르면 초기화
// 5번 기회 다 주면 게임 끝 (추측 불가 버튼 disabled)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려줌, 기회 깍지 않음
//유저가 이미 이벽한 숫자를 또 입력하면 알려준다, 기회를 깎지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameover = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
  userInput.value= "";
});

function pickRandomNum(){
  computerNum = Math.floor(Math.random()*100)+1;
  console.log(computerNum);
}

function play(){
  let userValue = userInput.value;

  if(userValue<1 || userValue>100){
    resultArea.textContent="1과 100 사이 숫자를 입력해주세요"
    return;
  }

  if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
    return;
  }
  

  chances--;
  chanceArea.textContent= `남은기회:${chances}번`;



  if(userValue < computerNum){
    resultArea.textContent = "UP!!!";
  }
  else if(userValue> computerNum){
    resultArea.textContent = "DOWN!!";
  }
  else {
    resultArea.textContent = "정답!!";
    gameover = true;
  }

  history.push(userValue);


  if(chances < 1){
    gameover =true;
  }

  if(gameover == true){
    playButton.disabled = true;
  }
}

function reset(){
  //user 인풋 창 깨끗하게 정리
  //새로운 번호 생성
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다";
  playButton.disabled = false;
}
pickRandomNum();