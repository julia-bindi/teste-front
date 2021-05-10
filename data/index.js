import {getEvents, getTicket, getLocal, getDrinks} from "./getContets.js"

var stage = 0;
var cost = 0;
const event = "Voor Pool Party"

function isSelected(){
    this.style.backgroundColor = "#ff6f7d";
    this.style.color = "black";
    const elements = this.children;
    if(stage > 0){
        for (e in elements){
            if("price" in e.classList){
                var text = e.textContent;
                text = [3..text.length];
                text = [0..text.length-3];
                cost += parseInt(text);
            }
        }
    }
}

function nextStage(){
    stage++;
    const body = document.getElementById("contents");
    for(kid in body.children){
        body.removeChild(kid)
    }
    loadPage();
}

function previousStage(){
    stage--;
    const body = document.getElementById("contents");
    for(kid in body.children){
        body.removeChild(kid)
    }
    loadPage();
}

function EventPage(){
    const head = document.getElementsByName("head");

    const title = document.createElement("h1");
    title.textContent = "< " + event;
    title.addEventListener("click", previousStage());

    head.appendChild(title)

    const body = document.getElementById("contents");

    const buyByParts = document.createElement("div");
    buyByParts.classList.add("item");

    const name = document.createElement("h2");
    name.textContent = "Ingresso camada";
    const price = document.createElement("h2");
    const ticket = getTicket(e);
    price.textContent = "R$ " + ticket.pista + ",00";
    price.classList.add("minimumCost");

    const subtitle = document.createElement("h3");
    subtitle.textContent = "Monte seu ingresso";

    const selecionar = document.createElement("button");
    selecionar.addEventListener("click", nextStage);
    selecionar.textContent = "ESCOLHER INGRESSO";

    buyByParts.appendChild(name)
    buyByParts.appendChild(price)
    buyByParts.appendChild(subtitle)
    buyByParts.appendChild(selecionar)
    body.appendChild(buyByParts)

    const resale = document.createElement("div");
    resale.classList.add("item");

    const type = document.createElement("h2");
    name.textContent = "REVENDA";

    const chipSale = document.createElement("h2");
    chipSale.textContent = "R$ 130,00" //Em um caso real o valor é retirado do banco

    const escolher = document.createElement("button");
    selecionar.addEventListener("click", nextStage);
    selecionar.textContent = "ESCOLHER INGRESSO";

    resale.appendChild(type)
    resale.appendChild(chipSale)
    resale.appendChild(escolher)
    body.appendChild(resale)
}

function TicketPage(){
    const ticket = getTicket(event);
    const body = document.getElementById("contents");

    const type1 = document.createElement("div");
    type1.classList.add("item");
    type1.addEventListener("click", isSelected);

    const description1 = document.createElement("p");
    description1.classList.add("description");
    description1.textContent = "Pista"

    const cost1 = document.createElement("p");
    cost1.classList.add("cost");
    cost1.textContent = "R$ " + ticket.Pista + ",00";

    type1.appendChild(description1)
    type1.appendChild(cost1)
    body.appendChild(type1)

    const type2 = document.createElement("div");
    type2.classList.add("item");
    type2.addEventListener("click", isSelected);

    const description2 = document.createElement("p");
    description2.classList.add("description");
    description2.textContent = "Camarote"

    const cost2 = document.createElement("p");
    cost2.classList.add("cost");
    cost2.textContent = "R$ " + ticket.Camarote + ",00";

    type2.appendChild(description2)
    type2.appendChild(cost2)
    body.appendChild(type2)

    const type3 = document.createElement("div");
    type3.classList.add("item");
    type3.addEventListener("click", isSelected);

    const description3 = document.createElement("p");
    description3.classList.add("description");
    description3.textContent = "Lounge"

    const cost3 = document.createElement("p");
    cost3.classList.add("cost");
    cost3.textContent = "R$ " + ticket.Lounge + ",00";

    type3.appendChild(description3)
    type3.appendChild(cost3)
    body.appendChild(type3)

    const avancar = document.createElement("button");
    avancar.textContent = "Avançar"
    avancar.addEventListener("click", nextStage);

    body.appendChild(avancar)
}

