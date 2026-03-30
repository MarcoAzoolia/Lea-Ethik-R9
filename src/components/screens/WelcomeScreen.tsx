import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 bg-gradient-to-br from-primary/10 via-bg to-lb2/10">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
      >
        <BookOpen size={40} className="text-primary" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-extrabold text-text text-center"
      >
        Hallo Lea!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-text-muted text-center mt-3 max-w-xs text-base leading-relaxed"
      >
        Bereit fuer Ethik? Hier kannst du die drei Lernbereiche ueben und dich optimal auf die Pruefung vorbereiten.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Button size="lg" onClick={onStart}>
          Los geht's
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-xs text-text-muted mt-12"
      >
        Ethik R9 -- Mittelschule Bad Aibling
      </motion.p>
    </div>
  );
}
