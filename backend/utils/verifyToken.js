import jwt from "jsonwebtoken";

export const verifytoken = async (req, res, next) => {
  var token = req.headers["token"];
  console.log(res.headersSent);

  function res_json(status, text) {
    res.status(200).json({
      status: status,
      data: text,
    });
  }

  if (!token) return res_json("404", "you are not authenticated!!");
  //no token

  // wrong token
  jwt.verify(token, process.env.jwt, (err, user) => {
    if (err) return res_json("404", "token is not valid");

    //user infromation
    req.user = user;
    console.log(user);
  });
  //If headersSent is true then that literally means that headers have been already
  // sent and from that point you cannot add / set any additional headers(train has gone that is, you are late and cannot ride it anymore).
  // console.log(res.headersSent);
  if (!res.headersSent) {
    next();
  }
};

export const verifyadmin = async (req, res, next) => {
  const token = await req.cookies.access_token;
  console.log(token);
  verifytoken(req, res, () => {
    if (!token) return res.json("you are not authenticated!");

    if (req.user.onAdmin === true) {
      next();
    } else {
      return res.json("you are not admin");
    }
  });
};
