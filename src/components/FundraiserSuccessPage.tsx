import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Share2, Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FundraiserSuccessPageProps {
  userName?: string;
  onClose?: () => void;
}

const FundraiserSuccessPage = ({ 
  userName = "Manish Singh", 
  onClose 
}: FundraiserSuccessPageProps) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'bronze' | 'silver' | 'gold' | null>('bronze');
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [planToUpgrade, setPlanToUpgrade] = useState<'silver' | 'gold' | null>(null);

  const handleShareOnWhatsapp = () => {
    // Create share URL for WhatsApp
    const message = `I've just created a fundraiser. Please support my cause!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleUpgrade = (plan: 'bronze' | 'silver' | 'gold') => {
    if (plan === 'bronze') return; // Bronze is default, no upgrade needed
    setPlanToUpgrade(plan as 'silver' | 'gold');
    setIsUpgradeModalOpen(true);
  };

  const handleConfirmUpgrade = () => {
    if (!planToUpgrade) return;
    setSelectedPlan(planToUpgrade);
    setIsUpgradeModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      {/* Upgrade Confirmation Modal */}
      <Dialog open={isUpgradeModalOpen} onOpenChange={setIsUpgradeModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Activate your {planToUpgrade?.charAt(0).toUpperCase() + planToUpgrade?.slice(1)} plan?</DialogTitle>
            <DialogDescription className="text-gray-600">
              Get access to premium features and support.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setIsUpgradeModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmUpgrade}
              className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white"
            >
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md text-center p-6">
          <div className="mb-4">
            <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-rose-500" />
            </div>
          </div>
          <DialogTitle className="text-xl mb-2">{planToUpgrade?.charAt(0).toUpperCase() + planToUpgrade?.slice(1)} plan activated</DialogTitle>
          <DialogDescription className="text-gray-600 mb-6">
            Ketto will soon be supporting you in your fundraising journey. In the meantime, share your fundraiser with friends and family to kickstart your campaign!
          </DialogDescription>
          <Button 
            onClick={handleShareOnWhatsapp}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 flex items-center justify-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share on Whatsapp
          </Button>
          <p className="text-xs text-rose-500 mt-2">
            We've even created a ready-to-send message just for you!
          </p>
        </DialogContent>
      </Dialog>

      <div className="bg-gray-50 min-h-screen p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          {/* Success Banner */}
          <Card className="bg-white p-4 sm:p-5 rounded-xl shadow-md mb-6 overflow-hidden border-0">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-rose-500" />
                </div>
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-800">
                  Congratulations {userName}! Your fundraiser is live.
                </h2>
                <p className="text-gray-600 mt-1 text-sm">
                  Share your fundraiser today to get your first contribution and put your campaign on path to success.
                </p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Button 
                  onClick={handleShareOnWhatsapp}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 h-10 px-4"
                >
                  <Share2 className="h-4 w-4" />
                  Share on Whatsapp
                </Button>
                <p className="text-xs text-green-600 mt-1 text-center">
                  We've even created a ready-to-send message just for you!
                </p>
              </div>
            </div>
          </Card>

          {/* Upgrade Plans */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Upgrade for a more successful fundraising experience
            </h3>
            <p className="text-gray-600 mb-4">
              Choose a plan with a variety of value-added services and reach your fundraising goal faster
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Bronze Plan */}
              <Card className={`bg-white border-2 ${selectedPlan === 'bronze' ? 'border-rose-500' : 'border-gray-200'} rounded-xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow`}>
                <div className="absolute -top-6 -right-20 rotate-45 transform origin-top-left">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs py-2 px-12 font-medium">
                    Current Plan
                  </div>
                </div>
                <div className="p-5 pb-8">
                  <div className="h-[100px] mb-4">
                    <div className="mb-4">
                      <h4 className="text-rose-500 font-semibold">Bronze</h4>
                      <p className="text-sm text-gray-600">Standard plan</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">Free</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full h-10 border-rose-300 text-rose-500 hover:bg-rose-50 mb-4 flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handleUpgrade('bronze')}
                    disabled={selectedPlan === 'bronze'}
                  >
                    <span className="flex-1 text-center">{selectedPlan === 'bronze' ? 'Current Plan' : 'Upgrade to Bronze'}</span>
                    <span className="ml-1">→</span>
                  </Button>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-gray-700">What's included</h5>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Start Fundraiser for free</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Automated Story Creation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Standard Funds Withdrawal</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Android / iOS App</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Customer Support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5" />
                      <span className="text-sm text-gray-400">Customised promotional Banner</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5" />
                      <span className="text-sm text-gray-400">Fundraiser and Document Approval within 24 hr**</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5" />
                      <span className="text-sm text-gray-400">Campaign visibility from Ketto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5" />
                      <span className="text-sm text-gray-400">Ketto Cashback Offers</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Silver Plan */}
              <Card className={`bg-white border-2 ${selectedPlan === 'silver' ? 'border-rose-500' : 'border-gray-200'} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                <div className="p-5 pb-8">
                  <div className="h-[100px] mb-4">
                    <div className="mb-4">
                      <h4 className="text-gray-700 font-semibold">Silver</h4>
                      <p className="text-sm text-gray-600">Ideal for support on a budget</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">5%</span>
                      <span className="text-sm text-gray-500"> Platform Fees*</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full h-10 bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 mb-4 flex items-center justify-center gap-1"
                    onClick={() => handleUpgrade('silver')}
                  >
                    <span className="flex-1 text-center">Upgrade to Silver</span>
                    <span className="ml-1">→</span>
                  </Button>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-gray-700">What's included</h5>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Start Fundraiser for free</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Personalised Story Creation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Fast Funds Withdrawal</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Android / iOS App</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Dedicated Crowdfunding Expert</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Customised promotional Banner</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Fundraiser and Document Approval within 24 hr**</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5" />
                      <span className="text-sm text-gray-400">Campaign visibility from Ketto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5" />
                      <span className="text-sm text-gray-400">Ketto Cashback Offers</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Gold Plan */}
              <Card className={`bg-white border-2 ${selectedPlan === 'gold' ? 'border-rose-500' : 'border-gray-200'} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                <div className="bg-amber-100 text-center py-1 text-sm font-medium text-amber-800">
                  Helps you reach your goal fastest
                </div>
                <div className="p-5 pt-4 pb-8">
                  <div className="h-[100px] mb-4">
                    <div className="mb-4">
                      <h4 className="text-amber-600 font-semibold">Gold</h4>
                      <p className="text-sm text-gray-600">Ideal for urgent fundraising</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">7%</span>
                      <span className="text-sm text-gray-500"> Platform Fees*</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full h-10 bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 mb-4 flex items-center justify-center gap-1"
                    onClick={() => handleUpgrade('gold')}
                  >
                    <span className="flex-1 text-center">Upgrade to Gold</span>
                    <span className="ml-1">→</span>
                  </Button>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-gray-700">What's included</h5>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Start Fundraiser for free</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Personalised Story Creation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Fastest Funds Withdrawal</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Android / iOS App</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Dedicated Crowdfunding Expert</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Customised promotional Banner</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Fundraiser and Document Approval within 12 hr**</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Campaign visibility from Ketto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Ketto Cashback Offers</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Notes */}
          <div className="text-xs text-gray-500 space-y-1">
            <p className="font-medium">Notes:-</p>
            <p>** Timelines apply only if correct documents are uploaded.</p>
            <p>* Campaign promotional support from Ketto begins once 30% of the goal amount is raised.</p>
            <p>* Once a new plan is activated, it cannot be upgraded or downgraded.</p>
            <p>* Once a plan is activated, it cannot be cancelled.</p>
          </div>

          {/* Go to Home Button */}
          <div className="mt-8 text-center">
            <Button 
              onClick={handleGoHome}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundraiserSuccessPage;