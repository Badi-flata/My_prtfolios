// ================================
// Contact Data / بيانات التواصل
// ================================
// This file contains all contact-related data including contact methods and social media links
// هذا الملف يحتوي على جميع البيانات المتعلقة بالتواصل بما في ذلك طرق الاتصال وروابط وسائل التواصل الاجتماعي

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

// Contact Methods / طرق الاتصال
// Array of contact information للتواصل عبر البريد والهاتف والموقع
export const contactMethods = [
    {
        icon: <FaEnvelope />,
        text: "badiyflatt@gmail.com",
        href: "mailto:badiyflatt@gmail.com",
        label: "Email"
    },
    {
        icon: <FaPhone />,
        text: "+966 50 123 4567",
        href: "tel:+966501234567",
        label: "Phone"
    },
    {
        icon: <FaMapMarkerAlt />,
        text: "Makkah, Saudi Arabia",
        href: "#",
        label: "Location"
    },
]

// Social Media Links / روابط وسائل التواصل الاجتماعي
// Array of social media platforms with icons and colors
export const socialLinks = [
    {
        icon: <FaLinkedin />,
        href: "#",
        color: "hover:text-blue-500"
    },
    {
        icon: <FaGithub />,
        href: "https://github.com",
        color: "hover:text-gray-400"
    },
    {
        icon: <FaWhatsapp />,
        href: "https://wa.me/966501234567",
        color: "hover:text-green-500"
    },
]
