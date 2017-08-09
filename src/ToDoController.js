export default class ToDoController {
    constructor() {
        let todoList = localStorage.getItem("todoList")|| "[]"
        localStorage.setItem("todoList",todoList)
    }
    addItem(item) {
        let todoListString = localStorage.getItem("todoList")
        let todoList = JSON.parse(todoListString)
        todoList.push(item)
        todoListString = JSON.stringify(todoList)
        localStorage.setItem("todoList",todoListString)

    }
    deleteItem(index) {
        let todoListString = localStorage.getItem("todoList")
        let todoList = JSON.parse(todoListString)
        todoList =  todoList.filter((c, i) => i !==index)
        todoListString = JSON.stringify(todoList)
        localStorage.setItem("todoList",todoListString)




    }

}


