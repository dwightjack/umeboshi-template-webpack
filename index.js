module.exports = () => {
    console.error('This entrypoint format is deprecated. Please upgrade umeboshi-cli.');
    console.error();
    console.error('npm install -g umeboshi-cli');
    return {};
};


module.exports.prompts = () => {

    return [{
        type: 'list',
        name: 'library',
        message: 'UI library',
        choices: [{
            name: 'None (vanilla)',
            value: 'vanilla'
        }, {
            name: 'React',
            value: 'react'
        }, {
            name: 'Vue.js',
            value: 'vue'
        }],
        default: 0
    }];
};


module.exports.fileMaps = ({ options }) => [
    {
        pattern: new RegExp(`^app\/__${options.library}\/(.+)$`),
        rename: ({ match }) => `app/assets/js/${match[1]}`
    },
    {
        pattern: 'app/__*/**/{.,}*',
        rename: null //delete
    }
];