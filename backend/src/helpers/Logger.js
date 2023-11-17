import winston from 'winston';

export const Logger = winston.createLogger({
    level: 'info',
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.timestamp({format : 'DD-MM-YYYY [at] HH:mm:ss'}),
        winston.format.json()
    )
});