const mobileNav = document.querySelector(".mobile-nav-list");
const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const exitButton = document.querySelector(".exit-button");
const overlay = document.querySelector(".overlay");

const accordButton = document.querySelectorAll(".accord-btn");
const footerBlock = document.querySelectorAll(".footer-block");
const navBar = document.querySelector(".desktop-nav");
const mainCatagoriesNavMen = document.querySelector(".main-catagories-nav-men");
const mainCatagoriesNavWomen = document.querySelector(
  ".main-catagories-nav-women"
);

const chevronDownMen = document.querySelector(".chevron-down-men");
const chevronDownWomen = document.querySelector(".chevron-down-women");
const smallSizeChartButtons = document.querySelectorAll(
  ".catagories-template__content-gallary-card__img-content__add-to-cart .size-chart-component-option"
);

const addToCartButton = document.querySelector(".add-to-cart-button");
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
const shoppingCartIcon = document.querySelector(".shopping-cart-icon");
const shoppingCartNav = document.querySelector(".add-to-cart-nav");
//** I am going to use this
const shoppingCartList = document.querySelector(".a-t-c__items-list");
console.log(shoppingCartList);
const continueShoppingButton = document.querySelector(
  ".a-t-c__continue-shopping-btn"
);

const catagoriesGallaryCards = document.querySelectorAll(
  ".catagories-template__content-gallary-card"
);

const catagoriesGallaryCardButtons = document.querySelectorAll(
  ".add-to-cart-button"
);

const numberOfItem = document.querySelector(".number-of-item");

const subtotalPrice = document.querySelector(".price-number");

const checkoutButton = document.querySelector(".checkout-button");

//Clothing page elements

const mainAddToCartButton = document.querySelector(".c-t-add-to-cart-button");

const mainSizeChartButtons = document.querySelectorAll(".c-t-s-c-c-o");

let clicks = 0;
let subtotal = 0.0;
let number = 0;

const acountIcon = document.querySelector(".fa-user-circle");
const formSection = document.querySelector(".form-section");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");
const signInformExitButton = document.querySelector(
  ".sign-in-form .form-exit-button"
);

const signUpformExitButton = document.querySelector(
  ".sign-up-form .form-exit-button"
);
const swtichToSignUp = document.querySelector(
  ".sign-up-form__sign-up-text-button"
);

const swtichToSignIn = document.querySelector(
  ".sign-up-form__sign-in-text-button"
);

const colorButtons = document.querySelectorAll(".color-option");
const ctColorButtons = document.querySelectorAll(".c-t-color");
// //Color Option Button Highlight
function colorOptionHighlight(colorButtons) {
  for (let colorButton of colorButtons) {
    colorButton.remove();
  }
}

colorOptionHighlight(colorButtons);
colorOptionHighlight(ctColorButtons);

// colorOptionHighlight(colorButtons);

/* ---- Implementing the Form ---- */

acountIcon.addEventListener("click", () => {
  overlay.style.display = "block";
  body.classList.add("no-scroll");
  formSection.classList.remove("no-display");
  formSection.classList.remove("visible-hidden");
  signInForm.classList.remove("no-display");
  signInForm.classList.remove("visible-hidden");
});

signInformExitButton.addEventListener("click", () => {
  signInForm.classList.add("visible-hidden");
  signInForm.classList.add("no-display");
  formSection.classList.add("visible-hidden");
  formSection.classList.add("no-display");
  body.classList.remove("no-scroll");
  overlay.style.display = "none";
});

signUpformExitButton.addEventListener("click", () => {
  signUpForm.classList.add("visible-hidden");
  signUpForm.classList.add("no-display");
  formSection.classList.add("visible-hidden");
  formSection.classList.add("no-display");
  body.classList.remove("no-scroll");
  overlay.style.display = "none";
});

swtichToSignUp.addEventListener("click", () => {
  signInForm.classList.add("visible-hidden");
  signInForm.classList.add("no-display");
  signUpForm.classList.remove("visible-hidden");
  signUpForm.classList.remove("no-display");
});

swtichToSignIn.addEventListener("click", () => {
  signUpForm.classList.add("visible-hidden");
  signUpForm.classList.add("no-display");
  signInForm.classList.remove("visible-hidden");
  signInForm.classList.remove("no-display");
});

/* ---- Implementing the Shopping Cart Items ---- */

