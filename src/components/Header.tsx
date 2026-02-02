import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-[100rem] mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-heading text-2xl text-foreground">CaseNexus</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            to="/" 
            className="font-paragraph text-sm text-muted-gray-foreground hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
