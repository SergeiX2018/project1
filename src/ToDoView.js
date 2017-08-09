export  default class ToDoView {
    constructor(){
        this.updateTodoList()
        this.renderList = this.renderList.bind(this)
        this.enterHandler = this.enterHandler.bind(this)
        this.render()
        this.renderList()
    }

    updateTodoList() {
        this.todoList =  JSON.parse(window.localStorage.getItem("todoList"))

    }
    renderItem(text, index, state) {
        let body = document.body
        let div = document.createElement("div")
        let deleteButton  = document.createElement("div")
        div.textContent = text

        div.id = "item-"+  index
        div.className = "item"
        let currentIndex = "item-" + index
        let isRendering = document.getElementById(currentIndex)
        if (!isRendering) {
              body.appendChild(div)
            div.appendChild(input)
            div.addEventListener("click" ,this.checkboxHandler.bind(this,index))
        }

    }
    render() {
        let input = document.createElement("input")
        let body = document.body
        body.appendChild(input)
        input.id = "todo"
        input.addEventListener("keydown" ,this.enterHandler)
        let div = document.createElement("div")
        div.id = "addItem"
        body.appendChild(div)
    }

    renderList() {

        if (!this.todoList) {
            return
        }
         let elements = document.getElementsByClassName("item")
        for ( let i = 0; i<elements.length; i++) {
            document.body.removeChild(elements[i])
        }
        let len = this.todoList.length
        for (let i = 0; i<len ; i++) {
            let text = this.todoList[i]
            this.renderItem (text, i )
        }


    }
    enterHandler(e) {
        if (e.keyCode == 13) {
            let value = document.getElementById("todo").value
            window.controllers.ToDoController.addItem(value)
            document.getElementById("todo").value = ""
            this.updateTodoList()
            this.renderList()
        }
    }
    checkboxHandler(index) {debugger
        window.controllers.ToDoController.deleteItem(index)
        this.updateTodoList()
        this.renderList()
         }
       // add element

    showItem(item) {
        let div = document.getElementById("addItem")
        div.textContent = item
    }
}