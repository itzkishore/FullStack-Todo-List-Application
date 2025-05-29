const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Log all HTTP requests to a file
const logStream = fs.createWriteStream(path.join('/var/log/todoapp', 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: logStream }));

