import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, FileText, MessageSquare, Users } from 'lucide-react';

type RoomType = 'case-studies' | 'testimonials' | 'residents' | null;

interface Room {
  id: RoomType;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  content: React.ReactNode;
}

const OurResidents: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<RoomType>(null);

  const rooms: Room[] = [
    {
      id: 'case-studies',
      title: 'Case Studies',
      icon: FileText,
      description: 'In-depth analysis of resident success stories',
      color: 'bg-blog-accent',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Case Studies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="card-shadow hover:card-shadow-hover transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-lg">Digital Transformation Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  How Sarah transformed her traditional business into a digital-first company, 
                  increasing revenue by 300% in 18 months.
                </p>
              </CardContent>
            </Card>
            <Card className="card-shadow hover:card-shadow-hover transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-lg">Startup to Scale-up Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The complete journey of Alex's tech startup from ideation to Series A funding, 
                  including challenges overcome and lessons learned.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      icon: MessageSquare,
      description: 'Hear directly from our successful residents',
      color: 'bg-secondary',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Testimonials</h2>
          <div className="space-y-6">
            <Card className="card-shadow">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "The support and community here transformed my entire approach to business. 
                  I wouldn't be where I am today without this incredible environment."
                </blockquote>
                <footer className="text-muted-foreground">
                  — Maria Rodriguez, CEO of TechFlow Solutions
                </footer>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "From struggling freelancer to running a team of 20. The mentorship 
                  and resources provided here are unmatched."
                </blockquote>
                <footer className="text-muted-foreground">
                  — James Chen, Founder of Digital Dynamics
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'residents',
      title: 'From Our Residents',
      icon: Users,
      description: 'Stories and updates from our community',
      color: 'bg-accent',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">From Our Residents</h2>
          <div className="grid gap-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Monthly Spotlight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This month we're featuring innovative projects and achievements from our 
                  resident community. From AI startups to sustainable tech solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blog-accent text-blog-accent-foreground rounded-full text-sm">
                    AI Innovation
                  </span>
                  <span className="px-3 py-1 bg-blog-accent text-blog-accent-foreground rounded-full text-sm">
                    Sustainability
                  </span>
                  <span className="px-3 py-1 bg-blog-accent text-blog-accent-foreground rounded-full text-sm">
                    Community Impact
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Resident Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay updated with the latest news, events, and achievements from our 
                  vibrant resident community. Join us for monthly meetups and networking events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }
  ];

  const handleRoomClick = (roomId: RoomType) => {
    setActiveRoom(roomId);
  };

  const handleCloseRoom = () => {
    setActiveRoom(null);
  };

  return (
    <div className="relative w-full min-h-screen bg-background">
      {/* Main View */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          activeRoom 
            ? 'opacity-0 scale-95 pointer-events-none' 
            : 'opacity-100 scale-100'
        }`}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Residents</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover success stories, insights, and updates from our thriving community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rooms.map((room) => {
              const IconComponent = room.icon;
              return (
                <Card 
                  key={room.id}
                  className="card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer group hover:scale-105"
                  onClick={() => handleRoomClick(room.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${room.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{room.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{room.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Room Views */}
      {activeRoom && (
        <div 
          className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transition-all duration-500 ease-in-out ${
            activeRoom 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20" />
          <div className="relative z-10 h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                  {rooms.find(room => room.id === activeRoom) && (
                    <>
                      <div className={`w-12 h-12 ${rooms.find(room => room.id === activeRoom)?.color} rounded-full flex items-center justify-center`}>
                        {React.createElement(rooms.find(room => room.id === activeRoom)!.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <h1 className="text-2xl font-bold text-foreground">
                        {rooms.find(room => room.id === activeRoom)?.title}
                      </h1>
                    </>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleCloseRoom}
                  className="hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {rooms.find(room => room.id === activeRoom)?.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurResidents;