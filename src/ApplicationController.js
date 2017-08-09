export default class ApplicationController {
    constructor(view) {
   this.view = view;
   this.createPassword = this.createPassword.bind(this)

    }

    createPassword() {


        let randomNumber;
        let randomLetter;
        let random;
        let randomSign;

        let arrayLetter = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","q","w","e","r","t","y","u","i","o","p","a","s","d","g","h","j","k","l","z","x","c","v","b","n","m"]
        let arraySimbol = ["!","#", "$", "%", "&"]
        let outputString = ""


        for (let i = 0; i < 10; i++) {
            randomNumber = Math.floor(Math.random(0, 1) * 10)  //только цифры
            let randomLetterIndex = Math.floor(Math.random(0, 1) * 52)   //только буквы
            let randomSignIndex = Math.floor(Math.random(0, 1) * 5)     //только символы

            randomLetter =  arrayLetter[randomLetterIndex]
            randomSign = arraySimbol[randomSignIndex]


            random = Math.floor(Math.random(0, 1) * 3)
            if (random === 0) {
                outputString += randomLetter
            }
            if (random === 1) {
                outputString += randomSign
            }
            if (random === 2){
                outputString += randomNumber
            }

        }

        this.view.showPassword(outputString)




    }
    init() {
        let button = document.getElementById("create-password-button")
        button.onclick = this.createPassword
        button.style.backgroundColor = "red"


    }


}