getDataToLocalStorage();

catagoriesGallaryCardButtons.forEach((element) => {
  element.addEventListener("click", () => {
    const card = {
      name: "",
      size: "",
      image: "",
      price: "",
      itemNumber: "",
      URL: "",
      location: "",
    };

    const cardInfo = {
      name: "",
      size: "",
      image: "",
      price: "",
      itemNumber: "",
      URL: "",
      location: "",
    };

    //getting the name
    let textLinage =
      element.parentElement.parentElement.parentElement.parentElement
        .children[1];
    console.log("name", textLinage);
    let cardName = textLinage.children[0].textContent;
    console.log;
    cardInfo.name = cardName;
    let cardTitle = document.createElement("h4");
    cardTitle.textContent = cardName;
    card.name = cardTitle;
    console.log("updatedName", textLinage);
    //getting the size
    let selectedSizes = Array.from(element.previousElementSibling.children);
    selectedSizes.forEach((selectedSize) => {
      if (selectedSize.classList.contains("small-border-on")) {
        let sizePara = document.createElement("p");
        cardInfo.size = ` Size: ${selectedSize.textContent}`;
        sizePara.textContent = ` Size: ${selectedSize.textContent}`;
        card.size = sizePara;
      }
    });

    //getting Location
    cardInfo.location = `${document.location.pathname}`;
    console.log(cardInfo.location);

    //getting the image
    let imgSrc =
      element.parentElement.parentElement.parentElement.children[0].children[0]
        .attributes[0].textContent;
    console.log("imgSrc", imgSrc);
    cardInfo.image = imgSrc;
    let newImg = document.createElement("img");
    newImg.setAttribute("src", imgSrc);

    card.image = newImg;

    //getting the price
    let price = textLinage.children[1].textContent;
    console.log("price textlinage", textLinage.children);
    cardInfo.price = price;
    let pricePara = document.createElement("p");
    pricePara.textContent = price;
    card.price = pricePara;
    console.log("hello there -1");
    //Getting URL
    cardInfo.URL = `${document.baseURI}`;
    console.log(cardInfo.URL);

    // Create and get itemNumber
    number++;
    card.itemNumber = shoppingCartList.children.length + 1;
    cardInfo.itemNumber = JSON.stringify(card.itemNumber);
    let itemNum = document.createElement("p");
    itemNum.textContent = `Item Number:  ${card.itemNumber}`;

    //Creating the item card
    let itemCard = document.createElement("li");
    itemCard.classList.add("selected-item-card");
    let itemCardHeader = document.createElement("div");
    itemCardHeader.classList.add("item-card__header");

    //Creating anchor tag
    let anchorTag = document.createElement("a");
    let hrefAttribute =
      element.parentElement.parentElement.parentElement.children[0]
        .attributes[0].textContent;
    console.log(hrefAttribute);
    cardInfo.URL = hrefAttribute;
    anchorTag.setAttribute("href", hrefAttribute);

    //Append image to anchor tag
    anchorTag.appendChild(card.image);

    //Append image to anchor tag
    itemCard.appendChild(anchorTag);

    //Create Text content of the item card
    let itemCardTextContent = document.createElement("div");
    //Creating button to delete shopping items
    let deleteShoppingItemButton = document.createElement("button");
    deleteShoppingItemButton.style.marginLeft = "1rem";
    //Adding class to style button
    deleteShoppingItemButton.classList.add("delete-shopping-item-button");
    let deleteShoppingItemButtonContent = document.createElement("i");
    deleteShoppingItemButtonContent.classList.add(
      "fas",
      "fa-times",
      "shopping-item-button-exit-sign"
    );
    deleteShoppingItemButton.appendChild(deleteShoppingItemButtonContent);
    //Append text content to item Card
    itemCard.appendChild(itemCardTextContent);

    //Append item card header to text content
    itemCardTextContent.append(itemCardHeader);

    //Append title  to text header
    itemCardHeader.appendChild(card.name);

    //Append delete button to text header
    itemCardHeader.appendChild(deleteShoppingItemButton);

    //Append size  to text content
    itemCardTextContent.appendChild(card.size);

    //Append item number to text content
    itemCardTextContent.appendChild(itemNum);

    //Append size  to text content
    itemCardTextContent.appendChild(card.price);
    shoppingCartList.appendChild(itemCard);

    //Add The Price To The Subtotal
    function addPriceToSubtotal() {
      numberOfItem.textContent = shoppingCartList.children.length;
      console.log("price", price);
      let priceNoDollarSign = price.slice(1);
      let convertedPrice = parseFloat(priceNoDollarSign);

      console.log("convertedPrice", convertedPrice);
      let convertedSubtotal = parseFloat(subtotalPrice.textContent);
      subtotal = convertedPrice + convertedSubtotal;
      console.log("subtotal", subtotal);
      if (subtotal > 0) {
        checkoutButton.disabled = false;
      }
      subtotalPrice.textContent = subtotal.toFixed(2);
    }
    addPriceToSubtotal();
    clickShoppingCart();
    function subtractPriceFromSubtotal() {
      //Get price of item
      numberOfItem.textContent = shoppingCartList.children.length - 1;
      let priceNoDollarSign = price.slice(1);
      console.log("priceNoDollarSign", priceNoDollarSign);
      //convert price into a number
      let convertedPrice = parseFloat(priceNoDollarSign);
      //Get current subtotal
      let currentSubtotal = subtotalPrice.textContent;
      console.log("currentSubtotal", currentSubtotal);
      //convert price into a number
      let convertedCurrentSubtotal = parseFloat(currentSubtotal);
      console.log("convertedCurrentSubtotal", convertedCurrentSubtotal);
      //Subtract the subtotal by the price
      let newSubtotal = convertedCurrentSubtotal - convertedPrice;
      console.log("newSubtotal", newSubtotal);
      //Update subtotal
      console.log(subtotalPrice);
      subtotalPrice.textContent = newSubtotal.toFixed(2);
      console.log(subtotalPrice.textContent);
      if (subtotalPrice.textContent === "0.00") {
        checkoutButton.disabled = true;
      }
    }
    //Delete Item clicking exit button
    deleteShoppingItemButton.addEventListener("click", (element) => {
      let itemCode =
        element.target.parentElement.parentElement.parentElement.children[3]
          .textContent;
      console.log("itemCode", itemCode);
      let itemCodeNumber = itemCode.slice(13, 15);
      console.log("deleteButton", itemCodeNumber);
      removeDataToLocalStorage(itemCodeNumber);
      subtractPriceFromSubtotal();
      itemCard.remove();
    });
    addDataToLocalStorage(cardInfo);
  });
});

