import { useState, useEffect } from 'react';
import { debounce } from '@/lib/utils';

export function useSectionVisibility(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const checkVisibility = () => {
      // Find all sections
      const sections = sectionIds.map(id => document.getElementById(id));
      
      // Check which section is most visible
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const sectionHeight = rect.height;
        const visiblePercentage = (visibleHeight / sectionHeight) * 100;
        
        // If section is at least 30% visible, set it as active
        if (visiblePercentage > 30) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    const debouncedCheckVisibility = debounce(checkVisibility, 100);

    window.addEventListener('scroll', debouncedCheckVisibility);
    window.addEventListener('resize', debouncedCheckVisibility);
    
    // Initial check
    checkVisibility();
    
    return () => {
      window.removeEventListener('scroll', debouncedCheckVisibility);
      window.removeEventListener('resize', debouncedCheckVisibility);
    };
  }, [sectionIds]);

  return activeSection;
}
