import { Github, Heart, Sword } from 'lucide-react';
import { GITHUB_URL } from '../data/questData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0a0a1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center">
                <Sword className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Claude Quest</span>
            </a>
            <p className="text-gray-400 text-sm">
              Transform learning Claude Code into an RPG adventure. Earn achievements, level up, and become a Champion.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#levels" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Level System
                </a>
              </li>
              <li>
                <a href="#install" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Installation
                </a>
              </li>
            </ul>
          </div>

          {/* GitHub links */}
          <div>
            <h4 className="text-white font-bold mb-4">GitHub</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Repository
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Report Issue
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Contributing Guide
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by humans who believe learning should be fun
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} Claude Quest. MIT License.
          </p>
        </div>

        {/* ASCII art */}
        <div className="mt-8 text-center">
          <pre className="text-xs text-gray-600 font-mono inline-block">
{`╔═══════════════════════════════════════════════╗
║   "The journey of a thousand achievements     ║
║    begins with a single /quest."              ║
╚═══════════════════════════════════════════════╝`}
          </pre>
        </div>
      </div>
    </footer>
  );
}
