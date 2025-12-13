const params = new URLSearchParams(window.location.search);
const videoUrl = params.get("v");

const locked = document.getElementById("locked");
const player = document.getElementById("player");
const videoSrc = document.getElementById("videoSrc");
const video = document.getElementById("video");

if (videoUrl) {
  locked.classList.add("hidden");
  player.classList.remove("hidden");
  videoSrc.src = decodeURIComponent(videoUrl);
  video.load();
}

// anti inspect basic
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","C","J"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});
