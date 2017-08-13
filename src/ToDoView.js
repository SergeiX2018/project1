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
    renderItem(obj, index, state) {
        debugger
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        let body = document.body
        let element = document.createElement("div")
        let deleteButton  = document.createElement("div")
        deleteButton.className = "delete-button"
        element.textContent = obj.text

        element.id = "item-"+  index
        if(obj.status == false) {
            element.className = "item"

        } else{
            element.className = "checked"
        }
        let currentIndex = "item-" + index
        let isRendering = document.getElementById(currentIndex)
        if (!isRendering) {
              body.appendChild(element)
            element.appendChild(deleteButton)
            deleteButton.addEventListener("click" ,this.deleteButtonHandler.bind(this,index))
            element.appendChild(checkbox)
            checkbox.addEventListener("click" ,this.checkHandler.bind(this,index))

        }

    }
     checkHandler(index) {
         window.controllers.ToDoController.setItemStatus(index)
         this.updateTodoList()
         this.renderList()
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
            let obj = this.todoList[i]
            this.renderItem (obj, i )
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
    deleteButtonHandler(index) {
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