// MAKE A FUNCTION ADD THE DATA INTO THE LOCAL STORAGE

function addDataToLocalStorage(card) {
  let cards;
  if (sessionStorage.getItem("cards") === null) {
    cards = [];
  } else {
    cards = JSON.parse(sessionStorage.getItem("cards"));
  }
  cards.push(card);
  sessionStorage.setItem("cards", JSON.stringify(cards));
}

function removeDataToLocalStorage(item) {
  let cards;
  if (sessionStorage.getItem("cards") === null) {
    cards = [];
  } else {
    cards = JSON.parse(sessionStorage.getItem("cards"));
  }
  let indexOfCardItem = cards.findIndex((element) => {
    console.log(`item`, item);
    return element.itemNumber === item;
  });

  cards.splice(indexOfCardItem, 1);
  sessionStorage.setItem("cards", JSON.stringify(cards));
}

function getDataToLocalStorage() {
  let cards;
  if (sessionStorage.getItem("cards") === null) {
    cards = [];
  } else {
    cards = JSON.parse(sessionStorage.getItem("cards"));
  }
  cards.forEach((element) => {
    // Create and Get Name
    let cardTitle = document.createElement("h4");
    cardTitle.textContent = element.name;

    // Create and Get size
    let sizePara = document.createElement("p");
    sizePara.textContent = element.size;

    // Create and Get img
    let imgSrc = element.image;
    let newImg = document.createElement("img");
    newImg.setAttribute("src", imgSrc);
    newImg.setAttribute("id", element.location);
    newImg.classList.add("shopping-cart-list-item-img");

    // Create and Get Price
    let price = element.price;
    let pricePara = document.createElement("p");
    pricePara.textContent = price;

    // Create and get itemNumber

    let itemNum = document.createElement("p");
    itemNum.textContent = `Item Number: ${element.itemNumber}`;

    //Creating the item card
    let itemCard = document.createElement("li");
    itemCard.classList.add("selected-item-card");
    let itemCardHeader = document.createElement("div");
    itemCardHeader.classList.add("item-card__header");

    //Creating anchor tag
    let anchorTag = document.createElement("a");
    let hrefAttribute = element.URL;
    anchorTag.setAttribute("href", hrefAttribute);
    anchorTag.classList.add("shopping-cart-list-item-link");
    anchorTag.setAttribute("id", element.location);
    //Append image to anchor tag
    anchorTag.appendChild(newImg);

    //Append image to anchor tag
    itemCard.appendChild(anchorTag);

    //Create Text content of the item card
    let itemCardTextContent = document.createElement("div");
    //Creating button to delete shopping items
    let deleteShoppingItemButton = document.createElement("button");
    deleteShoppingItemButton.style.marginLeft = "1rem";
    //Adding class to style button
    deleteShoppingItemButton.classList.add("delete-shopping-item-button");
    let deleteShoppingItemButtonContent = document.createElement("i");
    deleteShoppingItemButtonContent.classList.add(
      "fas",
      "fa-times",
      "shopping-item-button-exit-sign"
    );
    deleteShoppingItemButton.appendChild(deleteShoppingItemButtonContent);
    //Append text content to item Card
    itemCard.appendChild(itemCardTextContent);
    //Append item card header to text content
    itemCardTextContent.append(itemCardHeader);
    //Append title  to text header
    itemCardHeader.appendChild(cardTitle);
    //Append delete button to text header
    itemCardHeader.appendChild(deleteShoppingItemButton);
    //Append size  to text content
    itemCardTextContent.appendChild(sizePara);
    //Append price  to text content
    itemCardTextContent.appendChild(pricePara);
    //Append  item number to text content
    itemCardTextContent.appendChild(itemNum);
    shoppingCartList.appendChild(itemCard);

    function addPriceToSubtotal() {
      numberOfItem.textContent = shoppingCartList.children.length;
      let priceNoDollarSign = element.price.slice(1);
      let convertedPrice = parseFloat(priceNoDollarSign);
      console.log("cPrice", convertedPrice);
      let convertedSubtotal = parseFloat(subtotalPrice.textContent);
      subtotal = convertedPrice + convertedSubtotal;
      console.log("subtotal", subtotal);
      if (subtotal > 0) {
        checkoutButton.disabled = false;
      }
      subtotalPrice.textContent = subtotal.toFixed(2);
    }

    addPriceToSubtotal();

    function subtractPriceFromSubtotal() {
      //Get price of item
      numberOfItem.textContent = shoppingCartList.children.length - 1;
      let priceNoDollarSign = element.price.slice(1);
      console.log("priceNoDollarSign", priceNoDollarSign);
      //convert price into a number
      let convertedPrice = parseFloat(priceNoDollarSign);
      //Get current subtotal
      let currentSubtotal = subtotalPrice.textContent;
      console.log("currentSubtotal", currentSubtotal);
      //convert price into a number
      let convertedCurrentSubtotal = parseFloat(currentSubtotal);
      console.log("convertedCurrentSubtotal", convertedCurrentSubtotal);
      //Subtract the subtotal by the price
      let newSubtotal = convertedCurrentSubtotal - convertedPrice;
      console.log("newSubtotal", newSubtotal);
      //Update subtotal
      console.log(subtotalPrice);
      subtotalPrice.textContent = newSubtotal.toFixed(2);
      console.log(subtotalPrice.textContent);
      if (subtotalPrice.textContent === "0.00") {
        checkoutButton.disabled = true;
      }
    }

    //Delete Item clicking exit button
    deleteShoppingItemButton.addEventListener("click", (element) => {
      let itemCode =
        element.target.parentElement.parentElement.parentElement.children[3]
          .textContent;
      console.log("itemCode", itemCode);
      let itemCodeNumber = itemCode.slice(13, 15);
      console.log("deleteButton", itemCodeNumber);
      removeDataToLocalStorage(itemCodeNumber);
      subtractPriceFromSubtotal();
      itemCard.remove();
    });
    checkoutButton.disabled = false;
  });
}

