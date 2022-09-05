import { app, BrowserWindow } from 'electron'
import { ROOT_PATH } from '../context'
import type { AppContext } from '../../types'
import { applyBrowserWindowConfigurations } from './window-config'
import { join } from 'path'

export function createWindow(context: AppContext) {
  let win = new BrowserWindow({
    title: 'Piranha',
    icon: join(ROOT_PATH.public, 'favicon.ico'),
    webPreferences: {
      preload: context.preload,
    },
    frame: false,
  })

  if (app.isPackaged) {
    win.loadFile(context.indexHTML)
  } else {
    win.loadURL(context.url)
    // Open devTools if the app is not packaged
    win.webContents.openDevTools()
  }

  /* BrowserWindow Configurations */
  applyBrowserWindowConfigurations(win)

  return win
}
