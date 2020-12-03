Api.getPosts(12).then((posts) => {
  posts.map(async (post) => {
    let wrapper: HTMLElement = document.getElementById("posts-wrapper-home")

    wrapper.append(await post.makeSmallContainer())
  })
})
