import { Playlist } from "@prisma/client";

export class PlaylistEntity implements Playlist {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  isDefault: boolean;
  userId: string;
}
