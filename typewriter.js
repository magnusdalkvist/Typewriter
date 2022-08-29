const text = document.querySelector(".typewritten").textContent;
let speed;
let i = 0;

document.querySelector(".typewritten").textContent = "";
document.querySelector("#start").addEventListener("click", start);

function start() {
  i = 0;
  document.querySelector(".typewritten").textContent = "";
  typeWriter();
}

function typeWriter() {
  document.querySelector("#typekey1").load();
  document.querySelector("#typekey2").load();

  if (i < text.length) {
    document.querySelector(".typewritten").textContent += text.charAt(i);
    i++;

    if (text.charAt(i) == " ") {
      document.querySelector("#typespace").play();
    } else if (i == text.length) {
      document.querySelector("#typelast").play();
    } else {
      document.querySelector("#typekey" + Math.floor(Math.random() * 2 + 1)).play();
    }
    speed = Math.random() * (300 - 200) + 200;
    setTimeout(typeWriter, speed);
  }
}
