const soundsKeyMap = new Map([
  [65, new Audio("./sounds/clap.wav")],
  [83, new Audio("./sounds/hihat.wav")],
  [68, new Audio("./sounds/kick.wav")],
  [70, new Audio("./sounds/openhat.wav")],
  [71, new Audio("./sounds/boom.wav")],
  [72, new Audio("./sounds/ride.wav")],
  [74, new Audio("./sounds/snare.wav")],
  [75, new Audio("./sounds/tom.wav")],
  [76, new Audio("./sounds/tink.wav")],
]);
document.addEventListener("keydown", function (e) {
  const unicode = e.keyCode ? e.keyCode : e.charCode;
  for (const [key] of soundsKeyMap.entries()) {
    if (key == unicode) {
      document.querySelector(`[data-key="${key}"]`).classList.add("playing");
      soundsKeyMap.get(key).play();
      setTimeout(function () {
        document.querySelector(`[data-key="${key}"]`).classList.remove("playing");
      }, 500);
    }
  }
});
