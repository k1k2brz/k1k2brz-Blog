import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  getLogger(): string {
    this.logger.warn("Logging...");
    return this.appService.getLogger();
  }
}