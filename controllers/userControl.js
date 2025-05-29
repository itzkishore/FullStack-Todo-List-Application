const logger = require('../config/logger');
logger.info("User created");
logger.debug("User data: " + JSON.stringify(user));
logger.error("Failed to connect to DB");

