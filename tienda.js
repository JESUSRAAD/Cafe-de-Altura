import { coffes } from "./data.js";
import { pushOrAcc } from "./data.js";

////////////////////////CARRITO///////////////////////
const minicar = document.createElement("div");
minicar.id = "minicar";
const nav = document.querySelector("nav");
nav.appendChild(minicar);

const divtitleSectition = document.createElement("div");
divtitleSectition.id = "divtitleSectition";
minicar.appendChild(divtitleSectition);
const titleCar = document.createElement("h3");
titleCar.innerHTML = "Carrito";
divtitleSectition.appendChild(titleCar);

const divContainerCar = document.createElement("div");
divContainerCar.id = "divContainerCar";
minicar.appendChild(divContainerCar);
const divContainerCoffes = document.createElement("div");
divContainerCoffes.id = "divContainerCoffes";
divContainerCar.appendChild(divContainerCoffes);

const divContainerButtonCheckOut = document.createElement("div");
divContainerButtonCheckOut.id = "divContainerButtonCheckOut";
minicar.appendChild(divContainerButtonCheckOut);
const aCheckoutCar = document.createElement("a");
aCheckoutCar.id = "aCheckoutCar";
aCheckoutCar.setAttribute("href", "pages/cesta.html");
aCheckoutCar.textContent = "Ver pedido";
divContainerButtonCheckOut.appendChild(aCheckoutCar);

const aClearCar = document.createElement("a");
aClearCar.id = "aClearCar";
aClearCar.textContent = "Limpiar cesta";
divContainerButtonCheckOut.appendChild(aClearCar);

const imgCarr = document.querySelector("#imgCarr");

imgCarr.addEventListener("click", () => {
  if (minicar.style.visibility === "visible") {
    minicar.style.visibility = "hidden";
  } else {
    minicar.style.visibility = "visible";
  }
});
const coffeArrCar = [];
const cardsContainer = document.querySelector("#cardsContainer");

coffes.forEach((coffe) => {
  const divCard = document.createElement("div");
  divCard.className = "product";
  cardsContainer.appendChild(divCard);

  const imgCard = document.createElement("img");
  imgCard.src = "/" + coffe.coffeImg;
  imgCard.setAttribute("alt", "cafe " + coffe.coffeName);
  divCard.appendChild(imgCard);

  const divInfoCard = document.createElement("div");
  divInfoCard.className = "texCardProducts";
  divCard.appendChild(divInfoCard);

  const bTextCard = document.createElement("b");
  bTextCard.innerHTML = coffe.coffeName;
  divInfoCard.appendChild(bTextCard);

  const pTextCard = document.createElement("p");
  pTextCard.innerHTML = coffe.coffePrice.toFixed(2) + " €";
  divInfoCard.appendChild(pTextCard);

  const aCard = document.createElement("a");
  aCard.className = "bottonInclude";
  divCard.appendChild(aCard);

  const pCard = document.createElement("p");
  pCard.className = "texBottonInclude";
  pCard.innerHTML = "Añadir";
  aCard.appendChild(pCard);

  aCard.addEventListener("click", () => {
    let coffeSelection = {
      id: coffe.id,
      img: coffe.coffeImg,
      name: coffe.coffeName,
      price: coffe.coffePrice.toFixed(2),
      acc: 1,
    };

    pushOrAcc(coffeSelection, coffeArrCar);
    divContainerCoffes.innerHTML = "";
    console.log(coffeArrCar);

    coffeArrCar.forEach((order) => {
      const miniCard = document.createElement("div");
      miniCard.className = "miniCard";

      const imgMiniCard = document.createElement("img");
      imgMiniCard.className = "imgMiniCard";
      imgMiniCard.src = "/" + order.img;
      miniCard.appendChild(imgMiniCard);

      const infoMiniCard = document.createElement("div");
      infoMiniCard.className = "infoMiniCard";
      miniCard.appendChild(infoMiniCard);

      const nameCard = document.createElement("p");
      nameCard.className = "nameCard";
      nameCard.textContent = order.name;
      infoMiniCard.appendChild(nameCard);

      const priceCard = document.createElement("p");
      priceCard.className = "priceCard";
      priceCard.textContent = order.price + "€";
      infoMiniCard.appendChild(priceCard);

      const accAndBtnX = document.createElement("div");
      accAndBtnX.className = "accAndBtnX";
      miniCard.appendChild(accAndBtnX);

      const acc = document.createElement("p");
      acc.className = "acc";
      acc.textContent = order.acc;
      accAndBtnX.appendChild(acc);

      const btnMiniCard = document.createElement("button");
      btnMiniCard.className = "buttoMiniCardStyle";
      btnMiniCard.textContent = "x";
      // btnMiniCard.innerHTML = "<img id='exportCoffeeHot' src='assets/img/ps_coffee-hot.png' alt='coffeeHot'/>";

      accAndBtnX.appendChild(btnMiniCard);

      divContainerCoffes.appendChild(miniCard);

      btnMiniCard.addEventListener("click", (event) => {
        if (order.acc === 1) {
          event.target.parentElement.parentElement.remove();
          let indexArr = coffeArrCar.indexOf(order);
          coffeArrCar.splice(indexArr, 1);
        } else {
          order.acc--;
          acc.textContent = order.acc;
        }
      });
    });
    localStorage.setItem("coffeArrCar", JSON.stringify(coffeArrCar));
  });
});
aClearCar.addEventListener("click", () => {
  divContainerCoffes.innerHTML = "";
  divContainerCoffes.innerHTML = "<p id='divClear'>El carrito esta vacio</p>";

  coffeArrCar.splice(0, coffeArrCar.length);
  localStorage.clear();
});
