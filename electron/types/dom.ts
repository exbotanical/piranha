export interface DOMInstance {
  append(parent: HTMLElement, child: HTMLElement): HTMLElement | undefined
  remove(parent: HTMLElement, child: HTMLElement): HTMLElement | undefined
}
