const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Get screen size
    const { width, height } = require('electron').screen.getPrimaryDisplay().workAreaSize;

    // Create the browser window
    const win = new BrowserWindow({
        width: width,
        height: height,
        x: 0,
        y: 0,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the HTML file
    win.loadFile('index.html');

    // Open the DevTools (optional)
    // win.webContents.openDevTools();
}


// When Electron has finished initialization, create the window
app.whenReady().then(createWindow);
