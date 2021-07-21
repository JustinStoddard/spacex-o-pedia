/**
 * @param key The var to pull from the env
 * @returns The env var
 */
const getEnvVar = (key: string) => {
  try {
    return process.env[key];
  } catch (err) {
    console.log(`Couldnt fetch ${key}`, err);
  }
};

export default getEnvVar;