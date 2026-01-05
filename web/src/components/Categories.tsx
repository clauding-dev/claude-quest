import { categories, getAchievementsByCategory } from '../data/questData';

export default function Categories() {
  return (
    <section className="py-24 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Eight Realms to Conquer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each category represents a different aspect of Claude Code mastery.
            Explore them all to become a true Champion.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categoryAchievements = getAchievementsByCategory(category.id);
            const totalXP = categoryAchievements.reduce((sum, a) => sum + a.xp, 0);

            return (
              <div
                key={category.id}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-opacity-50 transition-all hover:-translate-y-2"
                style={{ '--hover-color': category.color } as React.CSSProperties}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                  style={{ backgroundColor: category.color }}
                />

                {/* Content */}
                <div className="relative">
                  <div
                    className="category-icon mb-4"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-2xl font-bold text-white">{category.achievements}</span>
                      <span className="text-sm text-gray-500 ml-1">achievements</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-amber-400">{totalXP}</span>
                      <span className="text-sm text-gray-500 ml-1">XP</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-amber-500/10 border border-white/10">
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-white">90</div>
              <div className="text-sm text-gray-400">Achievements</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-amber-400">∞</div>
              <div className="text-sm text-gray-400">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
