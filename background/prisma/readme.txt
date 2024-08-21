根据数据库生成schema
 npx prisma db pull 
根据schema生成数据库表
npx prisma db push 
生成prisma client
npx prisma generate 

生成迁移文件 ,初始化、并同步到数据库表结构
npx prisma migrate dev --name init 
生成迁移文件 ,同步到数据库表结构
npx prisma migrate dev --name   
