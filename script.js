const text = document.getElementById("text");
const secret = document.getElementById("secret")

const hour = new Date().getHours();
if (hour >= 5 && hour < 11){
    text.textContent = "おはよう！二度寝でもする？"
} else if (hour >= 11 && hour < 17){
    text.textContent = "こんにちは！元気？"
} else if (hour >= 17 && hour < 23){
    text.textContent = "こんばんは！今日も一日お疲れ様！"
} else {
    text.textContent = "…まだ起きてるの？体調心配だから寝てほしいな…"
}

text.addEventListener("click",() =>{
    alert("長押しとかしたら知らない！");
    secret.style.opacity = 1;
})

let pressTimer;


function goLovePage() {
  window.location.href = "love.html";
}

text.addEventListener("touchstart", () => {
  pressTimer = setTimeout(goLovePage, 800);
});

text.addEventListener("touchend", () => {
  clearTimeout(pressTimer);
});

text.addEventListener("mousedown", () => {
  pressTimer = setTimeout(goLovePage, 800);
});

text.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});

text.addEventListener("mouseleave", () => {
  clearTimeout(pressTimer);
});
