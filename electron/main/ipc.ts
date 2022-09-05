import { app, BrowserWindow, ipcMain } from 'electron'
import { context } from './context'

// new window example arg: new windows url
ipcMain.handle('open-win', (event, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload: context.preload,
    },
  })

  if (app.isPackaged) {
    childWindow.loadFile(context.indexHTML, { hash: arg })
  } else {
    childWindow.loadURL(`${context.url}/#${arg}`)
    // childWindow.webContents.openDevTools({ mode: "undocked", activate: true })
  }
})