// callback functions

function clickHamburger() {
  overlay.style.display = "block";
  body.classList.toggle("no-scroll");
  mobileNav.classList.toggle("smallNavAppear");
}

function clickShoppingCart() {
  overlay.style.display = "block";
  body.classList.add("no-scroll");
  shoppingCartNav.classList.toggle("shoppingCartAppear");
}

function clickExitButton() {
  mainCatagoriesNavMen.children[1].classList.remove("open");
  mainCatagoriesNavWomen.children[1].classList.remove("open");
  chevronDownMen.classList.remove("rotate");
  chevronDownWomen.classList.remove("rotate");
  overlay.style.display = "none";
  body.classList.remove("no-scroll");
  mobileNav.classList.remove("smallNavAppear");
}

function clickExitShoppingCart() {
  overlay.style.display = "none";
  body.classList.remove("no-scroll");
  shoppingCartNav.classList.remove("shoppingCartAppear");
}

function openCloseNav(nav1) {
  nav1.childNodes[3].classList.toggle("open");
}

function clickAccordButton(e) {
  if (e.target === accordButton[0]) {
    footerBlock[0].classList.toggle("display");
  } else if (e.target === accordButton[1]) {
    footerBlock[1].classList.toggle("display");
  } else if (e.target === accordButton[2]) {
    footerBlock[2].classList.toggle("display");
  }
}

