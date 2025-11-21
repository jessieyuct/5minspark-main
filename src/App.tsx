import { useState } from "react";
import { Header } from "./components/Header";
import { ArtistHero } from "./components/ArtistHero";
import { ArtistSection } from "./components/ArtistSection";
import { ArtistDetailPage } from "./components/ArtistDetailPage";
import { WalletConnectDialog } from "./components/WalletConnectDialog";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { AboutPage } from "./components/AboutPage";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

interface Artist {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  images?: string[];
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

interface Project {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  category: string;
}

const artists: Artist[] = [
  {
    id: "1",
    name: "Alice Wang",
    title: "Contemporary Ink Artist",
    description:
      "Blending traditional Chinese ink painting with contemporary abstraction, creating meditative works that explore the dialogue between Eastern and Western artistic traditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1659795955805-a3e60fad10c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYXJ0aXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYyMjcwODEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1659795955805-a3e60fad10c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYXJ0aXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYyMjcwODEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1761724795645-ae3a16af3c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmslMjBwYWludGluZyUyMGNhbGxpZ3JhcGh5fGVufDF8fHx8MTc2MjI3MDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759220513514-6fe8b6bcbbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NjIyNzA4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    goal: 5000,
    raised: 24750,
    backers: 156,
    bio: "Alice Wang is a contemporary artist based in Shanghai and New York. She received her MFA from the Central Academy of Fine Arts in Beijing and has exhibited internationally at galleries in Asia, Europe, and North America. Her work bridges millennia-old Chinese ink painting traditions with contemporary conceptual art practices, creating a unique visual language that speaks to global audiences while honoring her cultural heritage.",
    location: "Shanghai / New York",
    website: "https://alicewang.art",
    instagram: "https://instagram.com/alicewangart",
    portfolio: [
      {
        title: "Flowing Mountains",
        image:
          "https://images.unsplash.com/photo-1659795955805-a3e60fad10c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYXJ0aXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYyMjcwODEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2024",
      },
      {
        title: "Ink Meditation",
        image:
          "https://images.unsplash.com/photo-1761724795645-ae3a16af3c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmslMjBwYWludGluZyUyMGNhbGxpZ3JhcGh5fGVufDF8fHx8MTc2MjI3MDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2024",
      },
      {
        title: "Contemporary Dreams",
        image:
          "https://images.unsplash.com/photo-1759220513514-6fe8b6bcbbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NjIyNzA4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2024",
      },
      {
        title: "Ancient Whispers",
        image:
          "https://images.unsplash.com/photo-1610902954914-a74e5e35acef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0JTIwd29ya3xlbnwxfHx8fDE3NjIyNzA4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2023",
      },
    ],
    projectDetails: `New Series: "Digital Calligraphy"

I'm creating a groundbreaking series that merges traditional ink painting with blockchain technology. This collection will explore the intersection of ancient artistic practices and Web3, creating NFT artworks that honor tradition while embracing innovation.

What Your Support Funds:
— Traditional materials and studio space ($8,000)
— Digital art creation and minting costs ($6,000)
— Exhibition and documentation ($10,000)
— NFT platform development ($6,000)

Timeline:
The series will launch in Spring 2025 with a hybrid physical-digital exhibition in both Shanghai and New York. Each piece will exist as both a physical ink painting and a unique NFT, exploring new possibilities for art ownership and cultural preservation.

This project represents a bridge between two worlds—honoring the 2,000-year tradition of Chinese ink painting while pioneering new forms of digital artistic expression.`,
  },
  {
    id: "2",
    name: "Alfonso Lee",
    title: "Minimalist Sculptor",
    description:
      "Creating precise geometric sculptures that explore the relationship between negative space, light, and form through industrial materials and mathematical precision.",
    imageUrl:
      "https://images.unsplash.com/photo-1745130839558-55b2f78f1739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhc2lhbiUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjIyNzA4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    goal: 5000,
    raised: 3825,
    backers: 203,
    bio: "Alfonso Lee is a Singapore-based sculptor known for his minimalist approach to three-dimensional form. After studying architecture at the National University of Singapore and sculpture at the Royal College of Art in London, he has developed a distinctive practice that sits at the intersection of art, architecture, and mathematics. His works have been installed in public spaces across Asia and featured in prestigious collections worldwide.",
    location: "Singapore",
    website: "https://alfonsolee.studio",
    instagram: "https://instagram.com/alfonsolee",
    portfolio: [
      {
        title: "Void Structure",
        image:
          "https://images.unsplash.com/photo-1745130839558-55b2f78f1739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhc2lhbiUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjIyNzA4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2024",
      },
      {
        title: "Geometric Light",
        image:
          "https://images.unsplash.com/photo-1704121112762-86661f0ae5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGFydHxlbnwxfHx8fDE3NjIyNTU3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2024",
      },
      {
        title: "Minimal Forms",
        image:
          "https://images.unsplash.com/photo-1610902954914-a74e5e35acef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0JTIwd29ya3xlbnwxfHx8fDE3NjIyNzA4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2023",
      },
      {
        title: "Space Between",
        image:
          "https://images.unsplash.com/photo-1759220513514-6fe8b6bcbbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NjIyNzA4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        year: "2023",
      },
    ],
    projectDetails: `Public Installation: "Infinite Horizon"

I'm creating a large-scale public sculpture that uses precise geometric forms to create an ever-changing interplay of light, shadow, and negative space. This monumental work will be constructed from aerospace-grade aluminum and installed in Singapore's Marina Bay district.

Project Budget:
— Materials and fabrication ($25,000)
— Engineering and structural design ($8,000)
— Installation and site preparation ($10,000)
— Documentation and NFT creation ($2,000)

The Work:
Standing 15 feet tall, "Infinite Horizon" consists of intersecting geometric planes that frame views of the city skyline and waterfront. As viewers move around the sculpture, the forms align and separate, creating dynamic compositions that change with perspective and time of day.

Web3 Integration:
Backers will receive NFT certificates that include exclusive documentation of the fabrication process, augmented reality experiences of the sculpture, and perpetual recognition as founding patrons of this landmark public artwork.`,
  },
];

const projects: Project[] = [
  {
    id: "p1",
    title: "Urban Symphony",
    artist: "Maya Chen",
    description:
      "A multimedia installation that transforms city sounds into visual art, creating an immersive experience that bridges urban life and contemporary expression.",
    image:
      "https://images.unsplash.com/photo-1549887534-1541e9326642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYyMjcwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    goal: 5000,
    raised: 3700,
    category: "Installation",
  },
  {
    id: "p2",
    title: "Neon Dreams",
    artist: "Kenji Tanaka",
    description:
      "Exploring the intersection of traditional neon craftsmanship and digital art, creating luminous sculptures that pulse with contemporary energy.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYXJ0JTIwbGlnaHR8ZW58MXx8fHwxNzYyMjcwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    goal: 5000,
    raised: 4150,
    category: "Sculpture",
  },
  {
    id: "p3",
    title: "Digital Botanica",
    artist: "Sophia Rodriguez",
    description:
      "A generative art series that reimagines botanical forms through algorithmic processes, creating unique digital flora that evolves over time.",
    image:
      "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYyMjcwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    goal: 5000,
    raised: 3800,
    category: "Digital",
  },
  {
    id: "p4",
    title: "Concrete Poetry",
    artist: "Marcus Wright",
    description:
      "Large-scale murals that blend street art aesthetics with classical poetry, bringing literature to life on urban walls across major cities.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBtdXJhbHxlbnwxfHx8fDE3NjIyNzA4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    goal: 5000,
    raised: 4010,
    category: "Mural",
  },
  {
    id: "p5",
    title: "Ethereal Textiles",
    artist: "Laila Hassan",
    description:
      "Contemporary textile art that weaves together traditional techniques from across cultures, creating wearable art pieces and gallery installations.",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwYXJ0JTIwZmFicmljfGVufDF8fHx8MTc2MjI3MDgxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    goal: 5000,
    raised: 4120,
    category: "Textile",
  },
  {
    id: "p6",
    title: "Quantum Canvas",
    artist: "David Park",
    description:
      "Interactive paintings that respond to viewer movement and environmental data, creating unique visual experiences that blend physical and digital realms.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyMjcwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    goal: 5000,
    raised: 3960,
    category: "Interactive",
  },
];

export default function App() {
  const [selectedArtist, setSelectedArtist] =
    useState<Artist | null>(null);
  const [showWalletDialog, setShowWalletDialog] =
    useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [walletArtist, setWalletArtist] =
    useState<Artist | null>(null);

  const handleFund = (artist: Artist) => {
    setWalletArtist(artist);
    setShowWalletDialog(true);
  };

  const featuredArtist = artists[0];
  const secondArtist = artists[1];

  return (
    <div className="bg-black">
      <Header onAboutClick={() => setShowAboutPage(true)} />

      {/* Hero Section - Alice Wang with Carousel */}
      <ArtistHero
        artist={featuredArtist}
        onFund={() => handleFund(featuredArtist)}
      />

      {/* Second Artist - Alfonso Lee */}
      <ArtistSection
        artist={secondArtist}
        onViewDetails={() => setSelectedArtist(secondArtist)}
        onFund={() => handleFund(secondArtist)}
      />

      {/* Projects Grid */}
      <ProjectsGrid projects={projects} />

      {/* Footer */}
      <Footer />

      {/* About Page */}
      {showAboutPage && (
        <AboutPage onClose={() => setShowAboutPage(false)} />
      )}

      {/* Artist Detail Page */}
      {selectedArtist && (
        <ArtistDetailPage
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
        />
      )}

      {/* Wallet Connect Dialog */}
      {walletArtist && (
        <WalletConnectDialog
          open={showWalletDialog}
          onOpenChange={setShowWalletDialog}
          artistName={walletArtist.name}
        />
      )}

      <Toaster />
    </div>
  );
}