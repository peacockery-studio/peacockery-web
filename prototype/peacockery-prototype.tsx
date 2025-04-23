import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Mock logo component
const Logo = () => (
  <div className="flex items-center gap-2">
    <motion.div
      className="w-10 h-10 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 rounded-full flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-amber-400 via-teal-400 to-indigo-500 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </motion.div>
    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
      Peacockery
    </span>
  </div>
)

// Navigation component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="py-4 px-6 md:px-10 flex justify-between items-center bg-navy-950 bg-opacity-90 backdrop-blur-sm fixed w-full z-50">
      <Logo />

      <div className="hidden md:flex space-x-8 text-gray-300">
        <motion.a
          href="#about"
          className="hover:text-teal-400 transition-colors"
          whileHover={{ y: -2 }}
        >
          About
        </motion.a>
        <motion.a
          href="#projects"
          className="hover:text-teal-400 transition-colors"
          whileHover={{ y: -2 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#stack"
          className="hover:text-teal-400 transition-colors"
          whileHover={{ y: -2 }}
        >
          Tech Stack
        </motion.a>
        <motion.a
          href="#team"
          className="hover:text-teal-400 transition-colors"
          whileHover={{ y: -2 }}
        >
          Team
        </motion.a>
        <motion.a
          href="#contact"
          className="hover:text-teal-400 transition-colors"
          whileHover={{ y: -2 }}
        >
          Contact
        </motion.a>
      </div>

      <motion.button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 right-0 bg-navy-900 p-6 rounded-lg shadow-xl w-48 flex flex-col space-y-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#about" className="text-gray-300 hover:text-teal-400">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400">
              Projects
            </a>
            <a href="#stack" className="text-gray-300 hover:text-teal-400">
              Tech Stack
            </a>
            <a href="#team" className="text-gray-300 hover:text-teal-400">
              Team
            </a>
            <a href="#contact" className="text-gray-300 hover:text-teal-400">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 pt-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-teal-500 to-purple-500"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.05,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
              Peacockery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Where technology meets artistic expression. We build beautiful, functional digital
            experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center mt-12"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium shadow-lg shadow-teal-500/20"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(20, 184, 166, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-navy-800 text-white font-medium border border-teal-500/30"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              borderColor: 'rgba(20, 184, 166, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Join Our Team
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="text-gray-400 flex flex-col items-center">
          <span className="mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Authentic Expression in Technology
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Peacockery draws inspiration from the boldness and authenticity of peacock displays in
              nature. We believe in creating digital experiences that are not just functional, but
              expressive, beautiful, and genuine.
            </motion.p>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Founded with a passion for both technological innovation and artistic expression, our
              studio specializes in developing applications that stand out through their thoughtful
              design, seamless functionality, and authentic character.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="#projects" className="text-teal-400 font-medium flex items-center group">
                <span>See our expression in action</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-teal-500/20 via-blue-600/20 to-purple-700/20 p-1">
              <div className="w-full h-full rounded-xl overflow-hidden bg-navy-800 flex items-center justify-center">
                <div className="w-3/4 aspect-square relative">
                  {/* Stylized peacock feather illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <motion.div
                        className="absolute w-3/4 h-3/4 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 opacity-20"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        style={{ top: '12.5%', left: '12.5%' }}
                      />

                      <motion.div
                        className="absolute w-1/2 h-1/2 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 opacity-30"
                        animate={{
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 5,
                          delay: 0.5,
                          repeat: Infinity,
                        }}
                        style={{ top: '25%', left: '25%' }}
                      />

                      <motion.div
                        className="absolute w-1/4 h-1/4 rounded-full bg-indigo-500 opacity-40"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 6,
                          delay: 1,
                          repeat: Infinity,
                        }}
                        style={{ top: '37.5%', left: '37.5%' }}
                      />

                      {/* Feather-like rays */}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-[40%] h-1 origin-left"
                          style={{
                            transform: `rotate(${i * 30}deg)`,
                            background: `linear-gradient(90deg, rgba(20, 184, 166, 0.7) 0%, rgba(79, 70, 229, 0.1) 100%)`,
                          }}
                          animate={{
                            scaleX: [1, 1.1, 1],
                            opacity: [0.7, 0.9, 0.7],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects section with cards
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Soundscape',
      description: 'An immersive audio experience app for meditation and focus.',
      tags: ['React Native', 'Expo', 'Audio API'],
      image: 'gradient-1',
    },
    {
      title: 'Palette',
      description: 'AI-powered color scheme generator for designers and artists.',
      tags: ['Next.js', 'Vercel AI SDK', 'ShadCN'],
      image: 'gradient-2',
    },
    {
      title: 'Flockwise',
      description: 'Team collaboration platform with real-time updates and voice chat.',
      tags: ['TypeScript', 'Convex', 'Pipecat'],
      image: 'gradient-3',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-navy-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            Our Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of our recent work across mobile and web platforms. Each project represents
            our commitment to both functionality and aesthetic excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-navy-800 rounded-xl overflow-hidden shadow-xl"
            >
              <div
                className={`h-48 ${
                  project.image === 'gradient-1'
                    ? 'bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600'
                    : project.image === 'gradient-2'
                      ? 'bg-gradient-to-br from-amber-400 via-purple-500 to-indigo-600'
                      : 'bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600'
                }`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-navy-700 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="mt-6 inline-block text-teal-400 font-medium flex items-center group"
                >
                  <span>View Project</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="px-6 py-3 rounded-lg border border-teal-500/30 text-white hover:bg-navy-800 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Tech Stack section
const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('web')

  const categories = [
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'Design & UI' },
    { id: 'infra', name: 'Infrastructure' },
    { id: 'ai', name: 'AI Tools' },
  ]

  const techItems = {
    web: [
      { name: 'Next.js', description: 'React framework' },
      { name: 'ShadCN/Tailwind', description: 'UI components & styling' },
      { name: 'Framer Motion', description: 'Animation library' },
      { name: 'TypeScript', description: 'Type-safe JavaScript' },
      { name: 'Zustand', description: 'State management' },
      { name: 'Clerk', description: 'Authentication' },
      { name: 'Supabase/Convex', description: 'Backend & database' },
    ],
    mobile: [
      { name: 'Expo', description: 'React Native framework' },
      { name: 'React Native', description: 'Cross-platform mobile' },
      { name: 'Nativewind', description: 'Tailwind for React Native' },
      { name: 'MMKV', description: 'Local storage' },
      { name: 'RevenueCat', description: 'Mobile payments' },
    ],
    design: [
      { name: 'Adobe Illustrator', description: 'Vector graphics' },
      { name: 'Photoshop', description: 'Image editing' },
      { name: 'Rive', description: 'Interactive animations' },
      { name: 'v0.dev', description: 'UI prototyping' },
      { name: 'Excalidraw', description: 'Wireframing' },
    ],
    infra: [
      { name: 'Vercel', description: 'Hosting & deployment' },
      { name: 'Render', description: 'Backend hosting' },
      { name: 'Bun', description: 'JavaScript runtime' },
      { name: 'Porkbun', description: 'Domain management' },
      { name: 'Sentry', description: 'Error tracking' },
    ],
    ai: [
      { name: 'Claude 3.7', description: 'AI assistant for development' },
      { name: 'Gemini 2.5', description: 'Code generation' },
      { name: 'Vercel AI SDK', description: 'AI integration' },
      { name: 'Hume AI', description: 'Emotional voice AI' },
      { name: 'ChatGPT-o3', description: 'Project management' },
    ],
  }

  return (
    <section id="stack" className="py-20 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            Our Technology Stack
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We carefully select the best tools for each project, balancing cutting-edge technology
            with proven reliability.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <div className="flex space-x-2 mx-auto">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white'
                    : 'bg-navy-800 text-gray-300 hover:bg-navy-700'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {techItems[activeCategory].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-navy-800 rounded-lg p-4 shadow-lg hover:shadow-teal-500/10 hover:bg-navy-700 transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium text-white mb-1">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-navy-800 rounded-xl p-6 md:p-8 border border-teal-500/10"
        >
          <h3 className="text-xl font-bold text-white mb-4">Why We Choose Our Tools</h3>
          <p className="text-gray-300 mb-6">
            Every technology we adopt is selected based on performance, developer experience, and
            how it contributes to creating exceptional user experiences. We&apos;re constantly
            evaluating new tools while maintaining expertise in our core stack.
          </p>
          <a href="#" className="text-teal-400 font-medium inline-flex items-center group">
            <span>See our complete tech stack</span>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Team section
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Founder & Lead Developer',
      image: 'gradient-1',
    },
    {
      name: 'Open Position',
      role: 'Frontend Developer',
      image: 'gradient-2',
    },
    {
      name: 'Open Position',
      role: 'UI/UX Designer',
      image: 'gradient-3',
    },
  ]

  return (
    <section id="team" className="py-20 bg-navy-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collective of passionate technologists, designers, and creative thinkers. We&apos;re
            always looking for exceptional talent to join us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-800 rounded-xl overflow-hidden shadow-xl text-center"
            >
              <div
                className={`h-48 ${
                  member.image === 'gradient-1'
                    ? 'bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600'
                    : member.image === 'gradient-2'
                      ? 'bg-gradient-to-br from-amber-400 via-purple-500 to-indigo-600'
                      : 'bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600'
                } flex items-center justify-center`}
              >
                {member.name.includes('Open') ? (
                  <div className="bg-navy-800 bg-opacity-20 backdrop-blur-sm rounded-full p-6">
                    <svg
                      className="w-12 h-12 text-white opacity-70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="bg-navy-800 bg-opacity-20 backdrop-blur-sm rounded-full p-6">
                    <svg
                      className="w-12 h-12 text-white opacity-70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                {member.name.includes('Open') ? (
                  <a
                    href="#contact"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white font-medium"
                  >
                    Apply Now
                  </a>
                ) : (
                  <a
                    href="#"
                    className="text-teal-400 font-medium flex items-center justify-center group"
                  >
                    <span>View Profile</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact section
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Want to join our team? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you&apos;re looking for a development partner, have
              questions about our work, or are interested in joining our team.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">hello@peacockery.dev</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Social</p>
                  <div className="flex space-x-4 mt-1">
                    <a href="#" className="text-gray-300 hover:text-teal-400">
                      Twitter
                    </a>
                    <a href="#" className="text-gray-300 hover:text-teal-400">
                      GitHub
                    </a>
                    <a href="#" className="text-gray-300 hover:text-teal-400">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy-800 rounded-xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="project">Project Inquiry</option>
                  <option value="job">Job Application</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium shadow-lg shadow-teal-500/20"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(20, 184, 166, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer component
const Footer = () => {
  return (
    <footer className="bg-navy-950 py-12 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 mb-6 max-w-md">
              At Peacockery, we blend technical excellence with artistic expression to create
              digital experiences that stand out in today&apos;s saturated digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-teal-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-teal-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-teal-400">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-teal-400">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Peacockery. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with passion in San Francisco</p>
        </div>
      </div>
    </footer>
  )
}

// Main App component
const PeacockeryPrototype = () => {
  return (
    <div className="bg-navy-950 text-white min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #0a101f;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .bg-navy-950 {
          background-color: #0a101f;
        }

        .bg-navy-900 {
          background-color: #0f172a;
        }

        .bg-navy-800 {
          background-color: #1e293b;
        }

        .bg-navy-700 {
          background-color: #334155;
        }

        .bg-navy-600 {
          background-color: #475569;
        }
      `}</style>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default PeacockeryPrototype
