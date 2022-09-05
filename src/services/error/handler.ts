import { logger } from '@/services/logger'

import { PiranhaError } from '.'

interface ErrorHandlerOptions {
  notify: boolean
  fallback?: string
}

/**
 * Error handling middleware. Each error class in /errors uses an `internal` message (for dev) and `friendly` message (for user).
 * This handler will filter any captured errors and conditionally dispatch a notification to the user.
 *
 * @param ex Captured thrown object.
 * @param options.notify Display the `friendly` message to the user?
 */
export const useErrorHandler = (
  ex: any,
  { notify = false, fallback }: ErrorHandlerOptions,
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  logger.error({ ex })

  let ret =
    fallback || 'Uh oh, something went wrong. Please try refreshing the page.'

  // captures any instance of `PiranhaError`, including all subclasses
  if (ex instanceof PiranhaError) {
    const { friendly } = ex.serialize()

    ret = friendly
  }

  if (notify) {
    console.error('error', ret)
  }

  return ret
}