function LocalPage(){
    const local = getLocal(event);
    const body = document.getElementById("contents");

    const type1 = document.createElement("div");
    type1.classList.add("item");
    type1.addEventListener("click", isSelected);

    const description1 = document.createElement("p");
    description1.classList.add("description");
    description1.textContent = "Nenhum"

    const cost1 = document.createElement("p");
    cost1.classList.add("cost");
    cost1.textContent = "R$ " + local.Nenhum + ",00";

    type1.appendChild(description1)
    type1.appendChild(cost1)
    body.appendChild(type1)

    const type2 = document.createElement("div");
    type2.classList.add("item");
    type2.addEventListener("click", isSelected);

    const description2 = document.createElement("p");
    description2.classList.add("description");
    description2.textContent = "Hotel"

    const cost2 = document.createElement("p");
    cost2.classList.add("cost");
    cost2.textContent = "R$ " + local.Hotel + ",00";

    type2.appendChild(description2)
    type2.appendChild(cost2)
    body.appendChild(type2)

    const type3 = document.createElement("div");
    type3.classList.add("item");
    type3.addEventListener("click", isSelected);

    const description3 = document.createElement("p");
    description3.classList.add("description");
    description3.textContent = "Acampamento"

    const cost3 = document.createElement("p");
    cost3.classList.add("cost");
    cost3.textContent = "R$ " + local.Acampamento + ",00";

    type3.appendChild(description3)
    type3.appendChild(cost3)
    body.appendChild(type3)

    const avancar = document.createElement("button");
    avancar.textContent = "Avançar"
    avancar.addEventListener("click", nextStage);

    body.appendChild(avancar)
}

function DrinksPage(){
    const drinks = getDrinks(event);
    const body = document.getElementById("contents");

    const type1 = document.createElement("div");
    type1.classList.add("item");
    type1.addEventListener("click", isSelected);

    const description1 = document.createElement("p");
    description1.classList.add("description");
    description1.textContent = "Cerveja"

    const cost1 = document.createElement("p");
    cost1.classList.add("cost");
    cost1.textContent = "R$ " + drinks.Cerveja + ",00";

    type1.appendChild(description1)
    type1.appendChild(cost1)
    body.appendChild(type1)

    const type2 = document.createElement("div");
    type2.classList.add("item");
    type2.addEventListener("click", isSelected);

    const description2 = document.createElement("p");
    description2.classList.add("description");
    description2.textContent = "Combo"

    const cost2 = document.createElement("p");
    cost2.classList.add("cost");
    cost2.textContent = "R$ " + drinks.Combo + ",00";

    type2.appendChild(description2)
    type2.appendChild(cost2)
    body.appendChild(type2)

    const type3 = document.createElement("div");
    type3.classList.add("item");
    type3.addEventListener("click", isSelected);

    const description3 = document.createElement("p");
    description3.classList.add("description");
    description3.textContent = "Skol Beats"

    const cost3 = document.createElement("p");
    cost3.classList.add("cost");
    cost3.textContent = "R$ " + drinks["Skol Beats"] + ",00";

    type3.appendChild(description3)
    type3.appendChild(cost3)
    body.appendChild(type3)

    const cupom  = document.createElement("h3");
    cupom.textContent = "Cupom de desconto";

    const cupomArea = document.createElement("div");
    cupomArea.style.lineHeight = 50;

    const button = document.createElement("button")
    button.textContent = "Valor total do ingresso" + document.createElement("br") + "R$ " + cost + ",00"
}

function loadPage(){
    if(stage == 0){
        EventPage();
    }
    else if(stage == 1){
        TicketPage();
    }
    else if(stage == 2){
        LocalPage();
    }
    else if(stage == 3){
        DrinksPage();
    }
}
