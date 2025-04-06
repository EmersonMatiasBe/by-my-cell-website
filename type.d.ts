type LanguageOptions = 'pt' | 'en'
type Params = {
  lang: LanguageOptions
}

interface Form {
  name: string
  email: string
  message: string
  phone: string
  checkbox: boolean
}

type AlertType = 'success' | 'error' | undefined
