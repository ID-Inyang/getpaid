import jwt from 'jsonwebtoken';
import { prisma } from "../config/db.js";

// Read the token from the request headers
// Check if the token is valid and decode it

const authMiddleware = async (req, res, next) => {
    console.log("Auth Middleware reached");
    next();
}

export default authMiddleware;