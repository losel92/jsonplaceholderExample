// Determine whether to get single or all users
const url_string: string = window.location.href;
const url: URL = new URL(url_string);
let userId: number = parseInt(url.searchParams.get("userId"));

if (userId) {
  // Single user
  Api.getUserById(userId).then(async (user) => {
    document
      .getElementById("profiles-container")
      .append(await user.makeSmallContainer());
  });
} else {
  // All users
  Api.getUsers().then((users) => {
    users.forEach(async (user) => {
      document
        .getElementById("profiles-container")
        .append(await user.makeSmallContainer());
    });
  });
}
