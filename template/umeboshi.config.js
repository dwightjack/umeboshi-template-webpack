module.exports = {
    extends: {
        'umeboshi-config': {},
        {{#eq library 'react'}}
        'umeboshi-config-react': {},
        {{/eq}}
        {{#eq library 'vue'}}
        'umeboshi-config-vue': {},
        {{/eq}}
        'umeboshi-config-spa': {}
    }
};