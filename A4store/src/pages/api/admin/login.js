import argon from 'argon2'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
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

                res.setHeader('Set-Cookie', cookie.serialize('admin_auth', authToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: isRemembered ? (60 * 60 * 24 * 30) : (60 * 60 * 24),
                    path: '/'
                }))

                return res.status(200).json({
                    success: true,
                    message: 'You are authenticated'
                })
            } else {
                return res.send(401).json({
                    success: false,
                    message: 'not authorized!'
                })
            }

           
        }
    } catch (error) {
        res.json(error.message)
        console.log(error);
    }
}

export default handler;
