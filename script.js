document.getElementById("toggle-button").onclick = function () {
  let content = document.getElementById("work-content");
  let header = document.getElementById("work-header");

  if (content.style.display === "none") {
    header.style.display = "block";
    content.style.display = "block";
  } else {
    header.style.display = "none";
    content.style.display = "none";
  }
};
