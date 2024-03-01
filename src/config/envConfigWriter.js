/* eslint-disable prettier/prettier */
import fs from 'fs';

export function writeEnvConfig(envConfig) {
  fs.writeFileSync('.env', envConfig, { encoding: 'utf8' });
}
