const existingProducts = [];
const currentShops = [];


// Random names from https://www.randomlists.com/last-names
const generationBase = ["Becker","Strong","Dominguez","Rowland","Bennett","Morrison","Trevino","Spencer","Holder","Riggs","Huerta","Parker","Powell","Cross","Mcmillan","Estrada","Hunt","Meyers","Davies","Warren","Paul","Miller","Austin","Church","Douglas","Santiago","Mcmahon","Combs","Forbes","Ferrell","Cannon","Alvarado","Davis","Travis","Holloway","Glover","Rollins","Jones","Frost","Allen","Clark","Hubbard","Little","Reyes","Wall","Krause","Robbins","Rosario","Trujillo","Olson","Black","Schwartz","Mays","Cox","Fowler","Wilkins","Gamble","Bailey","Brooks","Andrews","Burch","Graves","Haynes","Bowman","Bray","Blankenship","Carrillo","Roach","Donaldson","Hayden","Prince","Newton","Drake","Arias","Lambert","Gilmore","Summers","Duke","Pham","Berry","Bryant","Haney","Acosta","Mckenzie","Walters","Howe","Reese","Rivers","Jimenez","Mcintosh","Padilla","Hays","Gentry","Logan","Beck","Oconnor","Walls","Norman","Reynolds","Tucker" ];

function makeid(length) {

    let result           = '';
    const baseLength = generationBase.length;
    for ( let i = 0; i < length; i++ ) {
      result += generationBase[(Math.floor(Math.random() *  baseLength))] + " ";
   }
   currentShops.push(result);
   return result;
}

function searchValue(name) {
  return document.getElementById(name).value
}

function logInfo(message) {
  const current = document.getElementById("logger").innerHTML;
  document.getElementById("logger").innerHTML = "<li>" + message +"</li><br/>" + current;
}

function create10Shops() {
  for(let i = 0; i <= 10; i++) {
    logInfo("Creating shop: " + makeid(3));
  }
}

function get10Shops() {
  let shops = "";
  const baseLength = currentShops.length;
  for ( let i = 0; i < 10; i++ ) {
    const name = currentShops[(Math.floor(Math.random() *  baseLength))];
    logInfo("Updating shop: " + name);
    shops += "<li>" + name + "</li>";
  }
  return shops;
}

function searchByName() {
  const deckName = searchValue("deckName");
  let id = "";
  for(const letter of deckName) {
    id += letter.charCodeAt(0);
  }
  
  const exists = existingProducts.includes(id);
  if(!exists) {
    existingProducts.push(id);
    create10Shops();
  }
  
  const foundDiv = document.getElementById("foundName");
  let line1 = "Yes, I found our product " + id + " named '" + deckName + "'";
  if(!exists) {
    line1 += "<br/>This product was just added to 10 different shops worldwide!";
    line1 += "<br/>" + get10Shops();
  }
  foundDiv.innerHTML = line1;
  
  
  
}

document.getElementById("searchByName").onclick = searchByName;