/*
  Warnings:

  - The primary key for the `UserOTP` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UserOTP" DROP CONSTRAINT "UserOTP_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserOTP_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserOTP_id_seq";
