import {PrismaClient} from "@prisma/client"//import prisma client
//next js hot reloads so it tries to constantly creta enew connections to prism client so to solve this problem 

const globalForPrisma =global as unknown as{
    prisma:PrismaClient | undefined
}
// set variable to global variable already created if exist or create a new prisma client
export const prisma=
globalForPrisma.prisma ?? 
new PrismaClient({
    log:['query'],//creates one single client
})


if (process.env.NODE_ENV !=='production') globalForPrisma.prisma=prisma

