import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Shield, Compass, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 bg-linear-to-br from-primary/10 via-bg to-lb2/10">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 relative"
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

      {/* Learning area preview chips */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="flex gap-2 mt-6"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lb1/10 text-lb1 text-xs font-medium">
          <Shield size={12} />
          Frieden
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lb2/10 text-lb2 text-xs font-medium">
          <Compass size={12} />
          Sinn
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lb3/10 text-lb3 text-xs font-medium">
          <Globe size={12} />
          Religionen
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mt-8"
      >
        <Button size="lg" onClick={onStart} className="flex items-center gap-2">
          Los geht's
          <ArrowRight size={18} />
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
