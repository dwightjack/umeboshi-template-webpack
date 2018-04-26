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
    }, {
        type: 'confirm',
        name: 'prettier',
        message: 'Do you want to use prettier?',
        default: false
    }];
};


module.exports.fileMaps = ({ options }) => {

    const map = [
        {
            pattern: new RegExp(`^app\/__${options.library}\/(.+)$`),
            rename: ({ match }) => `app/assets/js/${match[1]}`
        },
        {
            pattern: 'app/__*/**/{.,}*',
            rename: null //delete
        }
    ];

    if (!options.prettier) {
        map.push(
            {
                pattern: '.prettierrc.js',
                rename: null
            }
        );
    }

    return map;
};