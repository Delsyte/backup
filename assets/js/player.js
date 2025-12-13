// ================= CONFIG =================
const VALID_IDS = {
  "abc123": "https://domain-lo/video1.mp4",
  "xyz789": "https://domain-lo/video2.mp4"
};
// =========================================

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const locked = document.getElementById("locked");
const player = document.getElementById("player");
const videoSrc = document.getElementById("videoSrc");
const video = document.getElementById("video");

if (id && VALID_IDS[id]) {
  locked.classList.add("hidden");
  player.classList.remove("hidden");
  videoSrc.src = VALID_IDS[id];
  video.load();
}

// ===== Basic Anti Inspect =====
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","C","J"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});
