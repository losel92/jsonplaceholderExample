Api.getPosts().then((posts) => {
  posts.map(async (post) => {
    let wrapper: HTMLElement = document.getElementById("posts-wrapper-home")

    let postObj = await post.makeSmallContainer()
    postObj.style.height = "100%"

    let title: HTMLElement = postObj.querySelector(".post-title")
    let body: HTMLElement = postObj.querySelector(".post-body")

    title.addEventListener("click", (event) => {
      let posts: HTMLElement[] = Array.from(
        document.getElementsByClassName("post-obj")
      ) as HTMLElement[]

      const prevDisplay = body.style.display

      posts.forEach((p) => {
        let bodyElem = p.querySelector(".post-body") as HTMLElement
        bodyElem.style.display = "none"
      })

      body.style.display = prevDisplay == "none" ? "block" : "none"
    })

    body.style.display = "none"

    wrapper.append(postObj)
  })
})
