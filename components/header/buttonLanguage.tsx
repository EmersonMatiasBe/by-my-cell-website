'use client'
import Cookies from 'js-cookie'

export default function ButtonLanguage() {
  function setLanguage(label: string) {
    Cookies.set('language', label)
    document.documentElement.lang = label
    window.location.reload()
  }

  return (
    <div className="flex">
      <button className="bg-red-500 p-1" onClick={() => setLanguage('pt')}>
        PT
      </button>
      <button className="bg-red-500 p-1" onClick={() => setLanguage('en')}>
        EN
      </button>
    </div>
  )
}
