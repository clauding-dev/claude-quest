import { Trophy, BookOpen, Sparkles, TrendingUp, Gamepad2, Users } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: '90 Achievements',
    description: 'Discover and unlock achievements as you explore Claude Code\'s powerful features. Each achievement tells a story of mastery.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'XP & Leveling',
    description: 'Earn experience points for every achievement. Progress from Wanderer to Transcendent through 15 unique levels.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Guided Learning',
    description: 'Each achievement comes with tutorials showing exactly what to do. No more guessing how to use features.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Auto-Detection',
    description: 'Just use Claude Code normally. Achievements unlock automatically as you discover and use features.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: 'Beautiful Dashboard',
    description: 'Track your progress with an elegant ASCII dashboard. See your stats, recent unlocks, and next quests.',
    color: 'from-rose-500 to-red-600',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Share Your Journey',
    description: 'Share your achievements and progress with the community. Inspire others to start their own quest.',
    color: 'from-indigo-500 to-violet-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Claude Quest?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stop reading documentation. Start playing. Claude Quest transforms learning into an adventure you'll actually enjoy.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">How It Works</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="01"
              title="Install"
              description="One command installs Claude Quest. It sets up everything automatically in your ~/.claude directory."
            />
            <Step
              number="02"
              title="Use Claude Code"
              description="Just work normally. Create commands, set up hooks, configure MCP servers—do what you do."
            />
            <Step
              number="03"
              title="Unlock & Level Up"
              description="Achievements pop up as you discover features. Check /quest anytime to see your progress."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative">
      <div className="text-6xl font-black text-purple-500/20 absolute -top-4 -left-2">{number}</div>
      <div className="relative pt-8 pl-4">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
