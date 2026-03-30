import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  subtitle?: string;
  visible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, subtitle, visible, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [visible, onClose, duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-surface border border-border rounded-xl px-5 py-3 shadow-lg max-w-[90vw]"
        >
          <p className="font-semibold text-text text-sm">{message}</p>
          {subtitle && <p className="text-text-muted text-xs mt-0.5">{subtitle}</p>}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
