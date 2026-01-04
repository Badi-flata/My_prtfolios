// ================================
// Contact Form Hook / هوك نموذج الاتصال
// ================================
// Custom hook for managing contact form state and EmailJS integration
// هوك مخصص لإدارة حالة نموذج الاتصال ودمج EmailJS

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguageStore } from './setLanguage'

export const useContactForm = () => {
    // Get current language / الحصول على اللغة الحالية
    const { language } = useLanguageStore()

    // Form data state / حالة بيانات النموذج
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // Form status state / حالة النموذج (null, 'sending', 'success', 'error')
    const [status, setStatus] = useState(null)

    // Error message state / حالة رسالة الخطأ
    const [errorMessage, setErrorMessage] = useState('')

    // Handle input changes / معالجة تغييرات المدخلات
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Check Rate Limit / التحقق من حد الإرسال
    const checkRateLimit = () => {
        const STORAGE_KEY = 'contactRateLimit'
        const LIMIT = 3
        const TIME_WINDOW = 24 * 60 * 60 * 1000 // 24 hours

        const now = Date.now()
        const savedData = localStorage.getItem(STORAGE_KEY)
        let data = savedData ? JSON.parse(savedData) : { count: 0, firstMsgTime: now }

        // Reset if time window passed / إعادة التعيين إذا انتهت الفترة الزمنية
        if (now - data.firstMsgTime > TIME_WINDOW) {
            data = { count: 0, firstMsgTime: now }
        }

        if (data.count >= LIMIT) {
            return false
        }

        // Return new data to save later / إرجاع البيانات الجديدة للحفظ لاحقاً
        return data
    }

    // Check if Thank You email should be sent / التحقق مما إذا كان يجب إرسال رسالة شكر
    const shouldSendThankYou = (email) => {
        const STORAGE_KEY = 'sentThankYouEmails'
        const sentEmails = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

        if (sentEmails.includes(email)) {
            return false
        }
        return true
    }

    // Save Thank You email sent status / حفظ حالة إرسال رسالة الشكر
    const markThankYouSent = (email) => {
        const STORAGE_KEY = 'sentThankYouEmails'
        const sentEmails = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        if (!sentEmails.includes(email)) {
            sentEmails.push(email)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sentEmails))
        }
    }

    // Update Rate Limit Count / تحديث عداد حد الإرسال
    const updateRateLimit = (data) => {
        data.count += 1
        localStorage.setItem('contactRateLimit', JSON.stringify(data))
    }

    // Handle form submission with EmailJS / معالجة إرسال النموذج عبر EmailJS
    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        setErrorMessage('')

        // 1. Check Rate Limit / التحقق من حد الإرسال
        const rateLimitData = checkRateLimit()
        if (!rateLimitData) {
            setStatus('error')
            const limitMsg = language === 'ض'
                ? 'عذراً، لقد تجاوزت الحد المسموح به لإرسال الرسائل (3 رسائل يومياً). يرجى المحاولة غداً.'
                : 'Sorry, you have exceeded the daily message limit (3 messages). Please try again tomorrow.'
            setErrorMessage(limitMsg)
            setTimeout(() => {
                setStatus(null)
                setErrorMessage('')
            }, 5000)
            return
        }

        try {
            // TODO: Replace with your EmailJS credentials / استبدل ببيانات EmailJS الخاصة بك
            // Get these from: https://www.emailjs.com/
            const SERVICE_ID = 'YOUR_SERVICE_ID'
            const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
            const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

            // Send main email / إرسال البريد الإلكتروني الرئيسي
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                PUBLIC_KEY
            )

            // 2. Send thank you email only if not sent before / إرسال رسالة شكر فقط إذا لم ترسل من قبل
            if (shouldSendThankYou(formData.email)) {

                // Thank you messages based on language / رسائل الشكر بناءً على اللغة
                const thankYouMessages = {
                    E: {
                        subject: 'Thank You for Contacting me!',
                        message: `Dear ${formData.name},

Thank you for reaching out to me! I have received your message and truly appreciate you taking the time to contact me.

Your inquiry is important to me, and I will review it carefully. I'm getting back to you as soon as possible, typically within 24-48 hours.

In the meantime, if you have any urgent questions or additional information to share, please don't hesitate to reply to this email.

I look forward to connecting with you soon!

Best regards,
Abadi Amado
Full Stack Developer`
                    },
                    ض: {
                        subject: 'شكراً لتواصلك معني!',
                        message: `عزيزي/عزيزتي ${formData.name}،

شكراً لتواصلك معني! لقد استلمت رسالتك ونقدر حقاً الوقت الذي خصصته للتواصل معنا.

استفسارك مهم بالنسبة لنا، وسأقوم بمراجعته بعناية. سأتواصل معك في أقرب وقت ممكن، عادةً خلال 24-48 ساعة.

في هذه الأثناء، إذا كان لديك أي أسئلة عاجلة أو معلومات إضافية ترغب في مشاركتها، فلا تتردد في الرد على هذا البريد الإلكتروني.

اتطلع للتواصل معك قريباً!

مع أطيب التحيات،
عبادي أمادو
مطور Full Stack`
                    }
                }

                // Get message based on current website language / الحصول على الرسالة بناءً على لغة الموقع الحالية
                const currentMessage = thankYouMessages[language] || thankYouMessages.E

                await emailjs.send(
                    SERVICE_ID,
                    'YOUR_TEMPLATE_ID', // Thank you template in EmailJS
                    {
                        to_name: formData.name,
                        to_email: formData.email, // This variable must be used in the "To Email" field in your EmailJS template settings
                        reply_to: formData.email, // Adding reply_to as a backup standard field
                        subject: currentMessage.subject,
                        message: currentMessage.message,
                    },
                    PUBLIC_KEY
                )

                // Mark as sent / وضع علامة أنه تم الإرسال
                markThankYouSent(formData.email)
            }

            // Update rate limit counter / تحديث عداد الإرسال
             updateRateLimit(rateLimitData)
 
            // Success / نجاح
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })

            // Reset status after 5 seconds / إعادة تعيين الحالة بعد 5 ثوانٍ
            setTimeout(() => setStatus(null), 5000)
        } catch (error) {
            // Error / خطأ
            console.error('FAILED...', error); // طباعة الخطأ كاملاً
            if (error.text) console.error('Error Text:', error.text); // إذا كان هناك نص للخطأ من EmailJS

            setStatus('error')
            setErrorMessage(language === 'ض' ? 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.' : 'An unexpected error occurred. Please try again.')

            // Reset error status after 5 seconds / إعادة تعيين حالة الخطأ بعد 5 ثوانٍ
            setTimeout(() => {
                setStatus(null)
                setErrorMessage('')
            }, 5000)
        }
    }

    return {
        formData,
        status,
        errorMessage,
        handleChange,
        handleSubmit
    }
}
