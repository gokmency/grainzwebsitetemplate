import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from '@/components/ui/animated-gallery';

const Community = () => {
  // Community project images - Add your own images to public/portfolio/community/
  const COMMUNITY_IMAGES_1 = [
    "/portfolio/community/project-1.jpg",
    "/portfolio/community/project-2.jpg",
    "/portfolio/community/project-3.jpg",
    "/portfolio/community/project-4.jpg",
  ];

  const COMMUNITY_IMAGES_2 = [
    "/portfolio/community/project-5.jpg",
    "/portfolio/community/project-6.jpg",
    "/portfolio/community/project-7.jpg",
    "/portfolio/community/project-8.jpg",
  ];

  const COMMUNITY_IMAGES_3 = [
    "/portfolio/community/project-9.jpg",
    "/portfolio/community/project-10.jpg",
    "/portfolio/community/project-11.jpg",
    "/portfolio/community/project-12.jpg",
  ];

  // Project links - Update these with your actual community URLs
  const projectLinks = [
    "https://discord.gg/grainz", // Project 1 link
    "https://t.me/grainzlabs", // Project 2 link
    "https://x.com/grainzeth", // Project 3 link
    "#", // Project 4 link - replace with actual URL
    "#", // Project 5 link - replace with actual URL
    "#", // Project 6 link - replace with actual URL
    "#", // Project 7 link - replace with actual URL
    "#", // Project 8 link - replace with actual URL
    "#", // Project 9 link - replace with actual URL
    "#", // Project 10 link - replace with actual URL
    "#", // Project 11 link - replace with actual URL
    "#", // Project 12 link - replace with actual URL
  ];

  const handleImageClick = (index: number) => {
    const link = projectLinks[index];
    if (link && link !== "#") {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#C8102E] to-[#E53E3E]" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>
          <img 
            src="/grainz-logo.png" 
            alt="GRAINZ LABS Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>
      </header>

      {/* Hero Section */}
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-24 text-center">
        <ContainerAnimated>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6" style={{ letterSpacing: '4px' }}>
            COMMUNITY
          </h1>
        </ContainerAnimated>
        
        <ContainerAnimated>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            We build strong and active communities. We are with you with our community management 
            experience that brings thousands of people together in Web3, gaming and technology fields.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <Button 
            onClick={() => window.open('https://x.com/grainzeth', '_blank')}
            className="gap-2 bg-white text-[#C8102E] hover:bg-white/90 font-bold"
          >
            Get In Touch <ExternalLink className="w-4 h-4" />
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      {/* Animated Background Blur */}
      <div 
        className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, rgba(200,16,46,0.3), rgba(229,62,62,0.3), rgba(200,16,46,0.5))",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Gallery Section */}
      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {COMMUNITY_IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={imageUrl}
                  alt={`Community project ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {COMMUNITY_IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={imageUrl}
                  alt={`Community project ${index + 5}`}
                  onClick={() => handleImageClick(index + 4)}
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {COMMUNITY_IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={imageUrl}
                  alt={`Community project ${index + 9}`}
                  onClick={() => handleImageClick(index + 8)}
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>

      {/* Footer */}
      <footer className="relative z-50 px-6 md:px-8 py-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70 text-sm">
            © 2026 GRAINZ • Community Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Community;