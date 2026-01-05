import { Link } from 'react-router-dom';
import { Copy, ExternalLink, Sword, Trophy, Zap, Target } from 'lucide-react';
import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import {
  achievements,
  categories,
  getTotalXP,
  getAchievementsByCategory,
  getAchievementIndex,
  INSTALL_COMMAND,
  GITHUB_URL
} from '../data/questData';

export default function Dashboard() {
  const { progress, isLoaded } = useProgress();
  const [copied, setCopied] = useState(false);

  const totalPossibleXP = getTotalXP();
  const hasProgress = progress !== null;
  const unlockedCount = progress?.unlockedAchievements.length || 0;
  const userXP = progress?.totalXP || 0;

  const copyInstallCommand = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get next suggested achievements (unlocked ones removed)
  const getNextAchievements = () => {
    if (!progress) return achievements.slice(0, 3);
    return achievements
      .filter(a => !progress.unlockedAchievements.includes(a.id))
      .slice(0, 3);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a1a]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center">
              <Sword className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Claude Quest</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/achievements" className="text-gray-400 hover:text-white transition-colors">
              All Achievements
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero / XP Display */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {hasProgress ? 'Your Quest Progress' : 'Claude Quest'}
          </h1>

          {hasProgress ? (
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-5xl font-bold">
                <Zap className="w-12 h-12 text-amber-400" />
                <span className="text-amber-400">{userXP.toLocaleString()}</span>
                <span className="text-gray-500 text-2xl">/ {totalPossibleXP.toLocaleString()} XP</span>
              </div>
              <div className="flex items-center gap-6 text-gray-400">
                <span className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-purple-400" />
                  {unlockedCount} / {achievements.length} achievements
                </span>
                {progress.streak > 0 && (
                  <span className="flex items-center gap-2">
                    🔥 {progress.streak}-day streak
                  </span>
                )}
              </div>
              {/* Progress bar */}
              <div className="w-full max-w-md mt-4">
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-purple-500 rounded-full transition-all"
                    style={{ width: `${(userXP / totalPossibleXP) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {Math.round((userXP / totalPossibleXP) * 100)}% complete
                </p>
              </div>
            </div>
          ) : (
            <div className="text-gray-400 max-w-xl mx-auto">
              <p className="text-xl mb-6">
                Master Claude Code through adventure. Track achievements, earn XP, and become a Champion.
              </p>
              {/* Install prompt */}
              <div className="bg-[#1a1a2e] rounded-xl p-6 text-left">
                <p className="text-sm text-gray-500 mb-3">Quick install:</p>
                <div className="flex items-center gap-2 bg-black/50 rounded-lg p-3 font-mono text-sm">
                  <code className="flex-1 text-green-400 overflow-x-auto">{INSTALL_COMMAND}</code>
                  <button
                    onClick={copyInstallCommand}
                    className="p-2 hover:bg-white/10 rounded transition-colors flex-shrink-0"
                    title="Copy command"
                  >
                    <Copy className={`w-4 h-4 ${copied ? 'text-green-400' : 'text-gray-400'}`} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Then run <code className="text-amber-400">/quest</code> in Claude Code to see your dashboard
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Category Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(category => {
              const categoryAchievements = getAchievementsByCategory(category.id);
              const unlocked = hasProgress
                ? categoryAchievements.filter(a => progress.unlockedAchievements.includes(a.id)).length
                : 0;
              const total = categoryAchievements.length;
              const categoryXP = categoryAchievements.reduce((sum, a) => sum + a.xp, 0);
              const earnedXP = hasProgress
                ? categoryAchievements
                    .filter(a => progress.unlockedAchievements.includes(a.id))
                    .reduce((sum, a) => sum + a.xp, 0)
                : 0;

              return (
                <Link
                  key={category.id}
                  to={`/achievements?category=${category.id}`}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-bold">{category.name}</h3>
                      <p className="text-xs text-gray-500">{unlocked}/{total} unlocked</p>
                    </div>
                  </div>
                  {/* Mini progress bar */}
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(unlocked / total) * 100}%`,
                        backgroundColor: category.color
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-right">
                    {earnedXP}/{categoryXP} XP
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Next Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-amber-400" />
            {hasProgress ? 'Next Achievements' : 'Featured Achievements'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {getNextAchievements().map(achievement => {
              const index = getAchievementIndex(achievement.id);
              const category = categories.find(c => c.id === achievement.category);

              return (
                <Link
                  key={achievement.id}
                  to={`/achievement/${achievement.id}`}
                  className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-amber-500/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{category?.icon}</span>
                    <span className="text-amber-400 font-bold">+{achievement.xp} XP</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-amber-400 transition-colors">
                    {achievement.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="capitalize">{achievement.category}</span>
                    <code className="text-amber-400/70">/quest learn {index}</code>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-colors"
            >
              View All {achievements.length} Achievements
            </Link>
          </div>
        </section>

        {/* Recent Unlocks (if has progress) */}
        {hasProgress && progress.unlockedAchievements.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-purple-400" />
              Recent Unlocks
            </h2>
            <div className="flex flex-wrap gap-3">
              {progress.unlockedAchievements.slice(-10).reverse().map(id => {
                const achievement = achievements.find(a => a.id === id);
                if (!achievement) return null;
                const category = categories.find(c => c.id === achievement.category);

                return (
                  <Link
                    key={id}
                    to={`/achievement/${id}`}
                    className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors"
                  >
                    <span>{category?.icon}</span>
                    <span className="font-medium">{achievement.name}</span>
                    <span className="text-green-400 text-sm">+{achievement.xp}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CLI Integration Note */}
        <section className="bg-gradient-to-r from-purple-500/10 to-amber-500/10 rounded-xl p-6 border border-white/10">
          <h3 className="font-bold text-lg mb-2">Sync from CLI</h3>
          <p className="text-gray-400 text-sm mb-4">
            Run <code className="text-amber-400 bg-black/30 px-2 py-0.5 rounded">/quest web</code> in Claude Code to open this dashboard with your latest progress.
          </p>
          <p className="text-gray-500 text-xs">
            Your progress is stored locally and passed via URL - nothing is sent to any server.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12 py-8 text-center text-gray-500 text-sm">
        <p>
          Made with ❤️ by humans who believe learning should be fun
        </p>
        <p className="mt-2">
          <a href={GITHUB_URL} className="text-amber-400 hover:underline">GitHub</a>
          {' · '}
          <span>MIT License</span>
        </p>
      </footer>
    </div>
  );
}
