let menuPoints: HTMLElement[] = <HTMLElement[]>(
  Array.from(document.querySelectorAll("#menu > li"))
)

console.log(menuPoints)

menuPoints.forEach((elem: HTMLElement) => {
  console.log(elem)

  elem.addEventListener("click", ({ target }) => {
    console.log(target)

    menuPoints.forEach((point) => {
      point.classList.remove("selected")
    })

    let targetElem = <HTMLElement>target
    targetElem.classList.add("selected")
  })
})
