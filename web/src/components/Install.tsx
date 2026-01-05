import { useState } from 'react';
import { Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { INSTALL_COMMAND, GITHUB_URL } from '../data/questData';

export default function Install() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, transparent 70%)`
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Start Your Quest</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            One command. That's all it takes to begin your adventure.
          </p>
        </div>

        {/* Terminal */}
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10">
          {/* Terminal header */}
          <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center text-sm text-gray-500 font-mono">
              Terminal — zsh
            </div>
          </div>

          {/* Terminal body */}
          <div className="bg-[#0d0d1a] p-6 font-mono">
            {/* Command line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-white break-all">
                {INSTALL_COMMAND}
              </span>
              <span className="cursor-blink text-white">█</span>
            </div>

            {/* Output animation */}
            <div className="text-gray-400 space-y-1 text-sm">
              <p className="text-green-400">Installing Claude Quest...</p>
              <p>📦 Creating ~/.claude/skills/claude-quest/</p>
              <p>📝 Setting up achievement tracker...</p>
              <p>✨ Installing /quest command...</p>
              <p className="text-amber-400">
                ⚔️ Quest installed! Restart Claude Code and run /quest
              </p>
            </div>
          </div>

          {/* Copy button */}
          <div className="bg-[#1a1a2e] px-4 py-3 flex justify-end">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                copied
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Command
                </>
              )}
            </button>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <InfoCard
            icon={<Terminal className="w-6 h-6" />}
            title="Restart Required"
            description="After installing, restart Claude Code for the /quest command to become available."
          />
          <InfoCard
            icon="📁"
            title="Local Storage"
            description="All data stays on your machine in ~/.claude/. Nothing is sent anywhere."
          />
          <InfoCard
            icon="🔄"
            title="Easy Updates"
            description="Re-run the install command anytime to get the latest achievements."
          />
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-all text-gray-300 hover:text-white"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-purple-400">{icon}</span>
        <h4 className="font-bold text-white">{title}</h4>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
