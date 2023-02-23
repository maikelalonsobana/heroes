const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("mockserver/db.json");
const rewriters = require("./routes.json");

const rewriter = jsonServer.rewriter(rewriters);

const middleware = jsonServer.defaults();

// Set default middleware (logger, static, cors and no-cache)
server.use(middleware);

server.use(rewriter);

server.use((req, res, next) => {
  setTimeout(next, 1000);
});
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.post("/login", async (req, res) => {
  console.log("POST /login");
  const { email, password } = req.body;
  const db = require("./db.json");
  const user = db.users.find(
    (user) => user.email === email && user.password === password
  );

  console.log("user", db.users);

  setTimeout(() => {
    if (user) {
      res.status(200).jsonp(user);
    } else {
       res.status(401).jsonp({ message: "invalid_credentials", code: 500 });
    }
  }, 1000);
});

// Use default router
server.use(router);
server.listen(8080, () => {
  console.log("JSON Server is running");
});
