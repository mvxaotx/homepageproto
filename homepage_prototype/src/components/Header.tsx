import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-medium">
          Alex Johnson
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block"
        >
          Get In Touch
        </Button>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => {
            // Simple mobile menu toggle - in a real app you'd use state
            const nav = document.querySelector('.mobile-nav');
            nav?.classList.toggle('hidden');
          }}
        >
          ☰
        </Button>
      </div>

      {/* Mobile navigation */}
      <nav className="mobile-nav hidden md:hidden bg-background border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-left text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-left text-foreground/70 hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-left text-foreground/70 hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-left text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}