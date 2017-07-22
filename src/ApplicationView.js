export default class ApplicationView{
  constructor() {

  }

  render() {
     let button = document.createElement("button")
      let body = document.body
      body.appendChild(button)
      button.textContent = "create password"
      button.id = "create-password-button"
  }
}