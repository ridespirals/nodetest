var prompt = require('prompt');
var chalk = require('chalk');
var yaml = require('js-yaml');
var fs = require('fs');

function test_prompt() {
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
}


parseStory('dwarves.yml');
parseStory('dwarves_two.yml');

function parseStory(name) {
    try {
        var doc = yaml.safeLoad(fs.readFileSync(name));
        //console.log(doc);

        console.log(chalk.green(doc.story_title));
        for(var x in doc.story_parts) {
            var part = doc.story_parts[x];
            console.log('  ', chalk.bold.yellow(part.name), '\t', chalk.cyan(part.ascii));
        }

    } catch(e) {
        console.log(chalk.bold.red('Error: ', e));
    }
}