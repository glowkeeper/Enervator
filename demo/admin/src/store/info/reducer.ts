import { Reducer } from 'redux'
import { InfoPageProps } from './types'
import { About, Help, Home, IATIReader, IATIWriter, Overview } from '../../utils/strings'

const initialState: InfoPageProps = {
  data: {
    about: {
      title: About.heading,
      data: About.info
    },
    help: {
      title: Help.heading,
      data: Help.info
    },
    home: {
      title: Home.heading,
      data: Home.info
    },
    overview: {
      title: Overview.heading,
      data: Overview.info
    }
  }
}

export const reducer: Reducer<InfoPageProps> = (state = initialState): InfoPageProps => {
  return state
}
