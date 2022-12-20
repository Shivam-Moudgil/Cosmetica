import cookie from 'cookie'
import jwt from 'jsonwebtoken'



export const refreshCookie = (req, res) => {
    const {
        cookies: { admin_auth },
    } = req
    if (admin_auth) {
        let verification = jwt.verify(admin_auth, process.env.JWT_SECRET)
        if (verification && verification.isRemembered) {
            let newToken = jwt.sign(
                {
                    userName: verification.userName,
                    email: verification.email,
                    isRemembered: verification.isRemembered,
                },
                process.env.JWT_SECRET,
                { expiresIn: '30 days' },
            )
            res.setHeader(
                'Set-Cookie',
                cookie.serialize('admin_auth', newToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 24 * 30,
                    path: '/',
                }),
            )
        }
    } else {
        return 'redirect'
    }
}