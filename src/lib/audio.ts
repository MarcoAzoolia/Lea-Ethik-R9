type SoundName = 'correct' | 'wrong' | 'tick' | 'timerWarning' | 'achievement' | 'quizComplete';

const SOUND_FILES: Record<SoundName, string> = {
  correct: '/sounds/correct.mp3',
  wrong: '/sounds/wrong.mp3',
  tick: '/sounds/tick.mp3',
  timerWarning: '/sounds/timer-warning.mp3',
  achievement: '/sounds/achievement.mp3',
  quizComplete: '/sounds/quiz-complete.mp3',
};

let audioContext: AudioContext | null = null;
const bufferCache = new Map<string, AudioBuffer>();

function getContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

async function loadBuffer(url: string): Promise<AudioBuffer | null> {
  if (bufferCache.has(url)) return bufferCache.get(url)!;
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = await getContext().decodeAudioData(arrayBuffer);
    bufferCache.set(url, buffer);
    return buffer;
  } catch {
    return null;
  }
}

export async function preloadSounds(): Promise<void> {
  const ctx = getContext();
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }
  await Promise.all(Object.values(SOUND_FILES).map(loadBuffer));
}

export async function playSound(name: SoundName): Promise<void> {
  const ctx = getContext();
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }
  const url = SOUND_FILES[name];
  const buffer = await loadBuffer(url);
  if (!buffer) return;

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start(0);
}
