/*
  Warnings:

  - You are about to alter the column `date` on the `Uesr` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Uesr` MODIFY `date` DATETIME NOT NULL;
