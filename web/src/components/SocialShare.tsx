import { Share2, Twitter, Linkedin, Link2, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { GITHUB_URL, INSTALL_COMMAND } from '../data/questData';

export default function SocialShare() {
  const [copied, setCopied] = useState(false);
  const pageUrl = 'https://github.com/SeanZoR/claude-quest';
  const shareText = '⚔️ I just discovered Claude Quest - a gamification layer for Claude Code! Track achievements, level up, and master all features. Check it out:';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent('Claude Quest - Master Claude Code through adventure')}`,
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0f23] to-[#0a0a1a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <Share2 className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Spread the Word</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Share the Adventure</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Know someone who'd love to level up their Claude Code skills?
            Help them start their quest!
          </p>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ShareButton
            href={shareLinks.twitter}
            icon={<Twitter className="w-5 h-5" />}
            label="Share on X"
            className="bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 border-[#1DA1F2]/30"
          />
          <ShareButton
            href={shareLinks.linkedin}
            icon={<Linkedin className="w-5 h-5" />}
            label="Share on LinkedIn"
            className="bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 border-[#0A66C2]/30"
          />
          <ShareButton
            href={shareLinks.reddit}
            icon={<MessageCircle className="w-5 h-5" />}
            label="Share on Reddit"
            className="bg-[#FF4500]/20 hover:bg-[#FF4500]/30 border-[#FF4500]/30"
          />
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          >
            <Link2 className="w-5 h-5" />
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>

        {/* Quick share card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-amber-500/10 border border-white/10">
          <h4 className="text-lg font-bold text-white mb-4 text-center">Quick Install Link</h4>
          <div className="bg-[#0d0d1a] rounded-xl p-4 font-mono text-sm overflow-x-auto">
            <code className="text-green-400">{INSTALL_COMMAND}</code>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Share this command with anyone to help them start their quest!
          </p>
        </div>

        {/* Community links */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Join the community</p>
          <div className="flex justify-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-gray-300 hover:text-white"
            >
              ⭐ Star on GitHub
            </a>
            <a
              href={`${GITHUB_URL}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-gray-300 hover:text-white"
            >
              💡 Suggest Achievement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShareButton({
  href,
  icon,
  label,
  className,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${className}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
