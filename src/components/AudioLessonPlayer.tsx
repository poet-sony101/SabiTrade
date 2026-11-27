'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Gauge } from 'lucide-react';

interface AudioLessonPlayerProps {
  title: string;
  content: string;
  language: 'en' | 'pidgin';
}

export default function AudioLessonPlayer({ title, content, language }: AudioLessonPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState<number>(1);
  const [isSupported, setIsSupported] = useState(true);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Stop playback when lesson or language changes
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, [title, content, language]);

  const cleanTextForSpeech = (text: string) => {
    return text
      .replace(/[#*_`~-]/g, ' ')
      .replace(/₦(\d+[\d,]*)/g, '$1 Naira')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const startPlayback = () => {
    if (!synthRef.current) return;

    synthRef.current.cancel();

    const fullText = `${title}. ${cleanTextForSpeech(content)}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utteranceRef.current = utterance;

    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Pick best available voice (English or default)
    const voices = synthRef.current.getVoices();
    const enVoice =
      voices.find((v) => v.lang.startsWith('en-NG')) ||
      voices.find((v) => v.lang.startsWith('en-GB')) ||
      voices.find((v) => v.lang.startsWith('en'));
    if (enVoice) {
      utterance.voice = enVoice;
    }

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    synthRef.current.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const togglePlay = () => {
    if (!synthRef.current) return;

    if (!isPlaying) {
      startPlayback();
    } else if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    } else {
      synthRef.current.pause();
      setIsPaused(true);
    }
  };

  const restart = () => {
    startPlayback();
  };

  const changeRate = () => {
    const nextRate = rate === 1 ? 1.25 : rate === 1.25 ? 1.5 : 1;
    setRate(nextRate);
    if (isPlaying && !isPaused && utteranceRef.current && synthRef.current) {
      startPlayback();
    }
  };

  if (!isSupported) return null;

  return (
    <div
      aria-label="Hands-free audio lesson player"
      className="my-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--color-shell)]/80 p-3 ring-1 ring-[var(--color-hairline)] backdrop-blur-sm transition-all"
    >
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying && !isPaused ? 'Pause audio lesson' : 'Play audio lesson'}
          className="flex size-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-sm transition-transform hover:scale-105 active:scale-95 hover:bg-[var(--color-accent-press)]"
        >
          {isPlaying && !isPaused ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
        </button>

        <div>
          <div className="flex items-center gap-1.5">
            <Volume2 className="size-3.5 text-[var(--color-accent)]" />
            <span className="text-xs font-bold text-[var(--color-ink)]">
              {isPlaying && !isPaused ? 'Playing Audio Lesson' : isPaused ? 'Audio Paused' : 'Listen Hands-Free'}
            </span>
          </div>
          <p className="text-[10px] text-[var(--color-muted)]">
            {language === 'pidgin' ? 'Listen for Pidgin while your hand dey work' : 'Listen while your hands are busy on the job'}
          </p>
        </div>
      </div>

      {/* Animated Sound Wave bars when playing */}
      <div className="flex items-center gap-3">
        {isPlaying && !isPaused && (
          <div className="flex items-end gap-0.5 h-4">
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:-0.15s] h-4" />
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce h-2" />
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:-0.25s] h-3.5" />
          </div>
        )}

        {/* Speed button */}
        <button
          type="button"
          onClick={changeRate}
          title="Playback speed"
          className="rounded-full bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[11px] font-bold text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] hover:border-[var(--color-accent)]"
        >
          {rate}x
        </button>

        {/* Restart button */}
        {isPlaying && (
          <button
            type="button"
            onClick={restart}
            title="Restart from beginning"
            className="flex size-7 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-muted)] ring-1 ring-[var(--color-hairline)] hover:text-[var(--color-ink)]"
          >
            <RotateCcw className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
