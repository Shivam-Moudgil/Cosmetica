import Admins from "../../../../models/admin_auth";
import argon from 'argon2'

const handler = async (req, res) => {
    const { userName, email, password, role } = req.body;
    try {
        try {
            const hash = await argon.hash(password);
            await Admins.create({ userName, email, password: hash, role });
        } catch (err) {
            res.send(err)
        }
        res.json({ message: 'ok' })
    } catch (error) {
        console.log(error);
    }


}

export default handler;
