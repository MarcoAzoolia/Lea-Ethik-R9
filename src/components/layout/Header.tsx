import { ArrowLeft, Moon, Sun, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  isDark: boolean;
  onToggleDark: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export function Header({ title, onBack, isDark, onToggleDark, isMuted, onToggleMute }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border safe-top">
      <div className="flex items-center justify-between px-4 h-14 max-w-lg mx-auto">
        <div className="flex items-center gap-2 min-w-0">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 rounded-lg hover:bg-surface-alt text-text-muted hover:text-text transition-colors cursor-pointer"
              aria-label="Zurueck"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          {title && (
            <h1 className="text-base font-semibold truncate">{title}</h1>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleMute}
            className="p-2 rounded-lg hover:bg-surface-alt text-text-muted hover:text-text transition-colors cursor-pointer"
            aria-label={isMuted ? 'Ton einschalten' : 'Ton ausschalten'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button
            onClick={onToggleDark}
            className="p-2 rounded-lg hover:bg-surface-alt text-text-muted hover:text-text transition-colors cursor-pointer"
            aria-label={isDark ? 'Helles Design' : 'Dunkles Design'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
