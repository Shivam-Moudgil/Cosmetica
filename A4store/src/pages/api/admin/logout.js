import cookie from 'cookie'


const handler = async (req, res) => {
    // To logout
    try {
        if (req.method === 'POST') {
            res.setHeader('Set-Cookie', cookie.serialize('admin_auth', '', {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: -1,
                path: '/'
            }))
            return res.status(200).json({
                success: true,
                message: 'User has been logged out'
            })
        } else {
            res.status(401).json({ message: 'wrong request method!' })
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}


export default handler