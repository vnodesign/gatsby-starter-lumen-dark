import MomentLocalesPlugin from 'moment-locales-webpack-plugin';

export const plugins = [
    // To strip all locales except “en”
    new MomentLocalesPlugin()
];