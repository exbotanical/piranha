import { app, type BrowserWindow } from 'electron'
import { join } from 'path'
import type { AppContext } from '../types'

export const ROOT_PATH = {
  // /dist
  dist: join(__dirname, '../..'),
  // /dist or /public
  public: join(__dirname, app.isPackaged ? '../..' : '../../../public'),
}

export const context: AppContext = {
  preload: join(__dirname, '../preload/index.js'),
  url: process.env.VITE_DEV_SERVER_URL,
  indexHTML: join(ROOT_PATH.dist, 'index.html'),
}
