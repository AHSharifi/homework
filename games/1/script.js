const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sessor = document.getElementById("sessor");
const userBox = document.getElementById("selected");
const botSelect = document.getElementById("bot");
const userResult = document.getElementById("userResult")
const botResult = document.getElementById("botResult")
const wepons = ["🪨", "📄", "✂️"];
let userScore = 0
let botScore = 0


rock.addEventListener("click", () => {
  selectWepon(wepons[0]);
});
paper.addEventListener("click", () => {
  selectWepon(wepons[1]);
});
sessor.addEventListener("click", () => {
  selectWepon(wepons[2]);
});

function selectWepon(wepon) {
  userBox.innerHTML = wepon;
  rock.disabled = true;
  paper.disabled = true;
  sessor.disabled = true;
  const random = Math.floor(Math.random() * 3);
  botSelect.innerHTML = wepons[random];


  setTimeout(() => {
    rock.disabled = false;
    paper.disabled = false;
    sessor.disabled = false;
    result()
    userBox.innerHTML = ""
    bot.innerHTML = ""
  }, 1000);
}

function result() {
  const user = userBox.textContent;
  const bot = botSelect.textContent;

  // LOSE
  if (
    (user == wepons[0] && bot == wepons[1]) ||
    (user == wepons[1] && bot == wepons[2]) ||
    (user == wepons[2] && bot == wepons[0])
  ) {
    botScore += 1;
  }

  // WIN
  else if (
    (user == wepons[0] && bot == wepons[2]) ||
    (user == wepons[1] && bot == wepons[0]) ||
    (user == wepons[2] && bot == wepons[1])
  ) {
    userScore += 1;
  }

  else {}

  botResult.innerHTML = botScore;
  userResult.innerHTML = userScore;
}