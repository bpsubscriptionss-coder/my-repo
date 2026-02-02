import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, LogOut, User, Mail, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useMember } from '@/integrations';
import { MemberProtectedRoute } from '@/components/ui/member-protected-route';
import { Image } from '@/components/ui/image';

function ProfilePageContent() {
  const navigate = useNavigate();
  const { member, actions } = useMember();

  const handleLogout = async () => {
    await actions.logout();
    navigate('/');
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-paragraph text-sm">Back to Home</span>
            </button>
            <h1 className="font-heading text-5xl text-foreground mb-4">
              Your Profile
            </h1>
            <p className="font-paragraph text-muted-gray-foreground">
              Manage your account information and preferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      {member?.profile?.photo?.url ? (
                        <Image src={member.profile.photo.url} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
                      ) : (
                        <User className="w-10 h-10 text-primary" />
                      )}
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl text-foreground mb-2">
                        {member?.profile?.nickname || member?.contact?.firstName || 'User'}
                      </h2>
                      <p className="font-paragraph text-muted-gray-foreground">
                        {member?.profile?.title || 'Member'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 border-t border-white/10 pt-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-paragraph text-xs text-muted-gray-foreground uppercase tracking-wider mb-1">
                        Email Address
                      </p>
                      <p className="font-paragraph text-foreground">
                        {member?.loginEmail || 'Not provided'}
                      </p>
                    </div>
                  </div>

                  {/* Member Status */}
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-electric-teal/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-electric-teal" />
                    </div>
                    <div>
                      <p className="font-paragraph text-xs text-muted-gray-foreground uppercase tracking-wider mb-1">
                        Status
                      </p>
                      <p className="font-paragraph text-foreground capitalize">
                        {member?.status || 'Active'}
                      </p>
                    </div>
                  </div>

                  {/* Member Since */}
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-paragraph text-xs text-muted-gray-foreground uppercase tracking-wider mb-1">
                        Member Since
                      </p>
                      <p className="font-paragraph text-foreground">
                        {formatDate(member?._createdDate)}
                      </p>
                    </div>
                  </div>

                  {/* Last Login */}
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <div>
                      <p className="font-paragraph text-xs text-muted-gray-foreground uppercase tracking-wider mb-1">
                        Last Login
                      </p>
                      <p className="font-paragraph text-foreground">
                        {formatDate(member?.lastLoginDate)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Actions Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-secondary/5 to-electric-teal/5 border-secondary/20 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-6">
                    Account Actions
                  </h3>
                  <div className="space-y-4">
                    <Button
                      onClick={() => navigate('/')}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-heading px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      Continue Assessment
                    </Button>
                    <Button
                      onClick={() => navigate('/category')}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-heading px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      Select Category
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleLogout}
                  className="w-full bg-destructive hover:bg-destructive/90 text-white font-heading px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </Card>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-electric-teal/10 to-neon-magenta/10 border-electric-teal/20 p-8">
              <h3 className="font-heading text-xl text-foreground mb-4">
                About Your Account
              </h3>
              <p className="font-paragraph text-muted-gray-foreground leading-relaxed">
                Your account is secure and your data is protected. You can update your profile information anytime. 
                Your assessment progress is automatically saved, allowing you to resume at any time.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ProfilePage() {
  return (
    <MemberProtectedRoute>
      <ProfilePageContent />
    </MemberProtectedRoute>
  );
}
