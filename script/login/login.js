function login(form) {
  var userName = form.elements["username"].value;
  var password = form.elements["password"].value;
  authenticate(userName, password);
  return false;
}

function authenticate(userName, password) {
  return fetch("./public/users.json")
    .then(response => response.json())
    .then(users =>
      users.find(
        user => userName === user.userName && password === user.password
      )
    )
    .then(user => user != undefined)
    .then(isAuthentic => {
      if (isAuthentic) {
        localStorage.setItem("LoggedInUser", userName);
        window.location = "./products.html";
      }
    });
}

(function() {
  if (localStorage.getItem("LoggedInUser")) {
    window.location = "./products.html";
  }
})();
