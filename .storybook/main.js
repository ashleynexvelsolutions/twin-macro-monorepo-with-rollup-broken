const path = require('path');


module.exports = {
  babel: async (options) => {
    return options;
},
  "stories": [
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
    addons: [
      {
        name: '@storybook/addon-essentials',
        options: {
          actions: false,
        }
      }
    ],
    core: {
      builder: "webpack5",
    },
    layout: 'fullscreen',
  };