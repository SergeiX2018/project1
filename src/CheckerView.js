export default class CheckerView {
    constructor() {
        this.render()

    }
    render ()
    {
        let input = document.createElement("input")
        let body = document.body
        body.appendChild(input)
        input.id = "checker"
        let div = document.createElement("div")
        div.id = "checker-result"
        body.appendChild(div)

    }
    renderStatus(status) {
    let statusElement = document.createElement("div")
   if(status ==true)  {
       statusElement.textContent = "строка правильная"
   }
   if(status ==false) {
       statusElement.textContent = "строка не правильная"
   }
    document.body.appendChild(statusElement)
   }
}