import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
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