import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Wallet, Coins } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  goal: number;
  raised: number;
  backers: number;
}

interface ArtistSectionProps {
  artist: Artist;
  onViewDetails: () => void;
  onFund: () => void;
}

export function ArtistSection({ artist, onViewDetails, onFund }: ArtistSectionProps) {
  const percentage = Math.min((artist.raised / artist.goal) * 100, 100);
  const tokensRaised = Math.floor(artist.raised * 10); // 1 USD = 10 SPARK tokens

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black border-t border-white/10">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={artist.imageUrl}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-white/60 text-sm tracking-widest mb-4">{artist.title.toUpperCase()}</div>
            <h2 className="text-white mb-6">{artist.name}</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {artist.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <div className="text-white text-2xl tracking-tight mb-1">${(artist.raised / 1000).toFixed(1)}k</div>
                <div className="text-white/40 text-xs tracking-wider">USD RAISED</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Coins className="h-4 w-4 text-white/60" />
                  <span className="text-white text-2xl tracking-tight">{(tokensRaised / 1000).toFixed(0)}k</span>
                </div>
                <div className="text-white/40 text-xs tracking-wider">SPARK TOKENS</div>
              </div>
              <div>
                <div className="text-white text-2xl tracking-tight mb-1">{percentage.toFixed(0)}%</div>
                <div className="text-white/40 text-xs tracking-wider">FUNDED</div>
              </div>
              <div>
                <div className="text-white text-2xl tracking-tight mb-1">{artist.backers}</div>
                <div className="text-white/40 text-xs tracking-wider">BACKERS</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={onFund}
                size="lg"
                className="bg-white text-black hover:bg-white/90 h-14 px-10 gap-2"
              >
                <Wallet className="h-5 w-5" />
                CONNECT WALLET
              </Button>
              <Button
                onClick={onViewDetails}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-14 px-10"
              >
                VIEW PROJECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
