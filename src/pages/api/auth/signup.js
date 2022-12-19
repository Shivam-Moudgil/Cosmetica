import connect from "../../../../middlewares/connect";
import Signup from "../../../../models/Signup";


const handlers = async (req, res) => {
  const { method } = req;
  if (method == "GET") {
    const User = await Login.find();
    return res.send(User);
  } else if (method == "POST") {
    const User = new Signup.create(req);

    return res.send(User);
  }
};
export default connect(handlers);
