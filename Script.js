const hour = document.getElementById("Hour");
const min = document.getElementById("Min");
const sec = document.getElementById("Sec");

const updateTime = () => {
  const currentTime = new Date();
  hour.innerHTML =
    (currentTime.getHours() % 12 < 10 ? "0" : "") +
    (currentTime.getHours() % 12) +
    " :";

  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") +
    currentTime.getMinutes() +
    " :";

  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
};

setInterval(updateTime,1000)
