import { PayloadProps } from '../../store/types'
import { flatten } from 'flat'

export const getDictEntries = (props: PayloadProps): string => {
  let xs: string = ``
  const flatObject: any = flatten(props)
  Object.keys(flatObject).forEach((key: string) => {
    const newKey = key.match(/[a-z]+$/i)
    //console.log(key, newKey, flatObject[key])
    xs += `**${newKey}**: `
    switch (typeof flatObject[key]) {
      case 'number': {
        const value: number = flatObject[key] as number
        xs += `${value} <br />`
        return
      }
      case 'string': {
        const value: string = flatObject[key] as string
        xs += `${value} <br />`
        return
      }
      case 'boolean': {
        const value: boolean = flatObject[key] as boolean
        xs += `${value} <br />`
        return
      }
      case 'object': {
        return xs += ``
      }
      default:
        console.log("Error!")
        break
    }

  })
  return xs
}
