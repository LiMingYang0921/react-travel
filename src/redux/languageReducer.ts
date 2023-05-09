const CHANGE_LANGUAGE = 'change_language'
const ADD_LANGUAGE = 'add_language'

interface LanguageState {
  language: string,
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

interface changeLanguageAction {
  type: typeof CHANGE_LANGUAGE
  payload: string
}

interface addLanguageAction {
  type: typeof ADD_LANGUAGE
  payload: {
    name: string,
    code: string
  }
}

type LanguageActionTypes = changeLanguageAction | addLanguageAction

export const changeLanguageActionCreator = (languageCode: string): changeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}

export const addLanguageActionCreator = (name: string, code: string): addLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code }
  }
}

const reducer = (state = defaultState, action: LanguageActionTypes) => {
  if (action.type === 'change_language') {
    const newState = { ...state, language: action.payload }
    return newState
  }
  if (action.type === 'add_language') {
    const newState = { ...state, languageList: [...state.languageList, action.payload] }
    return newState
  }
  return state
}

export default reducer