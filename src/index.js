import  ApplicationView from "./ApplicationView"
const view = new ApplicationView()
view.render()
import ApplicationController from "./ApplicationController"
const controller = new ApplicationController(view)
controller.init()
import  CheckerView from "./CheckerView"
import  CheckerController from "./CheckerController"
const checkerView = new CheckerView()
const checkerController = new CheckerController(checkerView)
