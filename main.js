let myArray = [];
let infoDiv = document.querySelector(".info-display");


let burgerMenu=document.querySelector(".container");
let myList=document.getElementsByTagName("ul");


burgerMenu.addEventListener("click",()=>{
   if(!myList[0].classList.contains("show"))
   myList[0].classList.add("show")
   else
   myList[0].classList.remove("show")
})

for (let i = 1; i < 10; i++) {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "https://randomuser.me/api/");
  myRequest.send();
  myRequest.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const ob = JSON.parse(myRequest.response);
      myArray[i] = ob;
      var el = document.createElement("div");
      el.setAttribute("id",i);
      el.innerHTML = "<span>"+ ob.results[0].name.first + " " +  ob.results[0].name.last+"</span>";
      
      el.addEventListener("mouseenter", () => {
        el.classList.add("ill");
      });
      el.addEventListener("mouseleave", () => {
            el.classList.remove("ill");
          });
      el.addEventListener("click", () => {
        var id = el.getAttribute("id");
        document.getElementsByClassName("email")[0].innerHTML = myArray[id].results[0].email;
        document.getElementsByClassName("phone")[0].innerHTML = myArray[id].results[0].phone;
        document.getElementsByClassName("location")[0].innerHTML = myArray[id].results[0].location.country;
        document.getElementsByClassName("city")[0].innerHTML = myArray[id].results[0].location.city;
        document.querySelector(".photo").setAttribute("src",myArray[id].results[0].picture.medium);
      });
      infoDiv.append(el);
    }};   
  }
  
//       return;
//       const myMap = ob.results.map(
//         (el) => {
//           myArray.push(el.name.first + " " + el.name.last);
//           myObj.arr.push(ob.results);
//         },
//         myArray,
//         myObj
//       );
//       // testing results :
//       // console.log(myArray);
//       // console.log(myObj);
//       let final = myArray.map((e) => {
//         return `<div><span>${e}</span></div>`;
//       });
//       infoDiv.innerHTML = final.join("");
      // let divs = document.querySelectorAll(".info-display div");
      // console.log(divs);
      // divs.forEach((el) => {
      //   el.addEventListener("mouseenter", () => {
      //     el.classList.add("ill");
      //   });
      //   el.addEventListener("mouseleave", () => {
      //     el.classList.remove("ill");
      //   });
      // });
     
//       document.querySelectorAll(".info-display div").forEach((e) => {
//         e.addEventListener("click", () => {
//           for (let i of myObj.arr) {
//             let extraDiv = document.querySelector(".extra-info");
//             if (i[0].name.first + " " + i[0].name.last == e.textContent) {
//               let finalExtra = myObj.arr.reduce(() => {
//                 return ` <p><span>Email :</span> ${i[0].email}</p><p><span>Phone number :</span> ${i[0].phone}</p><p><span>Location :</span> ${i[0].location.country}</p>
//                 <p><span>City : </span>${i[0].location.city}</p><img class="photo" src="${i[0].picture.medium}"></img>`;
//               });
//               extraDiv.innerHTML = finalExtra;
//             }
//           }
//         });
//       });
//     }
//   };
// }
