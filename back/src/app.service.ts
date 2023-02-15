import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getLogger(): string {
    this.logger.debug("Logging...");
    return "Return Logger";
  }
}