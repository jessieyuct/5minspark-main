import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { X, Coins } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { WalletConnectDialog } from "./WalletConnectDialog";

interface ProjectModalProps {
  project: {
    title: string;
    artist: string;
    description: string;
    image: string;
    goal: number;
    raised: number;
    category: string;
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [showWalletDialog, setShowWalletDialog] = useState(false);
  const tokensGoal = project.goal * 10;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl my-auto relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
          >
            <X className="h-5 w-5 text-black" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <div className="relative aspect-[4/5] md:aspect-auto">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="p-10 flex flex-col">
              <div className="flex-1">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-6">
                  <Badge className="bg-blue-100 text-blue-700 border-0 text-xs tracking-wider">
                    {project.category.toUpperCase()}
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 border-0 text-xs tracking-wider">
                    NFT
                  </Badge>
                </div>

                {/* Title */}
                <h2 className="text-black mb-3">{project.title}</h2>
                
                {/* Artist */}
                <div className="text-black/50 text-sm tracking-wider mb-6">
                  PROJECT BY {project.artist.toUpperCase()}
                </div>

                {/* Description */}
                <p className="text-black/70 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Funding Goal */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="text-black/50 text-xs tracking-wider mb-3">FUNDING GOAL</div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-black">${project.goal.toLocaleString()}</span>
                    <span className="text-black/40 text-sm">USD</span>
                  </div>
                  <div className="flex items-center gap-2 text-black/60">
                    <Coins className="h-4 w-4" />
                    <span className="text-sm">{tokensGoal.toLocaleString()} SPARK tokens</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                className="w-full bg-black text-white hover:bg-black/90 h-14"
                onClick={() => setShowWalletDialog(true)}
              >
                Connect Wallet
              </Button>
              
              <div className="text-center text-black/30 text-xs mt-4">
                Wallet connection required to fund this project
              </div>
            </div>
          </div>
        </div>
      </div>

      <WalletConnectDialog
        open={showWalletDialog}
        onOpenChange={setShowWalletDialog}
        artistName={project.artist}
      />
    </>
  );
}