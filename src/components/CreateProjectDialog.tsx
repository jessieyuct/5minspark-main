import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner@2.0.3";

interface CreateProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateProjectDialog({ open, onOpenChange }: CreateProjectDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    goal: "",
    duration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Project created successfully!");
    onOpenChange(false);
    setFormData({
      title: "",
      description: "",
      category: "",
      goal: "",
      duration: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-black border-white/10">
        <DialogHeader>
          <DialogTitle className="text-white">Start a New Project</DialogTitle>
          <DialogDescription className="text-white/60">
            Create a crowdfunding campaign to bring your idea to life.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-8 mt-6">
          <div className="space-y-3">
            <Label htmlFor="title" className="text-white/60">Project Title</Label>
            <Input
              id="title"
              placeholder="Give your project a catchy title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="description" className="text-white/60">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your project and what makes it special..."
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="category" className="text-white/60">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
                required
              >
                <SelectTrigger id="category" className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10">
                  <SelectItem value="Technology" className="text-white focus:bg-white/10">Technology</SelectItem>
                  <SelectItem value="Design" className="text-white focus:bg-white/10">Design</SelectItem>
                  <SelectItem value="Food" className="text-white focus:bg-white/10">Food</SelectItem>
                  <SelectItem value="Fashion" className="text-white focus:bg-white/10">Fashion</SelectItem>
                  <SelectItem value="Gaming" className="text-white focus:bg-white/10">Gaming</SelectItem>
                  <SelectItem value="Green" className="text-white focus:bg-white/10">Green</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="goal" className="text-white/60">Funding Goal ($)</Label>
              <Input
                id="goal"
                type="number"
                placeholder="10000"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="duration" className="text-white/60">Campaign Duration (days)</Label>
            <Input
              id="duration"
              type="number"
              placeholder="30"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="image" className="text-white/60">Project Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              className="bg-white/5 border-white/10 text-white file:text-white/60"
            />
            <p className="text-xs text-white/40 tracking-wide">
              UPLOAD A COMPELLING IMAGE THAT REPRESENTS YOUR PROJECT
            </p>
          </div>

          <div className="flex gap-4 pt-6">
            <Button type="submit" className="flex-1 bg-white text-black hover:bg-white/90 h-12">
              CREATE PROJECT
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-white/10 text-white hover:bg-white/10"
            >
              CANCEL
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
