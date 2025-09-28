// Floating hearts animation for background
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 800);

// Mini game: catch hearts
const gameArea = document.getElementById("game-area");
if (gameArea) {
  let score = 0;
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.className = "game-heart";
    heart.style.left = Math.random() * (gameArea.clientWidth - 30) + "px";
    heart.style.top = Math.random() * (gameArea.clientHeight - 30) + "px";
    heart.onclick = () => {
      score++;
      document.getElementById("score").innerText = "Score: " + score;
      heart.remove();
    };
    gameArea.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }, 1000);
}

// Styles for floating/game hearts
const style = document.createElement("style");
style.innerHTML = `
.floating-heart {
  position: fixed;
  bottom: 0;
  font-size: 24px;
  animation: floatUp linear forwards;
}
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}
.game-heart {
  position: absolute;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
}
`;
document.head.appendChild(style);
