export class GuestList {

    #guests = [];

    constructor(jsonList = '[]') {
        this.#guests = JSON.parse(jsonList);
    }

    get guests() {
        return structuredClone(this.#guests)
    }

    signGuest(name, lastName) {
        this.#guests.push({ name, lastName })
    }
}


// potem w innym pliku:
export const myGuestListState = new GuestList(`
    [
        {"name":"Michal","lastName":"Doe"},
        {"name":"Joe","lastName":"Doe"},
        {"name":"Jacek","lastName":"Doe"},
        {"name":"Janina","lastName":"Doe"}
    ]    
`)

console.log(myGuestListState.guests[2])
console.log(myGuestListState.guests[0])