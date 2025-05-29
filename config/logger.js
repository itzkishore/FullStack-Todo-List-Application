const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new transports.File({ filename: '/var/log/todoapp/app.log' }),
    new transports.Console()
  ]
});

module.exports = logger;

