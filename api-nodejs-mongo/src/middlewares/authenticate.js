const jwt = require("jsonwebtoken");
const authconfig = require("../config/auth.json");

module.exports = (req, res, next) => {
    const authheader = req.headers.authorization;

    console.log("Auth Header:", authheader); // Adicione este log

    if (!authheader) {
        return res.status(401).json({
            error: true,
            message: "Token not provided",
        });
    }

    const parts = authheader.split(" ");

    if (parts.length !== 2) {
        console.log("Invalid token type"); 
        return res.status(401).json({
            error: true,
            message: "Invalid token type",
        });
    }

    const [scheme, token] = parts;

    if (scheme.toLowerCase() !== "bearer") {
        console.log("Token malformatted"); 
        return res.status(401).json({
            error: true,
            message: "Token malformatted",
        });
    }

    return jwt.verify(token, authconfig.secret, (err, decoded) => {
        if (err) {
            console.log("Token Invalid/Expired"); 
            return res.status(401).json({
                error: true,
                message: "Token Invalid/Expired",
            });
        }

        req.userLogged = decoded;
        console.log("Token Decoded:", decoded); 
        console.log(err);
        console.log(decoded);
        return next();
    });
};
