import { PrismaClient } from "@prisma/client";
import "./userData.json";

import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function main() {
  const statesData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "stateData.json"), "utf-8")
  );
  for (const stateData of statesData) {
    const state = await prisma.state.upsert({
      where: { name: stateData.state },
      update: {},
      create: {
        name: stateData.state,
        lgas: {
          create: stateData.lgas.map((lga: string) => ({
            name: lga,
          })),
        },
      },
    });
}
}


main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })