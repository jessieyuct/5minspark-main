import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Share2, X } from "lucide-react";
import { Project } from "./ProjectCard";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const [pledgeAmount, setPledgeAmount] = useState("");
  const percentage = Math.min((project.raised / project.goal) * 100, 100);
  const isFullyFunded = percentage >= 100;

  const rewardTiers = [
    {
      amount: 10,
      title: "Early Supporter",
      description: "Get a thank you message and updates",
      backers: 127,
      delivery: "Immediate",
    },
    {
      amount: 25,
      title: "Bronze Backer",
      description: "Everything above + exclusive behind-the-scenes content",
      backers: 89,
      delivery: "December 2025",
    },
    {
      amount: 50,
      title: "Silver Supporter",
      description: "Everything above + early access to the product",
      backers: 56,
      delivery: "January 2026",
    },
    {
      amount: 100,
      title: "Gold Patron",
      description: "Everything above + your name in the credits",
      backers: 23,
      delivery: "January 2026",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-y-auto">
      <div className="min-h-screen">
        <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex items-center justify-between z-10">
          <div className="text-xs tracking-widest text-white/60">PROJECT DETAILS</div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="aspect-video overflow-hidden bg-zinc-900">
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <Badge className="mb-4 bg-white/10 backdrop-blur-md text-white border-white/20 text-xs tracking-wider">
                  {project.category.toUpperCase()}
                </Badge>
                <h1 className="text-white mb-4">{project.title}</h1>
                <p className="text-white/60 text-lg mb-8">{project.description}</p>

                <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                  <Avatar className="h-12 w-12 bg-white/10">
                    <AvatarFallback className="bg-white/10 text-white">{project.creator[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white tracking-wide">by {project.creator}</div>
                    <div className="text-white/40 text-sm tracking-wide">12 PROJECTS CREATED</div>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto text-white hover:bg-white/10">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="campaign" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b border-white/10 rounded-none p-0 h-auto">
                  <TabsTrigger 
                    value="campaign"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none text-white/60 data-[state=active]:text-white tracking-wider text-xs"
                  >
                    CAMPAIGN
                  </TabsTrigger>
                  <TabsTrigger 
                    value="updates"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none text-white/60 data-[state=active]:text-white tracking-wider text-xs"
                  >
                    UPDATES (3)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="backers"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none text-white/60 data-[state=active]:text-white tracking-wider text-xs"
                  >
                    BACKERS ({project.backers})
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="campaign" className="space-y-8 mt-12">
                  <div>
                    <h3 className="text-white mb-4">About this project</h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      This innovative project aims to revolutionize the way we approach {project.category.toLowerCase()}. 
                      With your support, we can bring this vision to life and create something truly remarkable.
                    </p>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      Our team has been working tirelessly to develop a solution that addresses key challenges in the industry. 
                      We've already completed the initial prototyping phase and are ready to scale with your backing.
                    </p>
                    <h4 className="text-white mb-3">What we'll do with your support</h4>
                    <ul className="space-y-3 text-white/60 mb-6">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-3">—</span>
                        Complete product development and testing
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-3">—</span>
                        Launch initial production run
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-3">—</span>
                        Build our marketing and distribution channels
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-3">—</span>
                        Deliver rewards to our amazing backers
                      </li>
                    </ul>
                    <h4 className="text-white mb-3">Risks and challenges</h4>
                    <p className="text-white/60 leading-relaxed">
                      As with any ambitious project, we face potential challenges in scaling production and meeting delivery timelines. 
                      However, our experienced team and established partnerships put us in a strong position to overcome these obstacles.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="updates" className="mt-12">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-white">Update #{4 - i}: Progress Report</h4>
                            <span className="text-white/40 text-sm tracking-wide">{i}D AGO</span>
                          </div>
                          <p className="text-white/60">
                            We're excited to share our latest progress on the project. Everything is moving according to schedule!
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="backers" className="mt-12">
                  <p className="text-white/40 tracking-wide">BACKERS LIST COMING SOON</p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 sticky top-24">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <div className="text-white text-4xl tracking-tight mb-2">
                      ${project.raised.toLocaleString()}
                    </div>
                    <div className="text-white/40 text-xs tracking-wider mb-6">
                      PLEDGED OF ${project.goal.toLocaleString()} GOAL
                    </div>
                    <Progress value={percentage} className="h-1 bg-white/10 mb-6" />
                  </div>

                  <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="text-white text-2xl tracking-tight">{project.backers}</div>
                      <div className="text-white/40 text-xs tracking-wider">BACKERS</div>
                    </div>
                    <div>
                      <div className="text-white text-2xl tracking-tight">
                        {isFullyFunded ? (
                          <span className="text-white">FUNDED</span>
                        ) : (
                          `${project.daysLeft}`
                        )}
                      </div>
                      <div className="text-white/40 text-xs tracking-wider">
                        {isFullyFunded ? "SUCCESSFULLY" : "DAYS TO GO"}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pledge-amount" className="text-white/60">Pledge Amount</Label>
                      <Input
                        id="pledge-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={pledgeAmount}
                        onChange={(e) => setPledgeAmount(e.target.value)}
                        className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                    <Button className="w-full bg-white text-black hover:bg-white/90 h-12">
                      BACK THIS PROJECT
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h4 className="text-white tracking-wide">Support tiers</h4>
                {rewardTiers.map((tier, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 hover:border-white/30 cursor-pointer transition-colors"
                    onClick={() => setPledgeAmount(tier.amount.toString())}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-white text-xl tracking-tight">${tier.amount}</div>
                        <Badge variant="secondary" className="bg-white/10 text-white/60 border-0 text-xs tracking-wider">
                          {tier.backers} BACKERS
                        </Badge>
                      </div>
                      <h5 className="text-white mb-2">{tier.title}</h5>
                      <p className="text-white/60 text-sm mb-3">{tier.description}</p>
                      <div className="text-white/40 text-xs tracking-wider">
                        EST. DELIVERY: {tier.delivery.toUpperCase()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
