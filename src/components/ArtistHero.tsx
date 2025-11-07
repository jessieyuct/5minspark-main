import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Wallet, Coins } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ArtistHeroProps {
  artist: {
    name: string;
    title: string;
    description: string;
    images: string[];
    goal: number;
    raised: number;
  };
  onFund: () => void;
}

export function ArtistHero({ artist, onFund }: ArtistHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % artist.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [artist.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artist.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + artist.images.length) % artist.images.length);
  };

  const percentage = Math.min((artist.raised / artist.goal) * 100, 100);
  const tokensRaised = Math.floor(artist.raised * 10); // 1 USD = 10 SPARK tokens
  const tokensGoal = artist.goal * 10;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={artist.images[currentImageIndex]}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {artist.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1 transition-all ${
              index === currentImageIndex ? "w-12 bg-white" : "w-8 bg-white/40"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl">
            <div className="text-white/60 text-sm tracking-widest mb-4">{artist.title.toUpperCase()}</div>
            <h1 className="text-white mb-6">{artist.name}</h1>
            <p className="text-white/80 text-xl mb-8 leading-relaxed max-w-2xl">
              {artist.description}
            </p>
            
            {/* Funding Progress */}
            <div className="mb-8 space-y-4">
              <div className="h-1 w-full bg-white/20 overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white text-3xl tracking-tight">${(artist.raised / 1000).toFixed(1)}k</span>
                    <span className="text-white/40 text-sm tracking-wide">
                      OF ${(artist.goal / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="text-white/40 text-xs tracking-wider">USD RAISED</div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <Coins className="h-5 w-5 text-white/60" />
                    <span className="text-white text-3xl tracking-tight">{(tokensRaised / 1000).toFixed(0)}k</span>
                    <span className="text-white/40 text-sm tracking-wide">
                      OF {(tokensGoal / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="text-white/40 text-xs tracking-wider">SPARK TOKENS</div>
                </div>
              </div>
            </div>

            <Button
              onClick={onFund}
              size="lg"
              className="bg-white text-black hover:bg-white/90 h-14 px-12 gap-3"
            >
              <Wallet className="h-5 w-5" />
              CONNECT WALLET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
