// ================================
// Contact Section / قسم التواصل
// ================================
// Contact form with EmailJS integration and success/error animations
// نموذج التواصل مع تكامل EmailJS وأنيميشن النجاح/الخطأ

import { motion } from 'framer-motion'
import { useLanguageStore, dataTitles } from '../components/setLanguage'
import { FaPaperPlane } from 'react-icons/fa'
import Lottie from 'lottie-react'
import sendMessageAnimation from '../../public/assets/animateIcons/Send Message.json'
import { useContactForm } from '../components/useContactForm'
import { contactMethods as staticMethods, socialLinks } from '../components/contactData'

function Contact() {
  // Language state / حالة اللغة
  const { language } = useLanguageStore()
  const { contact, contactInfo } = dataTitles
  const t = contact[language]

  // Contact form hook / هوك نموذج الاتصال
  const { formData, status, errorMessage, handleChange, handleSubmit } = useContactForm()

  // Dynamic Contact Methods (Localize Location)
  const contactMethods = staticMethods.map(method => {
    if (method.label === "Location") {
      return { ...method, text: contactInfo[language].locationText }
    }
    return method
  })

  return (
    <section id="contact" className="w-full py-20 relative overflow-hidden">
      {/* Decorative Background / خلفية زخرفية */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] 
      -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header / رأس القسم */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-titleLight font-semibold tracking-wider uppercase mb-2"
          >
            {t.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,5rem)] font-bold font-[Amiri] text-center title"
          >
            {t.title}
          </motion.h2>
          <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl dark:text-accent font-[Tajawal] text-lg leading-relaxed"
          >
            {t.desc}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info Side / جانب معلومات الاتصال */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex flex-col gap-8"
          >
            <h3 className="text-2xl font-bold font-[Tajawal] text-secondary dark:text-light-100 border-l-4 rtl:border-r-4 rtl:border-l-0 border-accent pl-4 rtl:pr-4">
              {t.contactInfoTitle}
            </h3>

            {/* Contact Methods / طرق التواصل */}
            <div className="flex flex-col gap-6">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-dark-100/50 backdrop-blur-sm border border-transparent hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-xl">
                    {method.icon}
                  </div>
                  <span className="text-secondary dark:text-light-200 font-medium group-hover:text-accent transition-colors">
                    {method.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Media / وسائل التواصل الاجتماعي */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-secondary dark:text-light-100 mb-4 font-[Tajawal]">Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-dark-200/5 dark:bg-light-100/5 text-secondary dark:text-light-200 hover:bg-dark-200 dark:hover:bg-light-100 transition-all duration-300 text-xl ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side / جانب النموذج */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 rounded-3xl bg-white dark:bg-dark-100 border border-light-200 dark:border-dark-200 shadow-2xl shadow-accent/5">
              {/* Name and Email Fields / حقول الاسم والبريد الإلكتروني */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xl font-semibold text-secondary dark:text-dark-200 ml-1 rtl:mr-1">{t.namePlaceholder}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-[clamp(0.4rem,2vw,1.5rem)] px-5 py-4 rounded-xl foucOnfiles border
                     border-light-200 dark:border-dark-200 focus:border-accent focus:ring-2 focus:ring-accent/20
                      outline-none transition-all duration-300 text-secondary dark:text-light-100"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xl font-semibold text-secondary dark:text-dark-200 ml-1 rtl:mr-1">{t.emailPlaceholder}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-[clamp(0.4rem,2vw,1.5rem)] px-5 py-4 rounded-xl foucOnfiles border
                     border-light-200 dark:border-dark-200 focus:border-accent focus:ring-2 focus:ring-accent/20 
                     outline-none transition-all duration-300 text-secondary dark:text-light-100"
                    placeholder={t.emailPlaceholder}
                  />
                </div>
              </div>

              {/* Message Field / حقل الرسالة */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xl font-semibold text-secondary dark:text-dark-200 ml-1 rtl:mr-1">{t.messagePlaceholder}</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full text-[clamp(1.3rem,2vw,2rem)] px-5 py-4 rounded-xl foucOnfiles border
                   border-light-200 dark:border-dark-200 focus:border-accent focus:ring-2
                    focus:ring-light-200 outline-none transition-all duration-300 text-secondary dark:text-light-100 resize-none"
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>

              {/* Submit Button and Status Messages / زر الإرسال ورسائل الحالة */}
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full md:w-auto px-10 py-4 bg-titleLight/80 opacity-50 sendButton text-white font-bold rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.sending}
                    </>
                  ) : (
                    <>
                      {t.sendButton} <FaPaperPlane />
                    </>
                  )}
                </button>

                {/* Success Animation and Message / أنيميشن ورسالة النجاح */}
                {status === 'success' && (
                  <div className="mt-4 flex flex-col items-center gap-2">
                    <div className="w-32 h-32">
                      <Lottie animationData={sendMessageAnimation} loop={false} />
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-semibold text-center">{t.success}</p>
                  </div>
                )}

                {/* Error Message / رسالة الخطأ */}
                {status === 'error' && (
                  <p className="text-red-500 mt-2 font-bold bg-red-100 dark:bg-red-900/20 p-2 rounded-lg text-center">
                    {errorMessage || t.error}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
