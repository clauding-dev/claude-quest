import type { Achievement, AchievementsData } from './types';

// Embedded achievement data - update by running: npm run sync-data
import achievementsJson from '../../../skills/claude-quest/data/achievements.json';

const data = achievementsJson as AchievementsData;

export const achievements: Achievement[] = data.achievements;
export const totalAchievements = data.total_achievements;

/**
 * Select a random achievement that hasn't been posted yet
 * Returns null if all achievements have been posted (cycle complete)
 */
export function selectRandomUnposted(postedIds: string[]): Achievement | null {
  const postedSet = new Set(postedIds);
  const unposted = achievements.filter(a => !postedSet.has(a.id));

  if (unposted.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * unposted.length);
  return unposted[randomIndex];
}

/**
 * Get achievement by ID
 */
export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find(a => a.id === id);
}

/**
 * Get count of remaining unposted achievements
 */
export function getRemainingCount(postedIds: string[]): number {
  return totalAchievements - postedIds.length;
}
