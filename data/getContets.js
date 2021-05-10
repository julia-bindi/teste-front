import json from "../domain/VoorPoolParty.json"

function getEvents(){
    var contents = []
    for(i in json){
        contents.push(i)
    }
    return contents
}

function getTicket(event){
    return json[event].Festa
}

function getLocal(event){
    return json[event].Alojamento
}

function getDrinks(event){
    return json[event].Bebidas
}

export {
    getEvents,
    getTicket,
    getLocal,
    getDrinks,
}
