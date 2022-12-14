


const verifyUser = (handler) => {
    return async (req, res) => {
        let token = req.headers.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Please login to get access'
            })
        }
        try {
            // jwt or session here

            // check current user here



            // if everything is ok

            // req.userId = set user id
            return handler(req, res);

        } catch (error) {
            res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default verifyUser
