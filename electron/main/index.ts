import { release } from 'os'

import { app, BrowserWindow } from 'electron'
import { initializeTray } from './tray'
import { createWindow } from './window'
import { context } from './context'
import './ipc'

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) {
  app.disableHardwareAcceleration()
}

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') {
  app.setAppUserModelId(app.getName())
}

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null

app
  .whenReady()
  .then(() => {
    win = createWindow(context)
  })
  .then(() => {
    initializeTray(app)
  })

app
  .on('window-all-closed', () => {
    win = null

    // Abide by darwin's OS behavior by keeping the app running in the background.
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  .on('second-instance', () => {
    if (win) {
      // Focus on the main window if the user tried to open another
      if (win.isMinimized()) {
        win.restore()
      }
      win.focus()
    }
  })

  // @todo may need to relocate inside of `whenReady` cb
  .on('activate', () => {
    const allWindows = BrowserWindow.getAllWindows()
    if (allWindows.length) {
      allWindows[0].focus()
    } else {
      win = createWindow(context)
    }
  })
