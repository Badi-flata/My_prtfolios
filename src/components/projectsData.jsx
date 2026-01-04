// ================================
// Projects Data Hook / هوك بيانات المشاريع
// ================================
// Custom hook that provides project data with language support
// هوك مخصص يوفر بيانات المشاريع مع دعم اللغة

import { dataTitles, useLanguageStore } from './setLanguage';

import img1 from '../../public/assets/images/test_1.jpg';
import img2 from '../../public/assets/images/test_2.jpg';
import img3 from '../../public/assets/images/test_3.webp';

// Hook to get projects data based on current language / هوك للحصول على بيانات المشاريع بناءً على اللغة الحالية
export const useProjectsData = () => {
    // Get current language / الحصول على اللغة الحالية
    const { language } = useLanguageStore();

    // Get project text content / الحصول على محتوى نصوص المشاريع
    const {
        ProjectsText: { projects1, projects2, projects3 },
    } = dataTitles;

    // Projects array with localized content / مصفوفة المشاريع مع المحتوى المترجم
    const ProjectsData = [
        {
            Title: projects1[language].title,
            Detailed: projects1[language].detailed,
            link: '',
            githubLink: '',
            image: img1,
            catgory: ['React', 'Css'],  // Technologies used / التقنيات المستخدمة
        },

        {
            Title: projects2[language].title,
            Detailed: projects2[language].detailed,
            link: '',
            githubLink: '',
            image: img2,
            catgory: ['JS', "MongoDB", "Node", "Express", 'Css'],
        },

        {
            Title: projects3[language].title,
            Detailed: projects3[language].detailed,
            link: '',
            githubLink: '',
            image: img3,
            catgory: ["MongoDB", "Node", "Css"],
        },
    ];

    return ProjectsData;
};
