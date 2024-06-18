const express = require("express");
const app = express();
const port = 8080;

app.use(express.json())

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const respObj = {
    success: false,
    data: {
      msg: "",
    },
  };
  if (email === "test@aibuddha.in" && password === "Test2Connect!") {
    respObj.success = true;
    respObj.data = {
      name: "TEST USER",
      msg: "Login Successful!",
    };
  } else {
    respObj.data.msg = "Wrong credentails. Login Failed!";
  }
  console.log('response :>> ', respObj);
  res.json(respObj);
});

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
