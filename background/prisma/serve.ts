import { PrismaClient } from './prisma/generated/prisma-client-js';
const prisma = new PrismaClient();

// prisma.table
//   .updateMany({
//     data: { group_id: 1 },
//   })
//   .then((user) => {
//     prisma.table.findMany().then((users) => {
//       console.log(users);
//     });
//   });
// prisma.table
//   .findMany({
//     where: { id: 3 },
//     include: {
//       group_table: true,
//     },
//   })
//   .then((users) => {
//     console.log(users);
//   });
// prisma.group_table
//   .findMany({
//     include: {
//       table: true,
//     },
//   })
//   .then((users) => {
//     console.log(users);
//   });
// prisma.table
//   .create({
//     data: {
//       name1: 'test',
//       group_table: {
//         create: {
//           name: 'test-group',
//         },
//       },
//     },
//   })
//   .then((v) => {
//     console.log(v);
//   });
console.log(__dirname, process.cwd());
