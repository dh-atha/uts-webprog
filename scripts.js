document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting me!");
});

function showMore() {
  var moreContent = document.getElementById("moreContent");
  var readMoreBtn = document.getElementById("readMoreBtn");
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    readMoreBtn.textContent = "Read less";
  } else {
    moreContent.style.display = "none";
    readMoreBtn.textContent = "Read more";
  }
}
