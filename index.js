class Slots {
    #slot;

    constructor(start, end){
        this.#slots = [start, end]
    }

    get start(){
        return this.#slot[0]
    }

    get end(){
        return this.#slot[1]
    }

}

class Slots {
    #slots;

    constructor(){
        this.#slots = []
    }

    get Slots(){
        return this.#slots
    }

    add(slot){
        if(this.isAvailable(slot.start, slot.end)){
            this.#slots.push(slot)
        }
    }

    isAvailable(start, end){

    }
}