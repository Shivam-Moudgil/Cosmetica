import argon from 'argon2'
import jwt from 'jsonwebtoken'
import dbConnect from '../utils/mongo';
import Admins from '../models/admin_auth'

const verifyUser = (handler) => {
    return async (req, res) => {
        let token = req.headers.authToken;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'token is missing!'
            })
        }
        try {
            await dbConnect();
            let verification = jwt.verify(token, process.env.JWT_SECRET)
            if (verification) {
                let user = await Admins.findOne({ email: verification.email })
                if (await argon.verify(user.password, req.body.password)) {
                    if (user.role !== 'admin') {
                        return res.send(401).json({
                            success: false,
                            message: 'not authorized!'
                        })
                    }
                    req.userId = user._id;
                    return handler(req, res);
                } else {
                    return res.send(401).json({
                        success: false,
                        message: 'not authorized!'
                    })
                }
            } else {
                return res.send(401).json({
                    success: false,
                    message: 'token has expired'
                })
            }
        } catch (error) {
            res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default verifyUser
