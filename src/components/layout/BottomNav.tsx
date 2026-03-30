import { BookOpen, BarChart3 } from 'lucide-react';
import { clsx } from 'clsx';

interface BottomNavProps {
  activeTab: 'learn' | 'progress';
  onTabChange: (tab: 'learn' | 'progress') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur-md border-t border-border safe-bottom">
      <div className="flex max-w-lg mx-auto">
        <button
          onClick={() => onTabChange('learn')}
          className={clsx(
            'flex-1 flex flex-col items-center gap-0.5 py-2 pt-3 transition-colors cursor-pointer',
            activeTab === 'learn' ? 'text-primary' : 'text-text-muted',
          )}
        >
          <BookOpen size={20} />
          <span className="text-xs font-medium">Lernen</span>
        </button>
        <button
          onClick={() => onTabChange('progress')}
          className={clsx(
            'flex-1 flex flex-col items-center gap-0.5 py-2 pt-3 transition-colors cursor-pointer',
            activeTab === 'progress' ? 'text-primary' : 'text-text-muted',
          )}
        >
          <BarChart3 size={20} />
          <span className="text-xs font-medium">Fortschritt</span>
        </button>
      </div>
    </nav>
  );
}
