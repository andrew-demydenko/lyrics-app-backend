-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "salt" TEXT,
    "google_id" TEXT,
    "provider" TEXT
);

-- CreateTable
CREATE TABLE "song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "chords" TEXT NOT NULL,
    "shared" BOOLEAN NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "views" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "song_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_refresh_token" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    CONSTRAINT "user_refresh_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playlist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "playlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PlaylistSongs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PlaylistSongs_A_fkey" FOREIGN KEY ("A") REFERENCES "playlist" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PlaylistSongs_B_fkey" FOREIGN KEY ("B") REFERENCES "song" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_google_id_key" ON "user"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_refresh_token_user_id_key" ON "user_refresh_token"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "playlist_name_key" ON "playlist"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PlaylistSongs_AB_unique" ON "_PlaylistSongs"("A", "B");

-- CreateIndex
CREATE INDEX "_PlaylistSongs_B_index" ON "_PlaylistSongs"("B");
