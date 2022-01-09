const quiz = [
 {
   question: '大量の単純作業と少量の複雑な作業っちがいい？',
   answers: [
     '大量の単純作業',
     '少量の複雑作業',
     'どっちもやりたくない'
     ],
      correct:"どっちもやりたくない"},
 {
   question: 'あなたは勉強と運動どっちが得意',
   answers: [
     '勉強',
     '運動',
     'もちろんどっちも得意'
     ],
     correct: 'もちろんどっちも得意'
 }, {
   question: '目の前で子供が泣いています。あなたはどうしますか？',
   answers: [
     '助ける',
     '見て見ぬ振りをする',
     'とりあえず殴る'
     ],
     correct: ''
 }, {
   question: 'あなたは数学と国語どっちが得意ですか？',
   answers: [
     '国語',
     '数学',
     'そもそも勉強が嫌い'
     ],
     correct: 'そもそも勉強が嫌い'
 }
];
 
const omoneta = ["は？調子のんな、もう一度最初からやり直せ"];

const monmese = ["・１問目","・２問目","・３問目","・４問目"]

const $button = document.getElementsByTagName("button");
const quizLength = quiz.length;
let quizIndex = 0;
let score =0;
const buttonLength = $button.length;
const monmeLength = monmese.length
let kuzu = 1;


function OnButtonClick() {
     kuzu++;
document.getElementById("monme").textContent = "・"　+ kuzu + "問目";}



const setupQuiz = () => {
 document.getElementById("kami").textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
 }};

setupQuiz();


const clickHandler = (e) => {
 if(quiz[quizIndex].correct === e.target.textContent){
      let neta =0;
      window.alert(omoneta[neta])
setTimeout(function(){
  window.location.href = "職業適性診断.html";
}, 0*1000);
      neta++;
 } else {
    window.alert('次の問題です');
    
     
   
 }

 quizIndex++;


 if(quizIndex < quizLength){
   setupQuiz();
 } else {setTimeout(function(){window.location.href = "中間.html";},0*1000);
 }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
 $button[handlerIndex].addEventListener('click', (e) => {
   clickHandler(e);
 });
 handlerIndex++;
};