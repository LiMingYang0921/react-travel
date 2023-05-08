interface LanguageState {
  language: 'en' | 'zh',
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

const reducer = (state = defaultState, action) => {
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