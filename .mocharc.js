const config = {
    spec: 'project/spec/**/*.test.js',
    timeout: 30000,
    require: ['config/setup.js'],
    reporter: 'spec'
};

export default config;