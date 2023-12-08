import jwt from "jsonwebtoken";

export const verifytoken = async (req, res, next) => {
  const token = req.headers["token"];

  if (!token)
    //no token
    return res.status(200).json({
      status: "404",
      data: "you are not authenticated!!",
    });

  // wrong token
  jwt.verify(token, process.env.jwt, (err, user) => {
    if (err)
      return res.status(200).json({
        status: "404",
        data: "token is not valid",
      });

    //user infromation
    req.user = user;
    console.log(user);
  });
  next();
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
