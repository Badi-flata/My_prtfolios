import { FaHeart } from 'react-icons/fa'
import { useLanguageStore } from '../components/setLanguage'

function Footer() {
  const { language } = useLanguageStore()
  const year = new Date().getFullYear()

  const content = {
    EN: {
      rights: `All rights reserved © ${year} Abadi Amado`,
      madeWith: "Made with",
      by: "by Abadi"
    },
    AR: {
      rights: `جميع الحقوق محفوظة © ${year} عبادي امادو`,
      madeWith: "صنع بـ",
      by: "بواسطة عبادي"
    }
  }

  const t = content[language] || content.EN

  return (
    <footer className="w-full py-8 blurBody border-t border-light-200 dark:border-dark-100 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">

        {/* Logo / Brand */}
        <div className="text-2xl font-bold font-[Amiri] text-secondary dark:text-light-100">
          Abadi<span className="text-accent">.</span>dev
        </div>

        {/* Copyright */}
        <div className="text-light-300 dark:text-light-300 text-sm font-[Tajawal]">
          {t.rights}
        </div>

        {/* Made With */}
        <div className="flex items-center gap-2 text-sm text-secondary dark:text-light-200">
          <span>{t.madeWith}</span>
          <FaHeart className="text-red-500 animate-pulse" />
          <span>{t.by}</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer