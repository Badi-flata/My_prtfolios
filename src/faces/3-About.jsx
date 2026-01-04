import { motion } from 'framer-motion'
import { useLanguageStore, dataTitles } from '../components/setLanguage'
import pic1 from '../../public/assets/images/personal_pictures/picture_1.jpg'
import pic4 from '../../public/assets/images/personal_pictures/picture_4.jpg'

function About() {
    const { language } = useLanguageStore()
    const { about } = dataTitles
    const { title, name, desc, stack } = about[language]

    return (
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 mb-20 overflow-hidden relative" id="abuot">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-[Amiri] 
                mb-19  pb-3 h-[81px]
                 title text-center"
            >
                {title}
            </motion.h2>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
                {/* Images Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full md:w-1/2  max-w-[500px] h-[400px] flex items-center justify-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
                        className="absolute lg:opacity-70 hover:opacity-100 top-0 left-0 w-60 h-80 rounded-2xl overflow-hidden 
                        border-4  boerderOnpictur   shadow-2xl transform min-md:max-lg:-translate-y-22 -translate-x-5 -rotate-6 hover:shadow-accent/50 transition-all duration-300"
                    >
                        <img src={pic1} alt="Abadi Amado" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                        className="absolute lg:opacity-85 hover:opacity-100 bottom-0 right-0 w-60 h-80 rounded-2xl overflow-hidden
                         border-4 boerderOnpictur2 shadow-2xl transform rotate-6 translate-y-6  min-md:max-lg:translate-x-5 rtl:max-md:translate-x-3 
                         ltr:max-md:-translate-x-10 hover:shadow-accent/50 transition-all duration-300"
                    >
                        <img src={pic4} alt="Coding" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 text-center md:text-start rtl:md:text-right"
                >
                    <h3 className="text-3xl font-bold font-[Tajawal] text-secondary dark:text-light-100 mb-4">{name}</h3>
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-accent/20 border border-accent/20">
                        <span className="text-titleLight font-semibold text-[clamp(1rem,1.2vw,2rem)] ">{stack}</span>
                    </div>
                    <p className="text-lg text-textLight dark:text-accent leading-relaxed font-[Tajawal]">
                        {desc}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About
