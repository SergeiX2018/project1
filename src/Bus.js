import Auto from "./Auto"
 export default class Bus extends Auto {
    constructor() {
        super()
        this.maxSpeed = 120;
        this.coleso = 6

    }
    drive(){
        this.speed = 40;
        console.log("drive" , this)
    }

}


