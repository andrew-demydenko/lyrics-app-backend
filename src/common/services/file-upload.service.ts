import { Injectable } from "@nestjs/common";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import { extname } from "path";
import * as fs from "fs";

@Injectable()
export class FileUploadService {
  static multerOptions: MulterOptions = {
    storage: diskStorage({
      destination: "./uploads",
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
    fileFilter: (req, file, callback) => {
      if (file.mimetype !== "application/json") {
        return callback(new Error("Only JSON files are allowed!"), false);
      }
      callback(null, true);
    },
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB
    },
  };

  getJsonFileUploadOptions(): MulterOptions {
    return FileUploadService.multerOptions;
  }

  readJsonFile<T>(filePath: string): T {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  }

  removeFile(filePath: string): void {
    try {
      fs.unlinkSync(filePath);
    } catch (e) {
      console.error(`Не удалось удалить файл ${filePath}:`, e);
    }
  }
}
