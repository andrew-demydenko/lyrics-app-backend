import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";
import * as bcrypt from "bcrypt";

@Injectable()
export class CryptoService {
  hashPassword(password: string) {
    const salt = crypto.randomBytes(8).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 10000, 32, "sha512")
      .toString("hex");
    return `${hash}:${salt}`;
  }

  verifyPassword(password: string, hash: string) {
    const [originalHash, salt] = hash.split(":");
    const verifyHash = crypto
      .pbkdf2Sync(password, salt, 10000, 32, "sha512")
      .toString("hex");
    return verifyHash === originalHash;
  }

  async hashPasswordBcrypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password, salt);
  }

  async verifyPasswordBcrypt(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
