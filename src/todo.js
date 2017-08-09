import ToDoView from  "./ToDoView"
const todoView =  new ToDoView()
import ToDoController from  "./ToDoController"
const todoController = new ToDoController(todoView)
window.controllers = []
window.controllers["ToDoController"] = todoController
require("./style/main.less")