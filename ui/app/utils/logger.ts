/* eslint-disable @typescript-eslint/no-explicit-any */
import pkg from "../../package.json";

const VERSION = pkg.version;

export const logger = {
  info: (message: string, ...args: any[]) => {
    console.log(`[v${VERSION}] ${message}`, ...args);
  },
  error: (message: any, ...args: any[]) => {
    console.error(`[v${VERSION}] ${message}`, ...args);
  },
  warn: (message: string, ...args: any[]) => {
    console.warn(`[v${VERSION}] ${message}`, ...args);
  },
  debug: (message: string, ...args: any[]) => {
    console.debug(`[v${VERSION}] ${message}`, ...args);
  },
};