//Overlay Resizing

// window.addEventListener("resize", clickExitButton);

//AddEventListener

// Exit Shopping Cart Button
overlay.addEventListener("click", clickExitShoppingCart);
continueShoppingButton.addEventListener("click", clickExitShoppingCart);

//Shopping Cart Icon

shoppingCartIcon.addEventListener("click", clickShoppingCart);

//Hamburger Menu
hamburger.addEventListener("click", clickHamburger);
exitButton.addEventListener("click", clickExitButton);
overlay.addEventListener("click", clickExitButton);

//Accordion Button
for (let accordItem of accordButton) {
  accordItem.addEventListener("click", clickAccordButton);
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 176) {
    navBar.style.backgroundColor = "#363636ee";
  } else {
    navBar.style.backgroundColor = "#363636";
  }
});

//Reset Disabling Buttons

document.addEventListener("DOMContentLoaded", () => {
  for (let atcartButton of addToCartButtons) {
    atcartButton.disabled = true;
  }
  if (shoppingCartList.children.length === 0) {
    checkoutButton.disabled = true;
  } else {
    checkoutButton.disabled = false;
  }
  mainAddToCartButton.disabled = true;
});

//Catagories Nav Open

mainCatagoriesNavMen.addEventListener("click", () => {
  if (window.innerWidth <= 992) {
    console.log(mainCatagoriesNavMen);
    mainCatagoriesNavMen.children[1].classList.toggle("open");
    chevronDownMen.classList.toggle("rotate");
    chevronDownWomen.classList.remove("rotate");
    mainCatagoriesNavWomen.children[1].classList.remove("open");
  } else {
    console.log("nothing");
  }
});

mainCatagoriesNavWomen.addEventListener("click", () => {
  if (window.innerWidth <= 992) {
    console.log("working");
    mainCatagoriesNavWomen.children[1].classList.toggle("open");
    chevronDownWomen.classList.toggle("rotate");
    chevronDownMen.classList.remove("rotate");
    mainCatagoriesNavMen.children[1].classList.remove("open");
  } else {
    console.log("nothing");
  }
});

//Size Chart Button Highlight
function sizebuttonHighlight(sizeButtons) {
  for (let sizeButton of sizeButtons) {
    sizeButton.addEventListener("click", () => {
      for (let smallSizeChartButton of sizeButtons) {
        if (sizeButtons === smallSizeChartButtons) {
          smallSizeChartButton.classList.remove("small-border-on");
        } else if (sizeButtons === mainSizeChartButtons) {
          smallSizeChartButton.classList.remove("large-border-on");
        }
      }
      if (sizeButtons === smallSizeChartButtons) {
        sizeButton.classList.add("small-border-on");
      } else if (sizeButtons === mainSizeChartButtons) {
        sizeButton.classList.add("large-border-on");
      }

      if (sizeButtons === smallSizeChartButtons) {
        sizeButton.parentElement.nextElementSibling.disabled = false;
        sizeButton.parentElement.nextElementSibling.textContent = "ADD TO CART";
      } else if (sizeButtons === mainSizeChartButtons) {
        sizeButton.parentElement.parentElement.nextElementSibling.nextElementSibling.disabled = false;
        sizeButton.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent =
          "ADD TO CART";
      }
    });
  }
}

