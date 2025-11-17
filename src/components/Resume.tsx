import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Award,
  Trophy,
  Printer
} from 'lucide-react';
import { TimelineItem } from './ui/TimelineItem';
import { SkillBar } from './ui/SkillBar';
import {
  experiences,
  education,
  skills,
  certifications,
  achievements,
  personalInfo,
} from '../data/resume';
import { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CvAndResume/Alpian CV And Resume.pdf';
    link.download = 'Alpian_CV_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const skillsByCategory = {
    Frontend: skills.filter(s => s.category === 'Frontend'),
    Backend: skills.filter(s => s.category === 'Backend'),
    Tools: skills.filter(s => s.category === 'Tools'),
    'Soft Skills': skills.filter(s => s.category === 'Soft Skills'),
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase"
          >
            Resume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            My Professional Journey
          </motion.p>
          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12 print:hidden"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            <Download className="h-5 w-5" />
            Download CV
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            <Printer className="h-5 w-5" />
            Print Resume
          </motion.button>
        </motion.div>

        {/* Personal Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-center mb-6 max-w-3xl mx-auto">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Phone className="h-4 w-4" />
              {personalInfo.phone}
            </span>
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Globe className="h-4 w-4" />
              Website
            </a>
          </div>
        </motion.div>

        {/* Experience & Education Timeline */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h3>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 print:hidden">
            <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'experience'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Experience ({experiences.length})
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'education'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Education ({education.length})
              </button>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'experience' ? (
              <div className="print:block">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    title={exp.title}
                    organization={exp.company}
                    location={exp.location}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    current={exp.current}
                    description={exp.description}
                    technologies={exp.technologies}
                    type="experience"
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="print:block">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.id}
                    title={edu.degree}
                    organization={edu.school}
                    location={edu.location}
                    startDate={edu.startDate}
                    endDate={edu.endDate}
                    current={edu.current}
                    description={edu.description}
                    type="education"
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              My proficiency across different technologies and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {category}
                </h4>
                {categorySkills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIdx * 0.05}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
                <Award className="h-6 w-6 text-blue-500" />
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    Issued: {new Date(cert.date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
                    >
                      View Certificate →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-500" />
                Achievements
              </h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {achievement.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

