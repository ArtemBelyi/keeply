const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld('kdbxApi', {
  loadDatabase: (file, pass) => ipcRenderer.invoke('load-kdbx-db', file, pass),
});
