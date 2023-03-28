// eslint-disable-next-line @typescript-eslint/no-var-requires
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@ronradtke/react-native-markdown-display']
        }
    }, argv);
    return config;
};
