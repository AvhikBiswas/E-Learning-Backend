-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminPassWord" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);
