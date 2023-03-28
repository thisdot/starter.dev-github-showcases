import createExpoWebpackConfigAsync from '@expo/webpack-config';

export default async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@ronradtke/react-native-markdown-display']
        }
    }, argv);
    return config;
}
