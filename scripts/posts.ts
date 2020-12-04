let searchQuery: string = new URL(window.location.href).searchParams.get("q")
let searchBar = document.getElementById(
  "profile-search-bar"
) as HTMLInputElement

Api.getPosts().then((posts) => {
  posts
    .filter((post) => {
      // Filter if there's a search
      if (searchQuery) {
        for (let key in post) {
          if (typeof post[key] == "string") {
            if (
              (post[key] as string)
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ) {
              return true
            }
          }
        }
      } else {
        return true
      }
    })
    .map(async (post) => {
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

document
  .getElementById("profile-search-bar")
  .addEventListener("submit", (event) => {
    event.preventDefault()

    const searchQuery: string = (document.getElementById(
      "profile-search-value"
    ) as HTMLInputElement).value
    window.location.replace(`posts.html?q=${searchQuery}`)
  })
