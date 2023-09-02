import { nanoid } from 'nanoid'

export const generateKey = () => nanoid(8)

export const validateKey = (value: string) => RegExp("^[a-zA-Z0-9_-]*$").test(value)

export const validateUrl = (value: string) => {
  const expression = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

  return new RegExp(expression).test(value)
}