sizebuttonHighlight(smallSizeChartButtons);
sizebuttonHighlight(mainSizeChartButtons);

const shoppingCartListItemImgs = document.querySelectorAll(
  ".shopping-cart-list-item-img"
);

const shoppingCartListItemLinks = document.querySelectorAll(
  ".shopping-cart-list-item-link"
);

console.log(shoppingCartListItemImgs);

function changeHrefAndSrc() {
  window.addEventListener("DOMContentLoaded", () => {
    for (sclItemLink of shoppingCartListItemLinks) {
      let newSrc = sclItemLink.children[0].attributes[0].textContent;
      console.log("newSrc", newSrc);
      let updatedSrc = newSrc.replace("../../../", "/Zay-Project/");
      console.log("updatedSrc", updatedSrc);
      newSrc = updatedSrc;
    }
  });
}

changeHrefAndSrc();
//  window.addEventListener("DOMContentLoaded", () => {
//     console.log("addEventListener working");
//     console.log(
//       "is if-doc.BaseURI true?",
//       document.baseURI === URLOne || document.baseURI === URLTwo
//     );
//     console.log("document.baseURI: ", document.baseURI);
//     console.log("URLOne: ", URLOne);
//     console.log("URLTwo: ", URLTwo);
//     if (document.baseURI === URLOne || document.baseURI === URLTwo) {
//       console.log("if-doc.BaseURI is working!");
//       for (let shoppingCartListItemImg of shoppingCartListItemImgs) {
//         //Get the src of the images in the Shopping Cart
//         console.log(
//           "!!!!!!!!!!!!!!",
//           shoppingCartListItemImg.attributes[1].textContent
//         );
//         console.log("!!!!!!!!!!!!!!", shoppingCartListItemImg.attributes[1]);
//         if (
//           shoppingCartListItemImg.attributes[1].textContent.includes("Clothing")
//         ) {
//           console.log(
//             "is clothing there? : ",
//             shoppingCartListItemImg.attributes[1].textContent.includes(
//               "Clothing"
//             )
//           );
//           console.log("working");
//           console.log(
//             "startingSliceNumOneForClothingPage",
//             startingSliceNumOneForClothingPage
//           );
//           let newStringforClothing =
//             shoppingCartListItemImg.attributes[0].textContent.slice(
//               startingSliceNumOneForClothingPage,
//               shoppingCartListItemImg.attributes[0].textContent.length
//             );
//           console.log("newStringforClothing", newStringforClothing);
//           shoppingCartListItemImg.attributes[0].textContent =
//             newStringforClothing;
//           console.log("NEXT PART IS COMING");
//           console.log(
//             "What is shoppingCartListItemImg.attributes[1].textContent",
//             shoppingCartListItemImg.attributes[1].textContent
//           );
//           console.log(
//             "Does shoppingCartListItemImg.attributes[1].textContent contain the word clothing",
//             shoppingCartListItemImg.attributes[1].textContent.includes(
//               searchStringOne
//             )
//           );
//           console.log(
//             "Is the else-if true or false????",
//             shoppingCartListItemImg.attributes[1].textContent.includes(
//               searchStringOne
//             ) !== true
//           );
//         } else if (
//           shoppingCartListItemImg.attributes[1].textContent.includes(
//             searchStringOne
//           ) !== true
//         ) {
//           console.log("else-if has been activating");
//           console.log(
//             "original string",
//             shoppingCartListItemImg.attributes[0].textContent
//           );

