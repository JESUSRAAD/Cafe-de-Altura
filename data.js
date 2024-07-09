export const coffes = [
  {
    id: 1,
    coffeName: "Costa Rica Tarrazú",
    coffePrice: 9,
    coffeImg: "assets/img/Imagesprdct green.png",
    isCoffeAvailable: true,
  },
  {
    id: 2,
    coffeName: "Colombia Los Naranjos",
    coffePrice: 9,
    coffeImg: "assets/img/Imagesprdct red.png",
    isCoffeAvailable: true,
  },
  {
    id: 3,
    coffeName: "Laos Amanecer",
    coffePrice: 9,
    coffeImg: "assets/img/Imagesprdct oliva.png",
    isCoffeAvailable: true,
  },
  {
    id: 4,
    coffeName: "Etiopía Yrgacheff",
    coffePrice: 9,
    coffeImg: "assets/img/Imagesprdct violet.png",
    isCoffeAvailable: true,
  },
  {
    id: 5,
    coffeName: "Kenia Ndunduri ",
    coffePrice: 15,
    coffeImg: "assets/img/Imagesprdct oliva kenia.png",
    isCoffeAvailable: true,
  },
  {
    id: 6,
    coffeName: "Etiopía Sidamo",
    coffePrice: 17,
    coffeImg: "assets/img/Imagesprdct violet Etiopia.png",
    isCoffeAvailable: true,
  },
  {
    id: 7,
    coffeName: "Costa Rica Monte Bello",
    coffePrice: 12,
    coffeImg: "assets/img/Imagesprdct costa Rica.png",
    isCoffeAvailable: true,
  },
  {
    id: 8,
    coffeName: "Colombia La Casita",
    coffePrice: 9,
    coffeImg: "assets/img/Imagesprdct colombia La Casita.jpg",
    isCoffeAvailable: true,
  },
];
export const pushOrAcc = (newObjet, arr) => {
  const encontrado = arr.reduce((encontrado, elementArray) => {
    if (elementArray.id === newObjet.id) {
      elementArray.acc++;
      return true;
    }
    return encontrado;
  }, false);
  if (!encontrado) {
    arr.push(newObjet);
  }
  return arr;
};

export const subTotal = (arr) => {
  const subTotalArr = [...arr];
  subTotalArr.forEach((item) => {
    item.totalPay = (item.acc * item.price).toFixed(2);
  });
  const subTotal= subTotalArr.reduce((total, item) =>total +parseFloat( item.totalPay),0);

  return subTotal;
};


export const IVATotal = (arr) => {
  const IVATotalArr = [...arr];
  
  IVATotalArr.forEach((item) => {
    item.totalIVA = ((item.price*21)/100 ).toFixed(2)* item.acc;
  });
  const subTotal= IVATotalArr.reduce((total, item) =>total +parseFloat( item.totalIVA),0);

  return subTotal;
};

