import * as Updates from 'expo-updates';

const ENV = {
  dev: {
    apiUrl: 'http://localhost:8080/',
    debugSentry: true,
    enableNative: false,
  },
  staging: {
    apiUrl: 'https://api.com/',
    debugSentry: true,
    enableNative: false,
  },
  prod: {
    apiUrl: 'https://api.it/',
    debugSentry: false,
    enableNative: false,
  },
};

//export const getEnvVars = (env = Constants.manifest?.releaseChannel) => {
export const getEnvVars = (env = Updates.releaseChannel) => {
  // __DEV__ is true when run locally, but false when published.
  if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
  return ENV.dev;
};
