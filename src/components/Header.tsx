import { Link } from 'react-router-dom';
import { Zap, LogOut } from 'lucide-react';
import { useMember } from '@/integrations';

export default function Header() {
  const { isAuthenticated, member, actions } = useMember();

  const handleLogout = async () => {
    await actions.logout();
  };

  return (
    <header className="w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-[100rem] mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-heading text-2xl text-foreground">CaseProIQ</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            to="/" 
            className="font-paragraph text-sm text-muted-gray-foreground hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link 
                to="/profile" 
                className="font-paragraph text-sm text-muted-gray-foreground hover:text-primary transition-colors duration-300"
              >
                {member?.profile?.nickname || 'Profile'}
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 font-paragraph text-sm text-muted-gray-foreground hover:text-destructive transition-colors duration-300"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={actions.login}
              className="font-paragraph text-sm text-primary hover:text-primary/80 transition-colors duration-300"
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
