import { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { achievements, categories, getCategoryInfo, rarityOrder } from '../data/questData';
import type { Category, Rarity } from '../data/questData';

type SortOption = 'category' | 'rarity' | 'xp' | 'name';

export default function Achievements() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedRarity, setSelectedRarity] = useState<Rarity | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('category');

  const filteredAchievements = achievements
    .filter((a) => {
      const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
                           a.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || a.category === selectedCategory;
      const matchesRarity = selectedRarity === 'all' || a.rarity === selectedRarity;
      return matchesSearch && matchesCategory && matchesRarity;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'category':
          return a.category.localeCompare(b.category);
        case 'rarity':
          return rarityOrder[b.rarity] - rarityOrder[a.rarity];
        case 'xp':
          return b.xp - a.xp;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <section id="achievements" className="py-24 bg-[#0f0f23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievement Gallery</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {achievements.length} achievements await. Can you catch them all?
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search achievements..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500"
            />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category | 'all')}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500/50"
              >
                <option value="all">All</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Rarity:</span>
              <select
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value as Rarity | 'all')}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500/50"
              >
                <option value="all">All</option>
                <option value="common">Common</option>
                <option value="uncommon">Uncommon</option>
                <option value="rare">Rare</option>
                <option value="epic">Epic</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500/50"
              >
                <option value="category">Category</option>
                <option value="rarity">Rarity</option>
                <option value="xp">XP (High → Low)</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-6">
          <span className="text-gray-400">
            Showing {filteredAchievements.length} of {achievements.length} achievements
          </span>
        </div>

        {/* Achievement grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAchievements.map((achievement) => {
            const categoryInfo = getCategoryInfo(achievement.category);
            return (
              <div
                key={achievement.id}
                className={`achievement-card p-4 rounded-xl rarity-${achievement.rarity}-bg`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{categoryInfo?.icon}</span>
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-medium rarity-${achievement.rarity}`}>
                      {achievement.rarity}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-1">{achievement.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 capitalize">{achievement.category}</span>
                  <span className="text-sm font-bold text-amber-400">+{achievement.xp} XP</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No achievements match your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