//           let newString =
//             shoppingCartListItemImg.attributes[0].textContent.slice(
//               startingSliceNumOne,
//               shoppingCartListItemImg.attributes[0].textContent.length
//             );
//           console.log("newString - the new img src", newString);
//           shoppingCartListItemImg.attributes[0].textContent = newString;
//           console.log(
//             "is new newString and src the same?",
//             shoppingCartListItemImg.attributes[0].textContent
//           );
//         }
//       }
// for (let shoppingCartListItemLink of shoppingCartListItemLinks) {
// get info from id
//mainpulate the info depending on the current url
//
// if (
//   shoppingCartListItemLink.attributes[2].textContent.includes(
//     searchStringTwo
//   )
// )
//   console.log("searchStringTwo:", searchStringTwo);
// {
//   console.log("if-include is working");
//   let newStringHref =
//     shoppingCartListItemLink.attributes[0].textContent;
//   console.log("newStringHref:", newStringHref);
//   console.log("startingSliceNumTwo:", startingSliceNumTwo);
//   console.log("endingSliceNumTwo:", endingSliceNumTwo);
//   const changedStringHref = newStringHref.slice(
//     startingSliceNumTwo,
//     endingSliceNumTwo
//   );
//   if (
//     shoppingCartListItemLink.attributes[2].textContent.includes(
//       "Clothing"
//     )
//   ) {
//     console.log("clothing is in the id");
//     let updatedStringHref = `${addingInfo}${changedStringHref}`;
//     shoppingCartListItemLink.attributes[0].textContent =
//       updatedStringHref;
//     console.log("updated link", updatedStringHref);
//   } else {
//     console.log("clothing is in the id");
//     let updatedStringHref = `${NOTaddingInfo}${changedStringHref}`;
//     shoppingCartListItemLink.attributes[0].textContent =
//       updatedStringHref;
//     console.log("updated link", updatedStringHref);
//   }
// }
//       }
//     }
//   });
// }

// changeHrefAndSrc(
//   "https://adam-nasir.github.io/Zay-Project/catagories-section/catagories-women/women-catagories.html",
//   null,
//   "/men/sweaters-and-hoodies/",
//   3,
//   "catagories-men-hoodies-and-sweaters/",
//   0,
//   1000,
//   "../catagories-men/catagories-men-hoodies-and-sweaters/"
// );

// changeHrefAndSrc(
//   "https://adam-nasir.github.io/Zay-Project/catagories-section/catagories-men/men-catagories.html",
//   null,
//   "12",
//   3,
//   "catagories-men-hoodies-and-sweaters/",
//   0,
//   1000,
//   "catagories-men-hoodies-and-sweaters/"
// );

// changeHrefAndSrc(
//   "https://adam-nasir.github.io/Zay-Project/index.html", //URLOne
//   "https://adam-nasir.github.io/Zay-Project/about.html", //URLTwo
//   12, //ClothingNumber
//   "Clothing", //SearchStringOne
//   9 //startingString
// );

//Clothing Adding Items To Cart in Clothing template

