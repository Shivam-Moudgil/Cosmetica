import verifyUser from "../../../../../middlewares/verifyUser";

const handler = async (req, res) => {
    try {
        res.json({ message: 'ok' })
    } catch (error) {
        console.log(error);
    }


}

export default verifyUser(handler);
