const button = document.querySelector(".butt");

function navigate() {
    // window.location.href = "https://www.instagram.com/";
}

      button.addEventListener("click", (e) => {
        e.preventDefault;
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
        }, 600);
      });
