// Quick test to verify all imports and types are working
import { projects, categories } from '../data/projects';
import type { Project } from '../types';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';

// Type check projects data
const testProject: Project = projects[0];
console.log('Project structure valid:', testProject.title);

// Verify categories
console.log('Categories:', categories);

// Export for verification
export const verifySetup = () => {
  return {
    projectsCount: projects.length,
    categoriesCount: categories.length,
    hasThemeHook: typeof useTheme === 'function',
    hasScrollSpyHook: typeof useScrollSpy === 'function',
  };
};
