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
    }
}

