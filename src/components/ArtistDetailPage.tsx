import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { X, Share2, Instagram, Globe, Wallet, Coins } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { WalletConnectDialog } from "./WalletConnectDialog";

interface Artist {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  goal: number;
  raised: number;
  backers: number;
  bio: string;
  location: string;
  website: string;
  instagram: string;
  portfolio: {
    title: string;
    image: string;
    year: string;
  }[];
  projectDetails: string;
}

interface ArtistDetailPageProps {
  artist: Artist;
  onClose: () => void;
}

export function ArtistDetailPage({ artist, onClose }: ArtistDetailPageProps) {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [showWalletDialog, setShowWalletDialog] = useState(false);
  const percentage = Math.min((artist.raised / artist.goal) * 100, 100);
  const tokensRaised = Math.floor(artist.raised * 10);
  const tokensGoal = artist.goal * 10;

  const nftTiers = [
    { 
      amount: 100, 
      title: "Collector Edition NFT", 
      description: "Limited edition NFT artwork + digital certificate of authenticity",
      supply: "50 available",
      backers: 23 
    },
    { 
      amount: 500, 
      title: "Patron Edition NFT", 
      description: "Rare NFT + exclusive behind-the-scenes content + artist commentary",
      supply: "20 available",
      backers: 8 
    },
    { 
      amount: 1000, 
      title: "Benefactor Edition NFT", 
      description: "Ultra-rare 1/1 NFT + physical print + virtual studio visit",
      supply: "10 available",
      backers: 3 
    },
    { 
      amount: 5000, 
      title: "Legacy Edition NFT", 
      description: "Exclusive 1/1 masterwork NFT + commissioned artwork + perpetual royalties",
      supply: "3 available",
      backers: 1 
    },
  ];

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex items-center justify-between z-10">
        <div className="text-xs tracking-widest text-white/60">ARTIST PROJECT</div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Large Portfolio Grid */}
            <div className="grid grid-cols-2 gap-4">
              {artist.portfolio.map((work, index) => (
                <div 
                  key={index} 
                  className={`group cursor-pointer overflow-hidden bg-zinc-900 ${
                    index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                  }`}
                >
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            {/* Artist Info */}
            <div className="space-y-8">
              <div>
                <div className="text-white/60 text-sm tracking-widest mb-3">{artist.title.toUpperCase()}</div>
                <h1 className="text-white mb-4">{artist.name}</h1>
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-white/60 text-sm tracking-wide">{artist.location}</div>
                  <a href={artist.website} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Globe className="h-5 w-5" />
                  </a>
                  <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {artist.description}
                </p>
              </div>

              <div>
                <h3 className="text-white mb-4">About the Artist</h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  {artist.bio}
                </p>
              </div>

              <div>
                <h3 className="text-white mb-4">Project Details</h3>
                <p className="text-white/60 leading-relaxed whitespace-pre-line">
                  {artist.projectDetails}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 sticky top-24">
              <CardContent className="p-8 space-y-6">
                <div>
                  <div className="text-white text-4xl tracking-tight mb-2">
                    ${artist.raised.toLocaleString()}
                  </div>
                  <div className="text-white/40 text-xs tracking-wider mb-4">
                    PLEDGED OF ${artist.goal.toLocaleString()} GOAL
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Coins className="h-5 w-5 text-white/60" />
                    <span className="text-white text-2xl tracking-tight">{tokensRaised.toLocaleString()}</span>
                    <span className="text-white/40 text-sm">/ {tokensGoal.toLocaleString()} SPARK</span>
                  </div>
                  
                  <Progress value={percentage} className="h-1 bg-white/10 mb-6" />
                </div>

                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-white text-2xl tracking-tight">{artist.backers}</div>
                    <div className="text-white/40 text-xs tracking-wider">BACKERS</div>
                  </div>
                  <div>
                    <div className="text-white text-2xl tracking-tight">{percentage.toFixed(0)}%</div>
                    <div className="text-white/40 text-xs tracking-wider">FUNDED</div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-white text-black hover:bg-white/90 h-12 gap-2"
                  onClick={() => setShowWalletDialog(true)}
                >
                  <Wallet className="h-5 w-5" />
                  CONNECT WALLET
                </Button>
              </CardContent>
            </Card>

            {/* NFT Tiers */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-white tracking-wide">NFT Rewards</h4>
                <Badge className="bg-white/10 text-white/80 border-white/20 text-xs">WEB3</Badge>
              </div>
              {nftTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`bg-white/5 border-white/10 hover:border-white/30 cursor-pointer transition-colors ${
                    selectedTier === tier.amount ? 'border-white/50' : ''
                  }`}
                  onClick={() => {
                    setSelectedTier(tier.amount);
                    setShowWalletDialog(true);
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="space-y-1">
                        <div className="text-white text-xl tracking-tight">${tier.amount}</div>
                        <div className="flex items-center gap-1 text-white/60">
                          <Coins className="h-3 w-3" />
                          <span className="text-sm">{(tier.amount * 10).toLocaleString()} SPARK</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white/60 border-0 text-xs tracking-wider">
                        {tier.supply.toUpperCase()}
                      </Badge>
                    </div>
                    <h5 className="text-white mb-2">{tier.title}</h5>
                    <p className="text-white/60 text-sm mb-3">{tier.description}</p>
                    <div className="text-white/40 text-xs tracking-wider">
                      {tier.backers} CLAIMED
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WalletConnectDialog
        open={showWalletDialog}
        onOpenChange={setShowWalletDialog}
        artistName={artist.name}
        pledgeAmount={selectedTier || undefined}
        tokenAmount={selectedTier ? selectedTier * 10 : undefined}
      />
    </div>
  );
}
