import { contextBridge, ipcRenderer } from 'electron';

// Define the API interface
interface KdbxApi {
  loadDatabase: (file: string, pass: string) => Promise<{ success: boolean; db?: any; error?: string }>;
}

// Expose the API to the renderer process
contextBridge.exposeInMainWorld('kdbxApi', {
  loadDatabase: (file: string, pass: string) => ipcRenderer.invoke('load-kdbx-db', file, pass),
} as KdbxApi); 