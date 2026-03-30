interface QuestionCounterProps {
  current: number;
  total: number;
}

export function QuestionCounter({ current, total }: QuestionCounterProps) {
  return (
    <span className="text-sm text-text-muted font-medium">
      Frage {current} von {total}
    </span>
  );
}
