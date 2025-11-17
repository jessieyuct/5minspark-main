import { User } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-white/10 bg-black/80 backdrop-blur-xl z-50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-white tracking-tight">5MINSPARK</h1>
            <nav className="hidden md:flex gap-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">ARTISTS</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">HOW IT WORKS</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">ABOUT</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
