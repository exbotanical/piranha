import { PiranhaError } from '.'

export class ErroneousResponseError extends PiranhaError {
  public readonly friendly: string

  constructor(friendly: string) {
    super({ internal: 'Http request failure', friendly })
    this.friendly = friendly

    Object.setPrototypeOf(this, ErroneousResponseError.prototype)
  }

  serialize() {
    return this.messages
  }
}
