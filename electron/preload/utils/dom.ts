import { DOMInstance } from '../../types'

export function domReady(
  state: DocumentReadyState[] = ['complete', 'interactive'],
) {
  return new Promise<boolean>(resolve => {
    if (state.includes(document.readyState)) {
      resolve(true)
      return
    }

    document.addEventListener('readystatechange', () => {
      if (state.includes(document.readyState)) {
        resolve(true)
      }
    })
  })
}

export const safeDOM: DOMInstance = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(el => el === child)) {
      return parent.appendChild(child)
    }
  },

  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(el => el === child)) {
      return parent.removeChild(child)
    }
  },
}
