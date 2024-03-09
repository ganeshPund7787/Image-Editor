const image = document.querySelector("img"),
      input = document.querySelector("input");
input.addEventListener("change", () => {
      image.src = URL.createObjectURL(input.files[0]);
});

document.querySelectorAll("button").forEach( btn  => {
      btn.addEventListener("click", (e) => {
            const innerText = e.target.innerText;
            image.setAttribute("class", innerText);
      })
});


