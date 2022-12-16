import connect from "../../../../middlewares/connect";
import Login from "../../../../models/Login";

const handler = async (req, res) => {
  const { method } = req;
  if (method == "GET") {
    const User = await Login.find();
    return res.send(User);
  } else if (method == "POST") {
    const User = new Login.create(req);

    return res.send(User);
  }
};
export default connect(handler);
