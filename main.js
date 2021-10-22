const voice1 = document.getElementById("voice-1");
const voice2 = document.getElementById("voice-2");
const voice3 = document.getElementById("voice-3");
const audio1 = document.getElementById("demo_sound");

window.onload = function () {
  var my_audio1 = new Audio("aisatu.mp3");
  var my_audio2 = new Audio("sanjou.mp3");
  var my_audio3 = new Audio("yoroshiku.mp3");
  voice1.onclick = function () {
    my_audio1.currentTime = 0;
    my_audio1.play();
  };
  voice2.onclick = function () {
    my_audio2.currentTime = 0;
    my_audio2.play();
  };
  voice3.onclick = function () {
    my_audio3.currentTime = 0;
    my_audio3.play();
  };
};
