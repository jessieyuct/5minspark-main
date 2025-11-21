import { Instagram, Twitter, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-white mb-4">SPARK</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering artists through Web3 technology and community-driven funding.
            </p>
          </div>

          {/* Platform */}
          <div>
            <div className="text-white/40 text-xs tracking-wider mb-4">PLATFORM</div>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                Explore Projects
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                Start a Project
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                How It Works
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                NFT Rewards
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <div className="text-white/40 text-xs tracking-wider mb-4">COMMUNITY</div>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                About Us
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                Blog
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                Creator Guidelines
              </a>
              <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">
                Support
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-white/40 text-xs tracking-wider mb-4">CONNECT</div>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-xs">
            © 2025 SPARK. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
