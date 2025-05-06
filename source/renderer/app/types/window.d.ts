export {};

declare global {
  interface Window {
    kdbxApi: {
      loadDatabase(filePath: string, password: string): Promise<any>;
    };
  }
}

