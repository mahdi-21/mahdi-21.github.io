let myArray = [];
let myObj = {
  arr: [],
};
for (let i = 1; i < 10; i++) {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "https://randomuser.me/api/");
  myRequest.send();
  myRequest.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const ob = JSON.parse(myRequest.response);
      const myMap = ob.results.map(
        (el) => {
          myArray.push(el.name.first + " " + el.name.last);
          myObj.arr.push(ob.results);
        },
        myArray,
        myObj
      );
      // testing results :
      // console.log(myArray);
      // console.log(myObj);
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
      document.querySelectorAll(".info-display div").forEach((e) => {
        e.addEventListener("click", () => {
          for (let i of myObj.arr) {
            let extraDiv = document.querySelector(".extra-info");
            if (i[0].name.first + " " + i[0].name.last == e.textContent) {
              let finalExtra = myObj.arr.reduce(() => {
                return ` <p><span>Email :</span> ${i[0].email}</p><p><span>Phone number :</span> ${i[0].phone}</p><p><span>Location :</span> ${i[0].location.country}</p>
                <p><span>City : </span>${i[0].location.city}</p><img class="photo" src="${i[0].picture.medium}"></img>`;
              });
              extraDiv.innerHTML = finalExtra;
            }
          }
        });
      });
    }
  };
}
