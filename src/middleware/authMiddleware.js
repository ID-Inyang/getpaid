import jwt from 'jsonwebtoken';
import { prisma } from "../config/db.js";

const authMiddleware = async () => {
    console.log("Auth Middleware reached");
}

export default authMiddleware;