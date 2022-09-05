import { Menu, nativeImage, Tray } from 'electron'

export function initializeTray(app: Electron.App) {
  let tray
  const icon = nativeImage.createFromPath('../../assets/fish.png')
  tray = new Tray(icon)

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
  ])

  tray.setContextMenu(contextMenu)
  tray.setToolTip('This is my application')
  tray.setTitle('This is my title')
}
