'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { TRADE_TRACKS } from '@/data/trades';
import { saveBadge, getBadges } from '@/data/badges';
import TradeIcon from '@/components/TradeIcon';
import SabiLogo from '@/components/SabiLogo';
import LanguageToggle from '@/components/LanguageToggle';
import AudioLessonPlayer from '@/components/AudioLessonPlayer';
import { BadgeRecord } from '@/types';
import confetti from 'canvas-confetti';
import { useAuth } from '@/context/AuthContext';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Sparkles,
  ShieldCheck,
  RotateCcw,
  Calculator,
  BookOpen
} from 'lucide-react';

interface TrackPlayerClientProps {
  slug: string;
}

export default function TrackPlayerClient({ slug }: TrackPlayerClientProps) {
  const router = useRouter();
  const track = TRADE_TRACKS.find((t) => t.slug === slug);
  if (!track) {
    notFound();
  }

  const [language, setLanguage] = useState<'en' | 'pidgin'>('pidgin');
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const { user } = useAuth();
  const [learnerName, setLearnerName] = useState(user ? user.name : '');
  const [earnedBadge, setEarnedBadge] = useState<BadgeRecord | null>(null);

  useEffect(() => {
    const badges = getBadges();
    const existing = badges.find((b) => b.trackSlug === slug);
    if (existing) {
      setEarnedBadge(existing);
      setLearnerName(existing.learnerName);
    } else if (user && !learnerName) {
      setLearnerName(user.name);
    }
  }, [slug, user]);

  const currentLesson = track.lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === track.lessons.length - 1;

  const markCurrentComplete = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id]);
    }
  };

  const handleNextLesson = () => {
    markCurrentComplete();
    if (isLastLesson) {
      setShowQuiz(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentLessonIndex(currentLessonIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    track.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });

    setQuizScore(score);
    setQuizSubmitted(true);

    if (score === track.quiz.length) {
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const handleClaimBadge = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = learnerName.trim() || 'Artisan Scholar';
    const rand = Math.floor(1000 + Math.random() * 9000);
    const badgeId = `${track.badgeCode}-2026-${rand}`;

    const newBadge: BadgeRecord = {
      id: badgeId,
      learnerName: finalName,
      trackTitle: track.title,
      trackSlug: track.slug,
      badgeCode: track.badgeCode,
      issuedAt: new Date().toISOString().split('T')[0],
      score: '100%',
      verifiedBy: 'SabiTrade Public Verification Registry',
      status: 'VERIFIED_ACTIVE',
      skills: track.lessons.map((l) => l.title.split(':')[0])
    };

    saveBadge(newBadge);
    setEarnedBadge(newBadge);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      {/* Top Breadcrumb & Language Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-hairline)] pb-4">
        <Link
          href="/app"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-ink)]"
        >
          <ArrowLeft className="size-4" />
          <span>All Trades</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[var(--color-muted)]">Read in:</span>
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>
      </div>

      {/* Track Title Banner */}
      <div className="mt-6 flex flex-col justify-between gap-4 rounded-3xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-hairline)] md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-shell)] text-[var(--color-accent)]">
            <TradeIcon name={track.iconName} className="size-6" />
          </span>
          <div>
            <span className="font-mono text-[11px] font-bold text-[var(--color-accent)]">
              {track.badgeCode} TRACK
            </span>
            <h1 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              {language === 'en' ? track.title : track.titlePidgin}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {slug === 'work-ready-basics' && (
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-shell)] px-3.5 py-2 text-xs font-bold text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] hover:bg-[var(--color-hairline)]"
            >
              <Calculator className="size-3.5 text-[var(--color-accent)]" />
              <span>Quote Tool</span>
            </Link>
          )}

          {earnedBadge && (
            <Link
              href={`/verify?id=${earnedBadge.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-success-soft)] px-4 py-2 text-xs font-bold text-[var(--color-success)] ring-1 ring-[var(--color-success)]/30 hover:scale-105 transition-transform"
            >
              <ShieldCheck className="size-4" />
              <span>Badge: {earnedBadge.id}</span>
            </Link>
          )}
        </div>
      </div>

      {/* Main Container: Sidebar + Content */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Left Sidebar: Lesson List */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-[var(--color-surface)] p-5 ring-1 ring-[var(--color-hairline)]">
            <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]">
                Lessons & Progress
              </span>
              <span className="font-mono text-xs font-semibold text-[var(--color-muted)]">
                {completedLessons.length}/{track.lessons.length} Done
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-shell)]">
              <div
                className="h-full bg-[var(--color-accent)] transition-all duration-300"
                style={{
                  width: `${(completedLessons.length / track.lessons.length) * 100}%`
                }}
              />
            </div>

            {/* Lesson Links */}
            <div className="mt-4 space-y-1.5">
              {track.lessons.map((lesson, idx) => {
                const isActive = !showQuiz && currentLessonIndex === idx;
                const isDone = completedLessons.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => {
                      setShowQuiz(false);
                      setCurrentLessonIndex(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex w-full items-start gap-3 rounded-2xl p-3 text-left text-xs transition-all ${
                      isActive
                        ? 'bg-[var(--color-ink)] text-[var(--color-paper)] font-bold shadow-sm'
                        : 'text-[var(--color-muted)] hover:bg-[var(--color-shell)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px]">
                      {isDone ? (
                        <CheckCircle2 className={`size-4 ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-success)]'}`} />
                      ) : (
                        idx + 1
                      )}
                    </span>
                    <span className="line-clamp-2 leading-snug">
                      {language === 'en' ? lesson.title : lesson.titlePidgin}
                    </span>
                  </button>
                );
              })}

              {/* Quiz Link */}
              <button
                type="button"
                onClick={() => {
                  setShowQuiz(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left text-xs transition-all ${
                  showQuiz
                    ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)] font-bold shadow-md'
                    : 'text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]'
                }`}
              >
                <Award className="size-4 shrink-0" />
                <span className="font-semibold">
                  Skill Check & Badge Minting
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Main Panel: Lesson or Quiz */}
        <div className="lg:col-span-8">
          {!showQuiz ? (
            /* LESSON VIEW */
            <div className="rounded-3xl bg-[var(--color-surface)] p-6 shadow-sm ring-1 ring-[var(--color-hairline)] md:p-8">
              {/* Lesson header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-hairline)] pb-4 text-xs text-[var(--color-muted)]">
                <span className="font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Module {currentLessonIndex + 1} of {track.lessons.length}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  <span>{currentLesson.readTime} reading time</span>
                </span>
              </div>

              {/* Lesson Title */}
              <h2 className="mt-5 font-display text-2xl font-extrabold text-[var(--color-ink)] md:text-3xl">
                {language === 'en' ? currentLesson.title : currentLesson.titlePidgin}
              </h2>

              {/* Hands-Free Audio Player */}
              <AudioLessonPlayer
                title={language === 'en' ? currentLesson.title : currentLesson.titlePidgin}
                content={language === 'en' ? currentLesson.contentEn : currentLesson.contentPidgin}
                language={language}
              />

              {/* Lesson Body */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-ink)] md:text-base">
                {(language === 'en' ? currentLesson.contentEn : currentLesson.contentPidgin)
                  .split('\n\n')
                  .map((paragraph, pIdx) => (
                    <p key={pIdx} className="whitespace-pre-line leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Lesson 2 Contextual CTA to Quote Tool */}
              {currentLesson.id === 'wrk-2' && (
                <div className="mt-6 flex flex-col justify-between gap-3 rounded-2xl bg-[var(--color-accent-soft)] p-4 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-accent)]">
                      Put this lesson into practice:
                    </h4>
                    <p className="text-xs text-[var(--color-ink)]">
                      Use our interactive Job Price Calculator to calculate your 10% contingency and send WhatsApp quotes to clients.
                    </p>
                  </div>
                  <Link
                    href="/quote"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-bold text-[var(--color-on-accent)] shadow-sm hover:scale-105 transition-transform"
                  >
                    <Calculator className="size-3.5" />
                    <span>Launch Calculator</span>
                  </Link>
                </div>
              )}

              {/* Key Takeaway box */}
              <div className="mt-8 rounded-2xl bg-[var(--color-shell)] p-5 ring-1 ring-[var(--color-hairline)]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  <Sparkles className="size-4" />
                  <span>Key Pro Takeaway</span>
                </div>
                <p className="mt-2 text-sm font-semibold italic text-[var(--color-ink)]">
                  &ldquo;{currentLesson.keyTakeaway}&rdquo;
                </p>
              </div>

              {/* Next / Previous Controls */}
              <div className="mt-10 flex items-center justify-between border-t border-[var(--color-hairline)] pt-6">
                <button
                  type="button"
                  onClick={handlePrevLesson}
                  disabled={currentLessonIndex === 0}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] disabled:opacity-30"
                >
                  <ArrowLeft className="size-4" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextLesson}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-[var(--color-accent-press)]"
                >
                  <span>{isLastLesson ? 'Proceed to Skill Check' : 'Next Lesson'}</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          ) : (
            /* QUIZ / SKILL CHECK VIEW */
            <div className="rounded-3xl bg-[var(--color-surface)] p-6 shadow-sm ring-1 ring-[var(--color-hairline)] md:p-8">
              <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                    Official Skill Verification
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-bold text-[var(--color-ink)]">
                    Skill Check: {track.title}
                  </h2>
                </div>
                <span className="rounded-full bg-[var(--color-shell)] px-3 py-1 font-mono text-xs font-bold text-[var(--color-ink)]">
                  {track.badgeCode}
                </span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)] md:text-sm">
                Score 100% to prove trade competence and earn your verifiable public credential.
              </p>

              {/* Questions List */}
              <div className="mt-8 space-y-8">
                {track.quiz.map((q, qIdx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl bg-[var(--color-paper)] p-5 ring-1 ring-[var(--color-hairline)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                          Question {qIdx + 1} of {track.quiz.length}
                        </p>
                        {quizSubmitted && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                              isCorrect
                                ? 'bg-[var(--color-success-soft)] text-[var(--color-success)]'
                                : 'bg-[var(--color-danger-soft)] text-[var(--color-danger)]'
                            }`}
                          >
                            {isCorrect ? 'Correct ✓' : 'Incorrect ✗'}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 text-sm font-bold text-[var(--color-ink)] md:text-base">
                        {q.question}
                      </h3>

                      <div className="mt-4 space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = userAnswer === optIdx;
                          let optStyle = "border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-accent)]";

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optStyle = "border-[var(--color-success)] bg-[var(--color-success-soft)] text-[var(--color-success)] font-semibold";
                            } else if (isOptionSelected) {
                              optStyle = "border-[var(--color-danger)] bg-[var(--color-danger-soft)] text-[var(--color-danger)]";
                            }
                          } else if (isOptionSelected) {
                            optStyle = "border-[var(--color-accent)] bg-[var(--color-accent-soft)] font-semibold text-[var(--color-ink)]";
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-xs transition-all md:text-sm ${optStyle}`}
                            >
                              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="leading-snug">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 rounded-xl bg-[var(--color-shell)] p-3 text-xs text-[var(--color-muted)]">
                          <span className="font-bold text-[var(--color-ink)]">Explanation: </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit or Result Action */}
              <div className="mt-10 border-t border-[var(--color-hairline)] pt-6">
                {!quizSubmitted ? (
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[var(--color-muted)]">
                      {Object.keys(selectedAnswers).length} of {track.quiz.length} answered
                    </p>
                    <button
                      type="button"
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(selectedAnswers).length < track.quiz.length}
                      className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md transition-transform hover:scale-105 active:scale-95 disabled:opacity-40 hover:bg-[var(--color-accent-press)]"
                    >
                      Submit Skill Check
                    </button>
                  </div>
                ) : (
                  <div>
                    {quizScore === track.quiz.length ? (
                      /* 100% SCORE CLAIM BADGE FORM WITH LOGO */
                      <div className="rounded-3xl bg-[var(--color-success-soft)] p-6 ring-1 ring-[var(--color-success)]/40 text-center">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[var(--color-success)] text-white shadow-lg">
                          <CheckCircle2 className="size-8" />
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-extrabold text-[var(--color-success)]">
                          100% Score — Mastered!
                        </h3>
                        <p className="mt-1 text-xs text-[var(--color-ink)]">
                          You answered every trade scenario correctly. Claim your official verified credential below:
                        </p>

                        {!earnedBadge ? (
                          <form onSubmit={handleClaimBadge} className="mx-auto mt-6 max-w-sm">
                            <label className="block text-left text-xs font-bold text-[var(--color-ink)]">
                              Full Name for Certificate:
                            </label>
                            <input
                              type="text"
                              required
                              value={learnerName}
                              onChange={(e) => setLearnerName(e.target.value)}
                              placeholder="e.g. Samuel Adekunle"
                              className="mt-1 w-full rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-2.5 text-xs font-semibold text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                            />
                            <button
                              type="submit"
                              className="mt-4 w-full rounded-full bg-[var(--color-accent)] py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md hover:scale-105 transition-transform hover:bg-[var(--color-accent-press)]"
                            >
                              Mint Verified Digital Badge
                            </button>
                          </form>
                        ) : (
                          <div className="mt-6 rounded-2xl bg-[var(--color-surface)] p-5 text-left ring-1 ring-[var(--color-hairline)] shadow-lg">
                            <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-3">
                              <div className="flex items-center gap-2">
                                <SabiLogo className="size-6" />
                                <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                                  {earnedBadge.id}
                                </span>
                              </div>
                              <span className="rounded-full bg-[var(--color-success-soft)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--color-success)] ring-1 ring-[var(--color-success)]/30">
                                OFFICIALLY VERIFIED
                              </span>
                            </div>
                            <h4 className="mt-3 text-base font-bold text-[var(--color-ink)]">
                              {earnedBadge.trackTitle}
                            </h4>
                            <p className="text-xs text-[var(--color-muted)]">
                              Issued to: {earnedBadge.learnerName}
                            </p>
                            <div className="mt-5 flex gap-2">
                              <Link
                                href={`/verify?id=${earnedBadge.id}`}
                                className="flex-1 rounded-full bg-[var(--color-accent)] py-2 text-center text-xs font-bold text-[var(--color-on-accent)] hover:bg-[var(--color-accent-press)]"
                              >
                                View Certificate & QR
                              </Link>
                              <Link
                                href="/gigs"
                                className="flex-1 rounded-full bg-[var(--color-shell)] py-2 text-center text-xs font-bold text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
                              >
                                Apply for Gigs
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* FAILED OR PARTIAL SCORE */
                      <div className="rounded-2xl bg-[var(--color-shell)] p-6 text-center ring-1 ring-[var(--color-hairline)]">
                        <p className="text-sm font-bold text-[var(--color-ink)]">
                          You scored {quizScore} out of {track.quiz.length}
                        </p>
                        <p className="mt-1 text-xs text-[var(--color-muted)]">
                          100% score is required to earn the verified badge. Review the lesson explanations and try again!
                        </p>
                        <button
                          type="button"
                          onClick={resetQuiz}
                          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-xs font-bold text-[var(--color-on-accent)] hover:bg-[var(--color-accent-press)]"
                        >
                          <RotateCcw className="size-3.5" />
                          <span>Retake Skill Check</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
