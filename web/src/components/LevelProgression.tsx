import { levels } from '../data/questData';

export default function LevelProgression() {
  const tiers = [
    { name: 'Beginner', levels: levels.slice(0, 4), color: 'text-emerald-400', gradientColor: 'from-emerald-400 to-emerald-500', icon: '🌱' },
    { name: 'Intermediate', levels: levels.slice(4, 8), color: 'text-sky-400', gradientColor: 'from-sky-400 to-sky-500', icon: '⚡' },
    { name: 'Advanced', levels: levels.slice(8, 12), color: 'text-orange-400', gradientColor: 'from-orange-400 to-orange-500', icon: '🔥' },
    { name: 'Master', levels: levels.slice(12, 15), color: 'text-amber-300', gradientColor: 'from-amber-300 to-yellow-400', icon: '👑' },
  ];

  return (
    <section id="levels" className="py-24 bg-[#0f0f23] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Path to Mastery</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From humble Wanderer to legendary Transcendent. Every achievement brings you closer to glory.
          </p>
        </div>

        {/* Tier progression */}
        <div className="space-y-8">
          {tiers.map((tier, tierIndex) => (
            <div key={tier.name} className="relative">
              {/* Tier header */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{tier.icon}</span>
                <h3 className={`text-xl font-bold ${tier.color}`}>
                  {tier.name} Tier
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Levels in tier */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-12">
                {tier.levels.map((level, levelIndex) => {
                  const nextLevel = tier.levels[levelIndex + 1] || levels[levels.indexOf(level) + 1];
                  const xpRange = nextLevel
                    ? `${level.xp_required.toLocaleString()} - ${(nextLevel.xp_required - 1).toLocaleString()}`
                    : `${level.xp_required.toLocaleString()}+`;

                  return (
                    <div
                      key={level.level}
                      className={`p-4 rounded-xl bg-gradient-to-br ${tier.gradientColor} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all hover:scale-105`}
                      style={{ backgroundColor: 'rgba(15, 15, 35, 0.8)' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-bold ${tier.color}`}>
                          Level {level.level}
                        </span>
                        <span className="text-xs text-gray-400">{xpRange} XP</span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{level.title}</h4>
                    </div>
                  );
                })}
              </div>

              {/* Connector to next tier */}
              {tierIndex < tiers.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* XP breakdown */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-transparent to-amber-500/10 border border-white/10">
          <h4 className="text-xl font-bold text-white mb-4 text-center">XP Breakdown by Rarity</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <RarityCard rarity="Common" xp="25-75" color="text-gray-400" count={42} />
            <RarityCard rarity="Uncommon" xp="75-125" color="text-green-400" count={40} />
            <RarityCard rarity="Rare" xp="150-200" color="text-blue-400" count={5} />
            <RarityCard rarity="Epic" xp="300-500" color="text-purple-400" count={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RarityCard({ rarity, xp, color, count }: { rarity: string; xp: string; color: string; count: number }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5">
      <div className={`text-lg font-bold ${color} mb-1`}>{rarity}</div>
      <div className="text-sm text-gray-400 mb-2">{xp} XP each</div>
      <div className="text-xs text-gray-500">{count} achievements</div>
    </div>
  );
}
