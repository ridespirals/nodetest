var prompt = require('prompt');
var chalk = require('chalk');

var schema = {
    properties: {
        name: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must only be letters, spaces, and dashes',
            required: true
        },
        password: {
            hidden: true
        }
    }
};

prompt.start();

prompt.get(schema, function(err, result) {
    console.log('Command-line input received:');
    console.log(chalk.bold('    name:'), chalk.cyan(result.name));
    console.log(chalk.bold('    password:'), chalk.red(result.password));
});
