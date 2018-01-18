const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
    prompting() {
        this.log('Welcome to the ' + chalk.red('generator-nexes') + ' generator!');

        const prompts = [{
            type: 'confirm',
            name: 'someAnswer',
            message: 'Would you like to enable this option?',
            default: true
        }];

        return this.prompt(prompts).then((props) => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copy(
            this.templatePath('LICENSE'),
            this.destinationPath('LICENSE')
        );
    }

    install() {
        this.installDependencies();
    }
};
