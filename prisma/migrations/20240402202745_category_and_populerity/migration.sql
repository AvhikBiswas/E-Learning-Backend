/*
  Warnings:

  - Changed the type of `category` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `popularity` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('MATH', 'SCIENCE', 'HISTORY', 'LANGUAGE');

-- CreateEnum
CREATE TYPE "Popularity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL,
DROP COLUMN "popularity",
ADD COLUMN     "popularity" "Popularity" NOT NULL;
