import { ConsoleLogger, Injectable } from "@nestjs/common";

@Injectable()
export class AppLogger extends ConsoleLogger {
  debug(message: any, ...optionalParams: any[]) {
    super.debug(`${message}`, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    super.warn(`${message}`, ...optionalParams);
  }
}