import { Link } from 'react-router-dom';
import { Zap, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-background to-muted-gray/10 border-t border-primary/20">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl text-foreground">CaseProIQ</span>
            </div>
            <p className="font-paragraph text-sm text-muted-gray-foreground leading-relaxed">
              Bridging the gap between academic education and real-world corporate practice through AI-powered case-solving.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4 text-foreground">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-sm text-muted-gray-foreground hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/assessment/easy" className="font-paragraph text-sm text-muted-gray-foreground hover:text-primary transition-colors duration-300">
                  Start Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4 text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-paragraph text-sm text-muted-gray-foreground">
                  contact@caseproiq.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="font-paragraph text-sm text-muted-gray-foreground">
                  www.caseproiq.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-muted-gray-foreground">
              © 2026 CaseProIQ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="font-paragraph text-xs text-muted-gray-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>
              <span className="font-paragraph text-xs text-muted-gray-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
