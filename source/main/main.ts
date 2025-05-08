import { app, BrowserWindow, ipcMain } from 'electron';
import * as fs from 'fs';
import * as kdbxweb from 'kdbxweb';
import * as path from 'path';
import * as url from 'url';

const isDev = process.argv.slice(1).some((val) => val === "--dev");

function createWindow(): void {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      sandbox: true,
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (isDev) {
    void win.loadURL(
      url.format({
        pathname: "localhost:4200",
        protocol: "http:",
        slashes: true,
      })
    );

    win.webContents.openDevTools();
  } else {
    void win.loadURL(
      url.format({
        pathname: path.join(__dirname, "../renderer/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC: загрузка базы
ipcMain.handle('load-kdbx-db', async (_event: Electron.IpcMainInvokeEvent, filePath: string, password: string) => {
  try {
    const arrayBuffer = readFileAsArrayBuffer(filePath);
    const credentials = createCredentials(password);
    const db = await kdbxweb.Kdbx.load(arrayBuffer, credentials);

    return { success: true, db: db.getDefaultGroup() };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

function readFileAsArrayBuffer(filePath: string): ArrayBuffer {
  const fileBuffer = fs.readFileSync(filePath);
  return fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);
}

function createCredentials(password: string): kdbxweb.Credentials {
  const protectedPassword = kdbxweb.ProtectedValue.fromString(password);
  return new kdbxweb.Credentials(protectedPassword);
} 