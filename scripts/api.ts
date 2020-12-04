namespace Api {
  const path = "https://jsonplaceholder.typicode.com"

  export async function getPosts(max: number = 100): Promise<Post[]> {
    return fetch(`${path}/posts`)
      .then(async (res) => {
        return res.json()
      })
      .then((posts: Partial<Post>[]) => {
        return posts.map((x) => new Post(x)).slice(0, max)
      })
  }

  export async function getUserById(id: number): Promise<Partial<User>> {
    return fetch(`${path}/users/${id}`)
      .then(async (res) => {
        return res.json()
      })
      .then((user) => {
        user = new User(user)
        return user
      })
  }

  export async function getUsers(): Promise<Partial<User[]>> {
    return fetch(`${path}/users`)
      .then(async (res) => {
        return res.json()
      })
      .then((users) => {
        return users.map((user) => new User(user))
      })
  }

  function applyData(object: any, data: any) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const v = data[key]
        object[key] = v
      }
    }
  }

  export class Post {
    id: number
    userId: number
    title: string
    body: string

    constructor(post: Partial<Post>) {
      applyData(this, post)
    }

    public async makeSmallContainer(): Promise<HTMLElement> {
      let postObj = document.createElement("div")
      postObj.classList.add("post-obj")
      postObj.setAttribute("data-id", this.id.toString())
      postObj.setAttribute("data-userId", this.userId.toString())

      let head = document.createElement("div")
      head.classList.add("post-head")

      let h3 = document.createElement("h3")
      h3.classList.add("post-title")
      h3.append(this.title)

      let authorSpan = document.createElement("span")
      authorSpan.classList.add("post-username")
      authorSpan.append("by ")

      let a = document.createElement("a")
      a.href = `profile.html?userId=${this.userId}`

      let user = await getUserById(this.userId)
      a.append(user.name)

      authorSpan.append(a)

      head.append(h3)
      head.append(authorSpan)

      let body = document.createElement("p")
      body.classList.add("post-body")
      body.append(this.body)

      postObj.append(head)
      postObj.append(body)

      return postObj
    }

    public async makeBigContainer() {}
  }

  export class User {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }

    constructor(user: Partial<User>) {
      applyData(this, user)
    }

    public async makeSmallContainer(): Promise<any> {
      let profileObj = document
        .getElementById("profile-template")
        .cloneNode(true) as HTMLElement
      profileObj.id = ""

      for (let key in (this as unknown) as String | Node) {
        let targetElem = profileObj.querySelector(
          `.profile-${key}`
        ) as HTMLElement
        if (targetElem) {
          targetElem.append(this[key])
        }
      }

      for (let key in this.address) {
        let targetElem = profileObj.querySelector(
          `.profile-address-${key}`
        ) as HTMLElement
        if (targetElem) {
          targetElem.append(this.address[key])
        }
      }

      for (let key in this.company) {
        let targetElem = profileObj.querySelector(
          `.profile-company-${key}`
        ) as HTMLElement
        if (targetElem) {
          targetElem.append(this.company[key])
        }
      }

      return profileObj
    }
  }
}
