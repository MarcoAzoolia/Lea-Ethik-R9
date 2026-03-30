import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface QuestionCardProps {
  question: string;
  topic: string;
}

export function QuestionCard({ question, topic }: QuestionCardProps) {
  return (
    <motion.div
      key={question}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card padding="lg">
        <span className="text-xs font-medium text-text-muted uppercase tracking-wide">{topic}</span>
        <p className="text-base font-semibold mt-2 leading-relaxed">{question}</p>
      </Card>
    </motion.div>
  );
}
