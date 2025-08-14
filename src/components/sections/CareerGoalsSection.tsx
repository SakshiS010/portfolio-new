"use client";

import { motion, easeOut } from "framer-motion";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { Rocket, BarChartBig, Target } from "lucide-react";

const goals = [
  {
    icon: Rocket,
    title: "Short-Term Goal",
    description: "I aspire to refine my skills and broaden my expertise by gaining diverse experiences across multiple domains of technology and design, thereby enhancing my versatility and deepening my understanding in these dynamic fields. This journey will enable me to contribute more effectively and adapt to evolving industry demands."
  },
  {
    icon: BarChartBig,
    title: "Mid-Term Goal",
    description: "I aim to secure a rewarding job opportunity where I can genuinely enjoy my work, apply my skills in the required tech stack, explore and discover my true passion, and ultimately find a role that aligns perfectly with my interests and strengths within a supportive, collaborative environment."
  },
  {
    icon: Target,
    title: "Long-Term Goal",
    description: "I strive to attain a senior position in my chosen field and area of expertise, where I can lead with insight and dedication while fostering the growth and development of my juniors, helping them to thrive and excel in their careers."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: easeOut
    }
  })
};

const CareerGoalsSection = () => {
  return (
    <section id="goals" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Career Goals" subtitle="My Roadmap" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { goals.map((goal, index) => (
            <motion.div
              key={ index }
              className="h-full"
              variants={ cardVariants }
              initial="hidden"
              whileInView="visible"
              viewport={ { once: true, amount: 0.3 } }
              custom={ index }
            >
              <div className="p-8 h-full rounded-2xl bg-slate-900/50 border border-slate-700/80
                              hover:border-teal-500/80 hover:bg-slate-800/60
                              transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-5">
                  <goal.icon className="w-9 h-9 text-teal-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-100">{ goal.title }</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  { goal.description }
                </p>
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default CareerGoalsSection;
