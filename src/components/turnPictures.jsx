import React, { createContext, useContext, useState } from 'react';

// استيراد الصور لضمان عملها بشكل صحيح
import img2 from '../../public/assets/images/personal_pictures/picture_2.jpg'
import img3 from '../../public/assets/images/personal_pictures/picture_3.jpg'
import img4 from '../../public/assets/images/personal_pictures/picture_4.jpg'
import img5 from '../../public/assets/images/personal_pictures/picture_5.jpg'
import img1 from '../../public/assets/images/personal_pictures/picture_1.jpg'



// 1. إنشاء الـ Context
const ProjectContext = createContext();

// 2. إنشاء الـ Provider لتغليف التطبيق
export const PicturesContext = ({ children }) => {
    
        // استخدام الصور المستوردة في المصفوفة
        const pictures = [img1, img2, img3, img4, img5];
        // الحالة الابتدائية هي الصورة الأولى
        const [current, setCurrent] = useState([img1]);

        const changePicture = (ele) => {
            setCurrent(ele)
        }

        return (
            <ProjectContext.Provider value={{ pictures, current, changePicture }}>
                {children}
            </ProjectContext.Provider>
        );
    };

    // 3. إنشاء Custom Hook لسهولة الاستخدام
    export const useProjects = () => useContext(ProjectContext);