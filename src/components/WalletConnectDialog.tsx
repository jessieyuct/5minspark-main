import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Wallet, Coins } from "lucide-react";

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
      <DialogContent className="bg-black border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Connect Your Wallet</DialogTitle>
          <DialogDescription className="text-white/60">
            Support {artistName} with cryptocurrency
          </DialogDescription>
        </DialogHeader>

        {pledgeAmount && tokenAmount && (
          <div className="bg-white/5 border border-white/10 p-6 rounded space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm tracking-wider">PLEDGE AMOUNT</span>
              <span className="text-white text-xl tracking-tight">${pledgeAmount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm tracking-wider">SPARK TOKENS</span>
              <div className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-white/60" />
                <span className="text-white text-xl tracking-tight">{tokenAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <div className="text-white/40 text-xs tracking-wider mb-3">SELECT WALLET PROVIDER</div>
          {walletProviders.map((provider) => (
            <Button
              key={provider.name}
              variant="outline"
              className="w-full justify-start gap-3 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white h-14"
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

        <div className="text-white/40 text-xs text-center pt-4">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy
        </div>
      </DialogContent>
    </Dialog>
  );
}
