import messagesEn from './en'
import messagesPt from './pt'

export default function useTranslations(lang: 'pt' | 'en') {
  const messages = {
    pt: messagesPt,
    en: messagesEn
  }

  return messages[lang]
}
