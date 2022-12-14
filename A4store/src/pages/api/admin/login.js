import argon from 'argon2'
import jwt from 'jsonwebtoken'
import dbConnect from './../../../../utils/mongo';
import Admins from './../../../../models/admin_auth';

const handler = async (req, res) => {
    const { email, password, isRemembered } = req.body;
    try {
        await dbConnect();
        if (req.method === "POST") {
            let user = await Admins.findOne({ email })
            if (await argon.verify(user.password, password)) {
                if (user.role !== 'admin') {
                    return res.send(401).json({
                        success: false,
                        message: 'not authorized!'
                    })
                }
                let authToken = jwt.sign({
                    userName: user.userName, email: user.email, isRemembered
                }, process.env.JWT_SECRET, { expiresIn: isRemembered ? '30 days' : '1 day' })

                return res.json({
                    success: true,
                    authToken
                })
            } else {
                return res.send(401).json({
                    success: false,
                    message: 'not authorized!'
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default handler;
