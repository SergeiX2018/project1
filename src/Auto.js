export default class Auto {
    constructor() {
        this.isOpen = false;
        this.coleso = 4;
        this.people = 0;
        this.maxPeople = 4;


    }
    drive(){
        this.speed = 60;
    }
    open() {
        this.isOpen = true;
        console.log("open" , this)

    }
    close() {
        this.isOpen = false;
        console.log("close" , this)

    }
    dellPeople(num = 0) {
        debugger
        //  num = num || 0
        if(!this.isOpen) {
            console.log (
                "невозможно выпустить" + num + "пассажиров")
            debugger
            return

        }
        if(num>this.people) {
            console.log("так много я не могу выпустить,максимум я могу выпустить" + this.people + "людей")
            return
        }
        if(num<=0) {
            console.log("Так мало людей я не могу выпустить, минимум" + 1)
            return
        }

        console.log("Вышло" + num + "пассажиров")




    }
    addPeople(num) {
        if
        (!this.isOpen) {
            return
        }
        if(this.people + num<=this.maxPeople){
            this.people +=num
            console.log("addPeople" , this)
        } else{
            this.people = this.maxPeople
            console.log("не посадили" + num +"количество людей")
        }


    }

}

