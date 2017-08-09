export default class CheckerController {
    constructor(checkerView) {
        this.checkEnter()
        this.checkerView = checkerView
    }
 checkString(input) {
     debugger
     let count = 0;
     let length = input.length
   for(let i = 0; i <length; i++)  {
     if(input[i] ==="[") {
         count++
     }
     if(input[i] ==="]") {
         count--

     }
       if( count<0) {
         return false
       }
   }
        if(count<0||count>0) {
         return false
   }
        else{
         return true
   }
 }

   checkEnter() {

       let input = document.getElementById("checker")
       input.style.backgroundColor = "red"
       input.onkeydown = ()=> {

           if ( event.keyCode ==13)
            {let status = this.checkString(input.value)
                this.checkerView.renderStatus(status)
            }
       }
   }
}
