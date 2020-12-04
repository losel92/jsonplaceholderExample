document.getElementById("contact-form").addEventListener("submit", (event) => {
  let formIsValid: Boolean = true

  let name: HTMLInputElement = document.getElementById(
    "contact-name"
  ) as HTMLInputElement

  let email: HTMLInputElement = document.getElementById(
    "contact-email"
  ) as HTMLInputElement

  let topic: HTMLInputElement = document.getElementById(
    "contact-topic"
  ) as HTMLInputElement

  let message: HTMLInputElement = document.getElementById(
    "contact-message"
  ) as HTMLInputElement

  let objects: HTMLInputElement[] = [name, email, topic, message]

  // Clear all errors
  objects.forEach(({ nextElementSibling }) => {
    nextElementSibling.innerHTML = ""
    ;(nextElementSibling as HTMLElement).style.display = "none"
  })

  // test length
  objects.forEach((obj) => {
    if (!obj.value.length) {
      obj.nextElementSibling.innerHTML = "Must not be empty"
      ;(obj.nextElementSibling as HTMLElement).style.display = "block"
      formIsValid = false
    }
  })

  // Min length on textarea
  if (message.value.length < 50) {
    message.nextElementSibling.innerHTML = "Must be at least 50 chars"
    ;(message.nextElementSibling as HTMLElement).style.display = "block"
    formIsValid = false
  }

  // Test for a valid email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.nextElementSibling.innerHTML = "Must be a valid email"
    ;(email.nextElementSibling as HTMLElement).style.display = "block"
    formIsValid = false
  }

  if (!formIsValid) event.preventDefault()
  else alert("Form successfully sbmitted!")
})
