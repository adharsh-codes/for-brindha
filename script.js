const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const bgMusic = document.getElementById("bgMusic");
const video = document.getElementById("myVideo");

/* Hearts generation (NO LAG) */
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

/* Limited hearts = smooth */
setInterval(createHeart, 350);

/* Navigation */
function goToVideo() {
  screen1.classList.remove("active");
  screen2.classList.add("active");
}

function goToText() {
  video.pause();
  bgMusic.play(); // music starts AFTER video

  screen2.classList.remove("active");
  screen3.classList.add("active");

  typeText();
}

/* Typing effect (FASTER) */
const message = `
Dear Brindha ❤️,

From the moment you came into my life,
everything felt warmer, softer, and brighter.

Even though distance keeps us apart,
my heart is always right there with you.

You are my calm,
my smile,
my happiness,
my everything.

Happy Valentine’s Day, my love 💖

Forever yours,
Bujji 💕
`;

let index = 0;
const speed = 40; // 👈 faster typing

function typeText() {
  if (index < message.length) {
    document.getElementById("loveText").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}
