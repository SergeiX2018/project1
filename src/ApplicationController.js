export default class ApplicationController {
    constructor() {


    }

    createPassword() {


        let random;
        let random2;
        let bul;
        let random3;

        var ar = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","q","w","e","r","t","y","u","i","o","p","a","s","d","g","h","j","k","l","z","x","c","v","b","n","m"]
        var ar3 = ["!","#", "$", "%", "&"]
        var str = []


        for (let i = 0; i < 10; i++) {
            random = Math.floor(Math.random(0, 1) * 10)  //только цифры
            random2 = Math.floor(Math.random(0, 1) * 52)   //только буквы
            random3 = Math.floor(Math.random(0, 1) * 5)     //только символы

            random2 = ar[random2]
            random3 = ar3[random3]


            bul = Math.floor(Math.random(0, 1) * 3)
            if (bul == 0) {
                str.push(random2)

            }
            if (bul == 1) {
                str.push(random3)
            }
            if (bul == 2){
                str.push(random)
            }

        }


        var str2 = str.join("")
        alert(str2)



    }
    init() {
        let button = document.getElementById("create-password-button")
        button.onclick = this.createPassword
    }


}
