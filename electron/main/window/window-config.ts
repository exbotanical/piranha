import { BrowserWindow, ipcMain, nativeTheme, shell } from 'electron'

export function applyBrowserWindowConfigurations(win: BrowserWindow) {
  /* Open links within the browser (and not this application) */
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) {
      shell.openExternal(url)
    }
    return { action: 'deny' }
  })

  /* Dark Mode */
  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }

    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}
