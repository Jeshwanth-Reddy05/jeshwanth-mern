import jwt from "jsonwebtoken";
export function verifyToken(req, res, next) {
  //token verification

  //get token from req
  let singleToken = req.cookies.token; //{token :""}
  if (!singleToken) {
    return res.status(401).json({ message: "please login first" });
  }
  //verify token
  let decodedToken = jwt.verify(singleToken, "abcdef");
  console.log("decoded token :", decodedToken);
  next();
}
