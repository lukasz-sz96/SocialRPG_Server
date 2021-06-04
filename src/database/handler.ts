import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const db = {
  findByName: async (name: string) =>
    await prisma.player.findUnique({
      where: { name: name },
    }),
};

export default db;
