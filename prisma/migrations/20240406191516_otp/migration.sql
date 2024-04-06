-- CreateTable
CREATE TABLE "UserOTP" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "expirationTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserOTP_pkey" PRIMARY KEY ("id")
);
