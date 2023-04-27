let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let timerDisplay = document.querySelector(".timerDisplay")
let int
let startOnce = 0

const startTimerBtn = document.querySelector(".startTimer")

startTimerBtn.addEventListener("click", start)

function start() {
  if (startOnce !== 0) {
    return
  }

  startOnce++

  int = setInterval(() => {
    miliseconds += 10

    if (miliseconds == 1000) {
      miliseconds = 0
      seconds++

      if (seconds == 60) {
        seconds = 0
        minutes++

        if (minutes == 60) {
          minutes = 0
          hours++
        }
      }
    }

    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    let ms =
      miliseconds < 10
        ? "00" + miliseconds
        : miliseconds < 100
        ? "0" + miliseconds
        : miliseconds

    timerDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`
  }, 1)
}

const pauseTimerBtn = document.querySelector(".pauseTimer")

pauseTimerBtn.addEventListener("click", pause)

function pause() {
  clearInterval(int)
  startOnce = 0
}

const resetTimerBtn = document.querySelector(".resetTimer")

resetTimerBtn.addEventListener("click", reset)

function reset() {
  clearInterval(int)
  ;[miliseconds, seconds, minutes, hours] = [0, 0, 0, 0]

  timerDisplay.innerHTML = `00 : 00 : 00 : 000`
  startOnce = 0
}
