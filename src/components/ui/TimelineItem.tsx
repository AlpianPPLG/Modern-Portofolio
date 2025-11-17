import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string | string[];
  technologies?: string[];
  type?: 'experience' | 'education';
  index: number;
}

export const TimelineItem = ({
  title,
  organization,
  location,
  startDate,
  endDate,
  current,
  description,
  technologies,
  index,
}: TimelineItemProps) => {
  const formatDate = (date: string) => {
    if (!date) return 'Present';
    const [year, month] = date.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const descriptions = Array.isArray(description) ? description : [description];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 group-last:hidden" />

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className="absolute left-0 top-1 w-4 h-4 -ml-[7px] rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 group-hover:scale-125 transition-transform"
      />

      {/* Content Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
              <Briefcase className="h-4 w-4" />
              <span>{organization}</span>
            </div>
          </div>
          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
            current 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            {current ? '● Current' : '● Completed'}
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              {formatDate(startDate)} - {current ? 'Present' : formatDate(endDate)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          {descriptions.length === 1 ? (
            <p className="text-gray-700 dark:text-gray-300">{descriptions[0]}</p>
          ) : (
            <ul className="space-y-2">
              {descriptions.map((desc, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 flex gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

