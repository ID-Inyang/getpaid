import 'dotenv/config'; 
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';
import chalk from "chalk";

console.log("DATABASE_URL at adapter creation:", typeof process.env.DATABASE_URL, process.env.DATABASE_URL ? "present" : "MISSING");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log(chalk.green(`DB connected via Prisma`));
    } catch (error) {
        console.error(chalk.red(`Database connection failed: ${error.message}`));
        process.exit(1);
    }
}

const disconnectDB = async () => {
    try {
        await prisma.$disconnect();
        console.log(chalk.yellow(`DB disconnected`));
    } catch (error) {
        console.error(chalk.red(`Database disconnection failed: ${error.message}`));
    }
}

export { prisma, connectDB, disconnectDB };