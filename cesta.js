
import { subTotal } from "./data.js";
import { IVATotal } from "./data.js";

const cesta=document.querySelector("#titleCesta")


const coffeArrCar = JSON.parse(localStorage.getItem("coffeArrCar")) ?? [];

cesta.textContent=`Cesta (${coffeArrCar.length})`


const paidQuantity=document.querySelector("#paidQuantity")
const totalIVA=document.querySelector("#IVA")



coffeArrCar.forEach((purchase) => {
  const purchaseCard = document.createElement("div");
  purchaseCard.className = "purchaseCard";
/////////////////////////////////////////////condenedor de btns y acc //////////////////////////////
  const purchaseBtnsCountainer = document.createElement("div");
  purchaseBtnsCountainer.className = "purchaseBtnsCountainer";
  const btnLess = document.createElement("div");
  btnLess.className = "btnLessMore";
  btnLess.innerHTML = "-";
  purchaseBtnsCountainer.appendChild(btnLess);

  btnLess.addEventListener("click", (event) => {
    if (purchase.acc === 1) {
      event.target.parentElement.parentElement.remove();
      let indexArr = coffeArrCar.indexOf(purchase);
      coffeArrCar.splice(indexArr, 1);
      localStorage.setItem("coffeArrCar", JSON.stringify(coffeArrCar));
    //   location.reload();
      paidQuantity.innerHTML=subTotal(coffeArrCar).toFixed(2)+"€";
      totalIVA.textContent=`Incluye ${IVATotal(coffeArrCar)}€ de IVA`
      cesta.textContent=`Cesta (${coffeArrCar.length})`
  
    } else {
      purchase.acc--;
      iconAcc.textContent = purchase.acc;
      localStorage.setItem("coffeArrCar", JSON.stringify(coffeArrCar));
    //   location.reload();
      paidQuantity.innerHTML=subTotal(coffeArrCar).toFixed(2)+"€";  
      totalIVA.textContent=`Incluye ${IVATotal(coffeArrCar)}€ de IVA`
      

    }
  });

  localStorage.setItem("coffeArrCar", JSON.stringify(coffeArrCar));

  const iconAcc = document.createElement("div");
  iconAcc.className = "iconAcc";
  iconAcc.innerHTML = purchase.acc;
  purchaseBtnsCountainer.appendChild(iconAcc);

  const btnMore = document.createElement("div");
  btnMore.className = "btnLessMore";
  btnMore.innerHTML = "+";
  purchaseBtnsCountainer.appendChild(btnMore);


  btnMore.addEventListener("click", () => {
    if (purchase.acc >= 1) {
        purchase.acc++;
        iconAcc.textContent = purchase.acc;
        localStorage.setItem("coffeArrCar", JSON.stringify(coffeArrCar));
        // location.reload();
        paidQuantity.innerHTML=subTotal(coffeArrCar).toFixed(2)+"€";  
        totalIVA.textContent=`Incluye ${IVATotal(coffeArrCar)}€ de IVA`

    } 
  });




  purchaseCard.appendChild(purchaseBtnsCountainer);
  /////////////////////////////////// picture//////////////////////////////////////////

  const purchasePicture = document.createElement("img");
  purchasePicture.className="purchasePicture"
  purchasePicture.src= "/"+ purchase.img
  purchaseCard.appendChild(purchasePicture);
///////////////////////////////////// info products////////////////////////

  const purchaseInfo = document.createElement("div");
  purchaseInfo.className="purchaseInfo"
  purchaseCard.appendChild(purchaseInfo);

const productName=document.createElement("p")
productName.className="productName"
productName.innerHTML=purchase.name
const productQuantity=document.createElement("p")
productQuantity.className="productQuantity"
productQuantity.textContent='Paquete de café, 250 gr';
purchaseInfo.appendChild(productName)
purchaseInfo.appendChild(productQuantity)

///////////////////////////////price products//////////////////

  const purchasePriceTotal = document.createElement("div");
  purchasePriceTotal.className="purchasePriceTotal"
  purchasePriceTotal.innerHTML=purchase.price+ "€"
  purchaseCard.appendChild(purchasePriceTotal);


  const ordercoutainer=document.querySelector("#ordercoutainer")
  ordercoutainer.appendChild(purchaseCard)
});
paidQuantity.innerHTML=subTotal(coffeArrCar).toFixed(2)+"€";  
totalIVA.textContent=`Incluye ${IVATotal(coffeArrCar)}€ de IVA`


const sendQuantity=document.querySelector("#sendQuantity")
const radioButton=document.querySelectorAll(".deliveryradiusOption")
console.log(radioButton);

radioButton.forEach((radio)=>{

radio.addEventListener("click", ()=> {
    
    const sendOption=document.querySelector('input[name="send"]:checked').value;
    
   
   sendQuantity.textContent=sendOption
});

})
const sendOption=document.querySelector('input[name="send"]:checked').value;
sendQuantity.textContent=sendOption



const totalQuantity=document.querySelector("#totalQuantity")







console.log(IVATotal(coffeArrCar));