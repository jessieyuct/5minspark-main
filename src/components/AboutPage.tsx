import { X } from "lucide-react";
import { Button } from "./ui/button";

interface AboutPageProps {
  onClose: () => void;
}

export function AboutPage({ onClose }: AboutPageProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex items-center justify-between z-10">
        <div className="text-xs tracking-widest text-white/60">ABOUT</div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-white mb-8">About 5MINSPARK</h1>
          <p className="text-white/80 text-xl leading-relaxed">
            5MINSPARK is where creative ideas find their first believers.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Every creative project begins with a $5,000 validation goal — the moment where artists' vision meets evidence, where an idea proves it has both creative depth and collective momentum. It's the trust behind the spark.
            </p>
          </div>

          <div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Support and become part of the next big thing. From early previews to digital collectibles, every contribution unlocks a piece of the creative journey. Powered by Web3, each act of support is recorded on-chain — turning community belief into visible, lasting proof of trust.
            </p>
          </div>

          {/* Highlighted Section */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-12 my-16">
            <p className="text-white text-2xl leading-relaxed text-center">
              We're building a world where art grows through people beyond platforms.
            </p>
          </div>

          <div>
            <p className="text-white/70 text-lg leading-relaxed">
              Support what inspires you. Own a piece of the process.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center">
            <h3 className="text-white mb-4">Ready to Support Creative Innovation?</h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Discover projects seeking their first believers and become part of the creative journey.
            </p>
            <Button 
              onClick={onClose}
              className="bg-white text-black hover:bg-white/90 h-12 px-8"
            >
              Explore Projects
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-white text-4xl tracking-tight mb-2">$5,000</div>
            <div className="text-white/40 text-xs tracking-wider">VALIDATION GOAL</div>
          </div>
          <div className="text-center">
            <div className="text-white text-4xl tracking-tight mb-2">50,000</div>
            <div className="text-white/40 text-xs tracking-wider">SPARK TOKENS</div>
          </div>
          <div className="text-center">
            <div className="text-white text-4xl tracking-tight mb-2">100%</div>
            <div className="text-white/40 text-xs tracking-wider">ON-CHAIN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
