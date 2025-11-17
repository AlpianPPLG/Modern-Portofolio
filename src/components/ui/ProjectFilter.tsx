import { motion } from 'framer-motion';
import { Search, X, Filter } from 'lucide-react';
import { useState } from 'react';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  techStacks: string[];
  selectedTechStacks: string[];
  onTechStackChange: (techStack: string) => void;
  onClearFilters: () => void;
}

export const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  techStacks,
  selectedTechStacks,
  onTechStackChange,
  onClearFilters,
}: ProjectFilterProps) => {
  const [showTechFilter, setShowTechFilter] = useState(false);

  const hasActiveFilters =
    activeCategory !== 'All' ||
    searchTerm !== '' ||
    selectedTechStacks.length > 0;

  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-all"
          aria-label="Search projects"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === category
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-pressed={activeCategory === category}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Tech Stack Filter Toggle */}
      <div className="flex justify-center gap-3">
        <motion.button
          onClick={() => setShowTechFilter(!showTechFilter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
            showTechFilter || selectedTechStacks.length > 0
              ? 'bg-purple-500 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <Filter className="h-4 w-4" />
          <span>Tech Stack</span>
          {selectedTechStacks.length > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
              {selectedTechStacks.length}
            </span>
          )}
        </motion.button>

        {/* Clear All Filters */}
        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClearFilters}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 rounded-full font-medium bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg"
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </motion.button>
        )}
      </div>

      {/* Tech Stack Selection */}
      {showTechFilter && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Filter by Technology:
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((tech) => (
                <motion.button
                  key={tech}
                  onClick={() => onTechStackChange(tech)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedTechStacks.includes(tech)
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Active Filters Display */}
      {selectedTechStacks.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 self-center">
            Active filters:
          </span>
          {selectedTechStacks.map((tech) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
            >
              <span>{tech}</span>
              <button
                onClick={() => onTechStackChange(tech)}
                className="hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full p-0.5 transition-colors"
                aria-label={`Remove ${tech} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

