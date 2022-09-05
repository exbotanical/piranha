import { contextBridge, ipcRenderer, nativeTheme } from 'electron'
import { useLoading } from './hooks'
import { domReady, safeDOM } from './utils'

/* Context Bridge */
contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
})

/* Initialization */
const { appendLoading, removeLoading } = useLoading(safeDOM)
domReady().then(appendLoading)

window.onmessage = e => {
  console.log({ e })
  e.data.payload === 'removeLoading' && removeLoading()
}

// setTimeout(removeLoading, 4999)