mainAddToCartButton.addEventListener("click", () => {
  const card = {
    name: "",
    size: "",
    image: "",
    price: "",
    itemNumber: "",
    URL: "",
    location: "",
  };

  const cardInfo = {
    name: "",
    size: "",
    image: "",
    price: "",
    itemNumber: "",
    URL: "",
    location: "",
  };

  let sizeChart =
    mainAddToCartButton.previousElementSibling.previousElementSibling
      .children[1].children;

  let item =
    mainAddToCartButton.previousElementSibling.previousElementSibling
      .children[1].children;

  let price =
    mainAddToCartButton.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.parentElement.children[0]
      .textContent;

  let imgHref =
    mainAddToCartButton.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.parentElement.parentElement
      .previousElementSibling.children[0].attributes[0].textContent;

  let imgSrc =
    mainAddToCartButton.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.parentElement.parentElement
      .previousElementSibling.children[0].children[0].attributes[0].textContent;

  //getting Location
  cardInfo.location = `${document.location.pathname}`;
  console.log(cardInfo.location);

  //getting the name
  let cardName =
    mainAddToCartButton.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.parentElement.parentElement
      .previousElementSibling.parentElement.previousElementSibling.children[1]
      .textContent;
  cardInfo.name = cardName;
  let cardTitle = document.createElement("h4");
  cardTitle.textContent = cardName;
  card.name = cardTitle;

  //getting the size
  let selectedSizes = Array.from(sizeChart);
  selectedSizes.forEach((selectedSize) => {
    if (selectedSize.classList.contains("large-border-on")) {
      let sizePara = document.createElement("p");
      cardInfo.size = ` Size: ${selectedSize.textContent}`;
      sizePara.textContent = ` Size: ${selectedSize.textContent}`;
      card.size = sizePara;
    }
  });

  //getting the image
  cardInfo.image = imgSrc;
  let newImg = document.createElement("img");
  newImg.setAttribute("src", imgSrc);
  newImg.classList.add("shopping-cart-list-item-img");
  card.image = newImg;

  //getting the price
  cardInfo.price = price;
  let pricePara = document.createElement("p");
  pricePara.textContent = price;
  card.price = pricePara;

  // Creat and get itemNumber
  card.itemNumber = shoppingCartList.children.length + 1;
  cardInfo.itemNumber = JSON.stringify(card.itemNumber);
  let itemNum = document.createElement("p");
  itemNum.textContent = `Item Number:  ${card.itemNumber}`;

  //Creating the item card
  let itemCard = document.createElement("li");
  itemCard.classList.add("selected-item-card");
  let itemCardHeader = document.createElement("div");
  itemCardHeader.classList.add("item-card__header");

  //Creating anchor tag
  let anchorTag = document.createElement("a");
  cardInfo.URL = imgHref;
  anchorTag.setAttribute("href", imgHref);

  //Append image to anchor tag
  anchorTag.appendChild(card.image);

  //Append image to anchor tag
  itemCard.appendChild(anchorTag);

  //Create Text content of the item card
  let itemCardTextContent = document.createElement("div");
  //Creating button to delete shopping items
  let deleteShoppingItemButton = document.createElement("button");
  deleteShoppingItemButton.style.marginLeft = "1rem";
  //Adding class to style button
  deleteShoppingItemButton.classList.add("delete-shopping-item-button");
  let deleteShoppingItemButtonContent = document.createElement("i");
  deleteShoppingItemButtonContent.classList.add(
    "fas",
    "fa-times",
    "shopping-item-button-exit-sign"
  );
  deleteShoppingItemButton.appendChild(deleteShoppingItemButtonContent);
  //Append text content to item Card
  itemCard.appendChild(itemCardTextContent);

  //Append item card header to text content
  itemCardTextContent.append(itemCardHeader);

  //Append title  to text header
  itemCardHeader.appendChild(card.name);

  //Append delete button to text header
  itemCardHeader.appendChild(deleteShoppingItemButton);

  //Append size  to text content
  itemCardTextContent.appendChild(card.size);

  //Append item number to text content
  itemCardTextContent.appendChild(itemNum);

  //Append size  to text content
  itemCardTextContent.appendChild(card.price);
  shoppingCartList.appendChild(itemCard);

  //Add The Price To The Subtotal
  function addPriceToSubtotal() {
    numberOfItem.textContent = shoppingCartList.children.length;
    console.log("price", price);
    let priceNoDollarSign = price.slice(1);
    let convertedPrice = parseFloat(priceNoDollarSign);
    console.log("cPrice", convertedPrice);
    let convertedSubtotal = parseFloat(subtotalPrice.textContent);
    subtotal = convertedPrice + convertedSubtotal;
    console.log("subtotal", subtotal);
    if (subtotal > 0) {
      checkoutButton.disabled = false;
    }
    subtotalPrice.textContent = subtotal.toFixed(2);
  }
  addPriceToSubtotal();
  clickShoppingCart();
  function subtractPriceFromSubtotal() {
    //Get price of item
    numberOfItem.textContent = shoppingCartList.children.length - 1;
    let priceNoDollarSign = price.slice(1);
    console.log("priceNoDollarSign", priceNoDollarSign);
    //convert price into a number
    let convertedPrice = parseFloat(priceNoDollarSign);
    //Get current subtotal
    let currentSubtotal = subtotalPrice.textContent;
    console.log("currentSubtotal", currentSubtotal);
    //convert price into a number
    let convertedCurrentSubtotal = parseFloat(currentSubtotal);
    console.log("convertedCurrentSubtotal", convertedCurrentSubtotal);
    //Subtract the subtotal by the price
    let newSubtotal = convertedCurrentSubtotal - convertedPrice;
    console.log("newSubtotal", newSubtotal);
    //Update subtotal
    console.log(subtotalPrice);
    subtotalPrice.textContent = newSubtotal.toFixed(2);
    console.log(subtotalPrice.textContent);
    if (subtotalPrice.textContent === "0.00") {
      checkoutButton.disabled = true;
    }
  }

  deleteShoppingItemButton.addEventListener("click", (element) => {
    let itemCode =
      element.target.parentElement.parentElement.parentElement.children[3]
        .textContent;
    console.log("itemCode", itemCode);
    let itemCodeNumber = itemCode.slice(13, 15);
    console.log("deleteButton", itemCodeNumber);
    removeDataToLocalStorage(itemCodeNumber);
    subtractPriceFromSubtotal();
    itemCard.remove();
  });
  addDataToLocalStorage(cardInfo);
});
