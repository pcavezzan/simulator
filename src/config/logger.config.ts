import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

const myFormat = printf((info: any) => {
  return `${info.timestamp} -- ${info.level.toUpperCase()} - ${info.message}`;
});

export const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console()
  ]
});
