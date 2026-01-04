import React, { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { LoaderScreen } from './components/UiComponents.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
const Details = lazy(() => import('./components/[id]/details'))
// 1. إنشاء جذر تطبيق React
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. إزالة المُحمِّل الأولي قبل عرض التطبيق
const preloader = document.getElementById('preLoader');

if (preloader) {
  // يفضل استخدام setTimeout لإتاحة فرصة لـ React للرسم
  setTimeout(() => {
    // يمكن استخدام إزالة العنصر (remove) أو تغيير العرض (display: none)
    // استخدام transition في CSS لإزالة سلسة (مثل opacity: 0) هو الأفضل للمظهر الاحترافي
    preloader.style.opacity = '0';

    // إزالة العنصر بعد انتهاء الحركة (لحماية الذاكرة)
    setTimeout(() => {
      preloader.remove();
    }, 1500); // 500ms بعد انتهاء الحركة

  }, 1000); // تأخير بسيط لضمان تهيئة React
}


root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* هنا يتم تحميل مكونات التطبيق الفعلية */}
        <Route path='/' element={<App  />} />
        <Route path='/project/:id/details' element={<Suspense fallback={<LoaderScreen />}><Details /></Suspense>} />
      </Routes>
    </Router>

  </React.StrictMode>
);


