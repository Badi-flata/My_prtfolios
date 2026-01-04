# 🌐 Personal Portfolio Website / موقع شخصي تعريفي

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Abadi Amado | Full Stack Developer**
>
> A modern, responsive, and bilingual (Arabic/English) personal portfolio website showcasing projects and skills.
>
> موقع شخصي عصري ومتجاوب ثنائي اللغة (عربي/إنجليزي) لعرض المشاريع والمهارات.

## ✨ Features / المميزات

*   **⚡ High Performance**: Built with React and Vite for blazing fast speeds.
    *   **أداء عالي**: مبني باستخدام React و Vite لسرعة فائقة.
*   **🎨 Modern Design**: Custom styling with Tailwind CSS and Framer Motion for smooth animations.
    *   **تصميم عصري**: ستايل مخصص باستخدام Tailwind CSS و Framer Motion لأنيميشن سلس.
*   **🌍 Bilingual Support**: Full support for Arabic (RTL) and English (LTR) language switching with instant updates.
    *   **دعم ثنائي اللغة**: دعم كامل للعربية (RTL) والإنجليزية (LTR) مع تحديث فوري للنصوص والاستايلات.
*   **📧 Working Contact Form**: Integrated with EmailJS for real-time emails, including auto-reply thank you messages.
    *   **نموذج تواصل فعال**: مربوط مع EmailJS لإرسال الرسائل فورياً، مع دعم رسائل الشكر التلقائية.
*   **🛡️ Smart Rate Limiting**: Protects against spam by limiting contact form submissions (3 per 24h).
    *   **حماية ذكية**: حماية من السبام عبر تحديد عدد الرسائل المسموحة (3 رسائل كل 24 ساعة).
*   **📱 Fully Responsive**: Optimized for all devices, from mobile phones to large desktops.
    *   **متجاوب بالكامل**: متوافق مع جميع الأجهزة من الجوالات إلى الشاشات الكبيرة.
*   **🌙 Dark/Light Mode**: Seamless theme switching support.
    *   **وضع ليلي/نهاري**: دعم التبديل السلس بين الثيمات.

## 🛠️ Tech Stack / التقنيات المستخدمة

- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS, Styled Components, Material UI (MUI)
- **Animations**: Framer Motion, Lottie React
- **State Management**: Zustand
- **Email Service**: EmailJS
- **Icons**: React Icons, Lucide React

## 🚀 Getting Started / كيفية البدء

To get a local copy up and running, follow these simple steps.
للحصول على نسخة محلية وتشغيلها، اتبع الخطوات التالية.

### Prerequisites / المتطلبات

*   Node.js (v14 or higher)
*   npm or yarn

### Installation / التثبيت

1.  **Clone the repo / انسخ المستودع**
    ```sh
    git clone https://github.com/Start-0-0/my_PresonalWeb.git
    ```
2.  **Install NPM packages / ثبت الحزم**
    ```sh
    npm install
    ```
3.  **Run the project / شغّل المشروع**
    ```sh
    npm run dev
    ```

## 📨 EmailJS Setup / إعداد EmailJS

To make the contact form work, you need to set up your own EmailJS account and replace the credentials in `src/components/useContactForm.jsx`.
لكي يعمل نموذج التواصل، تحتاج لإنشاء حساب EmailJS خاص بك واستبدال بيانات الاعتماد في الملف المذكور.

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

## 📝 Contact / التواصل

**Abadi Amado**

- **GitHub**: [Start-0-0](https://github.com/Start-0-0)
- **Email**: [abadeamado7@gmail.com](mailto:abadeamado7@gmail.com)

---

<p alig="center">
  Made with ❤️ by Abadi Amado
</p>
