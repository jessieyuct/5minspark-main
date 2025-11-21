import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Wallet, Coins, X } from "lucide-react";
import { Badge } from "./ui/badge";

interface WalletConnectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  artistName: string;
  pledgeAmount?: number;
  tokenAmount?: number;
}

export function WalletConnectDialog({ 
  open, 
  onOpenChange, 
  artistName,
  pledgeAmount,
  tokenAmount 
}: WalletConnectDialogProps) {
  const walletProviders = [
    { name: "MetaMask", icon: "🦊" },
    { name: "WalletConnect", icon: "🔗" },
    { name: "Coinbase Wallet", icon: "💼" },
    { name: "Rainbow", icon: "🌈" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border-0 text-black max-w-2xl p-0 overflow-hidden">
        {/* Header with badges */}
        <div className="relative bg-white p-8 pb-6">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-black/60" />
          </button>
          
          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-purple-100 text-purple-700 border-0 text-xs tracking-wider">
              WALLET
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 border-0 text-xs tracking-wider">
              WEB3
            </Badge>
          </div>

          <DialogTitle className="text-black mb-3">
            Support {artistName}
          </DialogTitle>
          <DialogDescription className="text-black/60 text-base">
            Connect your wallet to fund this creative project and receive exclusive NFT rewards as a backer.
          </DialogDescription>
        </div>

        {pledgeAmount && tokenAmount && (
          <div className="bg-gray-50 px-8 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-black/60 text-sm tracking-wider">PLEDGE AMOUNT</span>
              <span className="text-black tracking-tight">${pledgeAmount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-black/60 text-sm tracking-wider">SPARK TOKENS</span>
              <div className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-black/60" />
                <span className="text-black tracking-tight">{tokenAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        <div className="p-8 space-y-4 bg-white">
          <div className="text-black/50 text-xs tracking-wider mb-2">SELECT WALLET PROVIDER</div>
          {walletProviders.map((provider) => (
            <Button
              key={provider.name}
              variant="outline"
              className="w-full justify-start gap-3 bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-black h-16"
              onClick={() => {
                // Mock wallet connection
                setTimeout(() => {
                  onOpenChange(false);
                }, 1000);
              }}
            >
              <span className="text-2xl">{provider.icon}</span>
              <span className="tracking-wide">{provider.name}</span>
            </Button>
          ))}
        </div>

        <div className="text-black/40 text-xs text-center px-8 pb-8">
          By connecting your wallet, you agree to our Terms of Service
        </div>
      </DialogContent>
    </Dialog>
  );
}