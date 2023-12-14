/*
  Warnings:

  - Added the required column `userId` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "website" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "fees" INTEGER NOT NULL,
    "specialization" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Form_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Form" ("address", "endTime", "experience", "fees", "firstName", "id", "lastName", "phoneNumber", "specialization", "startTime", "website") SELECT "address", "endTime", "experience", "fees", "firstName", "id", "lastName", "phoneNumber", "specialization", "startTime", "website" FROM "Form";
DROP TABLE "Form";
ALTER TABLE "new_Form" RENAME TO "Form";
CREATE UNIQUE INDEX "Form_userId_key" ON "Form"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
