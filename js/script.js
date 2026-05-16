const c = document.getElementById("c");
const x = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;
const ch = "01アイウカキMBG<>{}[]#%";
const cols = Math.floor(innerWidth / 14);
const drops = Array(cols).fill(1);
setInterval(() => {
  x.fillStyle = "rgba(5,13,6,0.05)";
  x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = "#00ff41";
  x.font = "13px Share Tech Mono";
  drops.forEach((y, i) => {
    x.fillText(ch[Math.floor(Math.random() * ch.length)], i * 14, y * 14);
    if (y * 14 > c.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}, 50);
window.onresize = () => {
  c.width = innerWidth;
  c.height = innerHeight;
};

document.addEventListener("mousemove", (e) => {
  const hue = Math.round((e.clientX / innerWidth) * 360);
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
  document.body.style.setProperty("--hue", hue);
});

const jokeEl = document.querySelector('.joke');
const sound = new Audio('assets/sound.mp3');
const originalHTML = jokeEl.innerHTML;

jokeEl.addEventListener('mouseenter', () => {
  jokeEl.innerHTML = 'jangan di tekan';
  jokeEl.style.color = '#ff003c'; // Make it red to look like a warning
});

jokeEl.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.play().catch(e => console.log('Playback prevented: ', e));
});

jokeEl.addEventListener('mouseleave', () => {
  jokeEl.innerHTML = originalHTML;
  jokeEl.style.color = ''; // Reset to CSS default
});
