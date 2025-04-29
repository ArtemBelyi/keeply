const { app, BrowserWindow, ipcMain } = require('electron/main');

const fs = require('fs');
const kdbxweb = require('kdbxweb');

const isDev = process.argv.slice(1).some((val) => val === "--dev");
const path = require("path");
const url = require("url");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      sandbox: true,
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

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
        pathname: path.join(__dirname, "../dist/subd/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// IPC: загрузка базы
ipcMain.handle('load-kdbx-db', async (_event, filePath, password) => {
  try {
    const arrayBuffer = readFileAsArrayBuffer(filePath);
    const credentials = createCredentials(password);
    const db = await kdbxweb.Kdbx.load(arrayBuffer, credentials);

    return { success: true, db: db.getDefaultGroup() };
  } catch (error) {
    return { success: false, error: error.message };
  }
})

function readFileAsArrayBuffer(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);
}

function createCredentials(password) {
  const protectedPassword = kdbxweb.ProtectedValue.fromString(password);
  return new kdbxweb.Credentials(protectedPassword);
}
