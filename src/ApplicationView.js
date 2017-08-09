export default class ApplicationView{
  constructor() {

  }

  render() {
     let button = document.createElement("button")
      let body = document.body
      body.appendChild(button)
      button.textContent = "create password"
      button.id = "create-password-button"
      let div = document.createElement("div")
      div.id = "password"
      body.appendChild(div)

  }
  showPassword(password) {
      let div = document.getElementById("password")
    div.textContent = password

  }
}