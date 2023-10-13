import { createLogger, format, transports } from "winston";

const loggerSrv = createLogger({
    format: format.combine(
        format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
        format.printf(
            (info) =>
                `[${info.timestamp}] [${info.level.toUpperCase()}] ${
                    info.message
                }`
        )
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: "logSrv.log" }),
    ],
});

const loggerPost = createLogger({
    format: format.combine(
        format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
        format.printf(
            (info) =>
                `[${info.timestamp}] [${info.level.toUpperCase()}] ${
                    info.message
                }`
        )
    ),
    transports: [
        new transports.Console({
            silent: true,
        }),
        new transports.File({ filename: "loggerPost.log" }),
    ],
});

export const logPost = (message: string) => {
    loggerPost.info(message);
};

export const logInfo = (message: string) => {
    loggerSrv.info(message);
};
