// ================================
// Language & Navigation State / حالة اللغة والتنقل
// ================================
// Zustand stores for managing language and navigation state
// مخازن Zustand لإدارة حالة اللغة والتنقل

import React, { createContext, useContext, useState } from 'react';
import { create } from 'zustand'

// Language Store / مخزن اللغة
// Manages application language state (E for English, ض for Arabic)
// يدير حالة لغة التطبيق (E للإنجليزية، ض للعربية)
export const useLanguageStore = create((set) => ({
    language: 'E', // Default language / اللغة الافتراضية

    // Action to change language / إجراء لتغيير اللغة
    setLanguage: (lang) => set({ language: lang }),
}));

// Small Screen Navigation Store / مخزن التنقل للشاشات الصغيرة
// Manages mobile navigation menu visibility
// يدير إظهار قائمة التنقل في الموبايل
export const UlSmolScreen = create((set) => ({
    showNav: false, // Navigation visibility state / حالة إظهار التنقل

    // Action to toggle navigation / إجراء لتبديل التنقل
    setShowNav: (show) => set({ showNav: show }),
}));

// Application Content Data / بيانات محتوى التطبيق
// Contains all text content in both English and Arabic
// يحتوي على جميع المحتوى النصي بالإنجليزية والعربية
export const dataTitles = {

    // Hero section content / محتوى قسم البطل
    subjectHeader: {
        'E': {
            title: ' Ambition expresses itself and reality listens ',
            Detailed: ' Use my reality to achieve my ambitions through pursuit and knowledge. Know the goal and even plan. Achieve the goals, and goals gain experience, and from there we achieve ambitions '
        },
        "ض": {
            title: "  الطموح يعبر عن نفسه و الواقع يستمع ",
            Detailed: "  استغل واقعي لتحقيق طموحي عبرالسعيّ والمعرفة , اعرف الهدف وبل التخطيط أُحقيق الأهدف , والأهدف تكسب الخبرات , ومنها نحقيق الطموحات "
        }
    },

    // Projects content / محتوى المشاريع
    ProjectsText: {
        projects1: {
            'E': { title: 'ipsum dolor', detailed: ' ipsum dolor, sit amet consectetur adipisicing elit. Modi praesentium repudiandae sit necessitatibus hic labore, nemo distinctio nisi. Neque quae, facere porro quam iste nobis inventore in laudantium sapiente quasi?' },
            'ض': { title: 'بثثففف', detailed: 'يبسسثثث' }
        },
        projects2: {
            'E': { title: 'ipsum dolor', detailed: ' ipsum dolor, sit amet consectetur adipisicing elit. Modi praesentium repudiandae sit necessitatibus hic labore, nemo distinctio nisi. Neque quae, facere porro quam iste nobis inventore in laudantium sapiente quasi?' },
            'ض': { title: 'لتلبلافقييبلافقبالبافي', detailed: 'لييثث' }
        },
        projects3: {
            'E': { title: 'ipsum dolor', detailed: ' ipsum dolor, sit amet consectetur adipisicing elit. Modi praesentium repudiandae sit necessitatibus hic labore, nemo distinctio nisi. Neque quae, facere porro quam iste nobis inventore in laudantium sapiente quasi?' },
            'ض': { title: 'يلبايابتبلففنءل', detailed: 'يبليبلسمحغ بفب قيقق ' }
        }
    },

    // About Section
    about: {
        E: {
            title: "About Me",
            name: "Abadi Amado (Ahmed)",
            desc: "I am a passionate Full Stack Developer specializing in the MERN Stack and Cross-Platform Mobile Development. I build premium, high-performance applications with a focus on user experience and modern design.",
            stack: "MERN Stack / Full Stack - Cross Platform"
        },
        "ض": {
            title: "عني",
            name: "عبادي امادو (احمد)",
            desc: "مطور تطبيقات شامل (Full Stack) متخصص في  MERN Stack  وتطبيقاق الهاتف التي تعمل على النظامين(Cross Platform)  .أقوم ببناء تطبيقات عالية الأداء بتصاميم عصرية وتجربة مستخدم مميزة.",
            stack: "MERN Stack / Full Stack - Cross Platform"
        }
    },

    // Skills Section
    skills: {
        E: {
            title: "My Skills",
            current: "Technologies I Work With",
            future: "Technologies I'm Learning",
        },
        "ض": {
            title: "مهاراتي",
            current: "التقنيات التي أستخدمها",
            future: "تقنيات ساتعلمها قريبا",
        },
    },

    // Projects Section UI
    projectsSection: {
        E: {
            title: "Projects",
            subtitle: "Projects",
            technologies: "Technologies:",
            noProject: "No project used: ",
            allProjects: "All Projects"
        },
        "ض": {
            title: "المشاريع",
            subtitle: "عندما تجعل الخيال وقعاً",
            technologies: "التقنيات:",
            noProject: "لا مشروع يتضمن : ",
            allProjects: "جميع المشاريع"
        }
    },

    // Contact Section
    contact: {
        E: {
            title: "Contact Me",
            subtitle: "Get In Touch",
            desc: "I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            sendButton: "Send Message",
            sending: "Sending...",
            success: "Message Sent Successfully! Thank you, we'll get back to you soon.",
            error: "Something went wrong. Please try again.",
            contactInfoTitle: "Contact Info"
        },
        "ض": {
            title: "تواصل معي",
            subtitle: "ابقى على تواصل",
            desc: "أنا متاح حالياً للعمل الحر أو الفرص الوظيفية بدوام كامل. إذا كان لديك مشروع يحتاج إلى لمسة إبداعية، ويسعدني أن أسمع منك.",
            namePlaceholder: "الاسم",
            emailPlaceholder: "البريد الإلكتروني",
            messagePlaceholder: "رسالتك",
            sendButton: "إرسال الرسالة",
            sending: "جاري الإرسال...",
            success: "تم إرسال الرسالة بنجاح! شكراً لك، سنتواصل معك قريباً.",
            error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
            contactInfoTitle: "معلومات التواصل"
        }
    },

    // Contact Info Details
    contactInfo: {
        E: {
            emailLabel: "Email",
            phoneLabel: "Phone",
            locationLabel: "Location",
            locationText: "Makkah, Saudi Arabia"
        },
        "ض": {
            emailLabel: "البريد الإلكتروني",
            phoneLabel: "الهاتف",
            locationLabel: "الموقع",
            locationText: "مكة المكرمة، المملكة العربية السعودية"
        }
    },

    // Footer
    footer: {
        E: {
            rightsText: "All rights reserved ©",
            name: "Abadi Amado",
            madeWith: "Made with",
            by: "by Abadi"
        },
        "ض": {
            rightsText: "جميع الحقوق محفوظة ©",
            name: "عبادي امادو",
            madeWith: "صنع بـ",
            by: "بواسطة عبادي"
        }
    },

    // UI Components
    ui: {
        E: {
            downloadCV: "Download My CV",
            cvUnavailable: "Sorry, the CV file is currently unavailable.",
            starGithub: "Star on GitHub"
        },
        "ض": {
            downloadCV: "تحميل السيرة الذاتية",
            cvUnavailable: "عذراً، ملف السيرة الذاتية غير متوفر حالياً.",
            starGithub: "ادعمنا على GitHub"
        }
    }
}

