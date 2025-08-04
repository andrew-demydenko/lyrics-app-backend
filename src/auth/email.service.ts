import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get("email.host"),
      port: this.configService.get("email.port"),
      secure: this.configService.get("email.port") === 465, // true for 465, false for other ports
      auth: {
        user: this.configService.get("email.user"),
        pass: this.configService.get("email.password"),
      },
    });
  }

  async sendVerificationEmail(
    email: string,
    token: string,
    url: string
  ): Promise<void> {
    const verificationUrl = `${url}?token=${token}`;

    console.log("Sending verification email to:", this.transporter.options);
    await this.transporter.sendMail({
      from: this.configService.get("email.from"),
      to: email,
      subject: "Верификация аккаунта - Guitar Tabs",
      html: `
        <h1>Подтвердите ваш адрес электронной почты</h1>
        <p>Спасибо за регистрацию в приложении Guitar Tabs.</p>
        <p>Для подтверждения вашего email адреса, пожалуйста, нажмите на ссылку ниже:</p>
        <p>
          <a href="${verificationUrl}">Подтвердить email</a>
        </p>
        <p>Ссылка действительна в течение 24 часов.</p>
        <p>Если вы не регистрировались, пожалуйста, проигнорируйте это письмо.</p>
      `,
    });
  }
}
