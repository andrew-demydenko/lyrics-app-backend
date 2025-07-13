/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `playlist` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "song" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "playlist_name_key" ON "playlist"("name");
