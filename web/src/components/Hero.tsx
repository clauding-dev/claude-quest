import { Sparkles, Trophy, Target, ChevronDown } from 'lucide-react';
import { achievements, levels, categories, getTotalXP } from '../data/questData';

export default function Hero() {
  const totalXP = getTotalXP();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-8 pulse-glow">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-sm font-medium">Transform Learning into Adventure</span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6">
          <span className="gradient-text">Claude Quest</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Master Claude Code through adventure.
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Earn achievements. Level up. Become a Champion.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
          <StatCard icon={<Trophy className="w-6 h-6" />} value={achievements.length} label="Achievements" />
          <StatCard icon={<Target className="w-6 h-6" />} value={categories.length} label="Categories" />
          <StatCard icon={<Sparkles className="w-6 h-6" />} value={levels.length} label="Levels" />
          <StatCard icon={<span className="text-lg">⚡</span>} value={`${(totalXP / 1000).toFixed(1)}K`} label="Total XP" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#install"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
          >
            <span className="flex items-center gap-2">
              Start Your Quest
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-purple-200 font-bold text-lg transition-all hover:bg-purple-500/10"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: number | string; label: string }) {
  return (
    <div className="p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-colors">
      <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
