let myArray = [];
for (let i = 1; i < 10; i++) {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "https://randomuser.me/api/");
  myRequest.send();
  myRequest.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const ob = JSON.parse(myRequest.response);
      const myMap = ob.results.map((el) => {
        myArray.push(el.name.first + " " + el.name.last);
      }, myArray);
      console.log(myArray);
      let infoDiv = document.querySelector(".info-display");
      let final = myArray.map((e) => {
        return `<div><span>${e}</span></div>`;
      });
      infoDiv.innerHTML = final.join("");
      let divs = document.querySelectorAll(".info-display div");
      divs.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (!el.classList.contains("ill")) el.classList.add("ill");
          else
            divs.forEach((el) => {
              el.addEventListener("mouseleave", () => {
                if (el.classList.contains("ill")) el.classList.remove("ill");
              });
            });
        });
      });

      console.log(divs);
    }
  };
}
