import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Share2, 
  Users, 
  Calendar, 
  MessageCircle,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Edit,
  AlertTriangle,
  CheckCircle,
  UserPlus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FundraiserDetailsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [comment, setComment] = useState('');
  const [referralEmail, setReferralEmail] = useState('');

  // Dummy data for the fundraiser
  const fundraiserData = {
    title: "My Brother Is Suffering From Brain Tumor. We Need Your Help To Provide For His Treatment",
    organizer: "Manish Singh",
    raised: 0,
    goal: 5000000,
    supporters: 0,
    daysLeft: 46,
    story: `Hi,

My name is Manish Singh and I am raising funds for my brother, Vishal Singh who is suffering from Brain tumor and is undergoing treatment at Medanta Indore Super Speciality Hospital, Indore. The family has done all it can to collect the total amount required for the treatment but Rs.5000000 more is required to pay for all the medical expenses.

As the amount required is huge, I request you to kindly contribute towards the treatment and help during this time of need. Each contribution is important!

Please help us raise this amount by clicking on the contribute button and sharing this page with your friends and family.

We are grateful for your help and wishes.
Thank you.`,
    shareUrl: "https://www.varak.org/fundraiser/my-brother-is-suffering-from-brain-tumor-we-need-your-help-to-provide-for-his-treatment-1024475",
    isUnderReview: true,
    isUrgent: true
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const progressPercentage = (fundraiserData.raised / fundraiserData.goal) * 100;

  const handleContribute = () => {
    toast({
      title: "Contribution",
      description: "Contribution feature will be available soon!",
    });
  };

  const handleShare = (platform: string) => {
    const message = `Help ${fundraiserData.organizer} raise funds for ${fundraiserData.title}`;
    const url = fundraiserData.shareUrl;
    
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fundraiserData.shareUrl);
    toast({
      title: "Link Copied",
      description: "Fundraiser link copied to clipboard!",
    });
  };

  const handlePostComment = () => {
    if (!comment.trim()) {
      toast({
        title: "Error",
        description: "Please write a comment before posting.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Comment Posted",
      description: "Your comment has been posted successfully!",
    });
    setComment('');
  };

  const handleReferFriend = () => {
    if (!referralEmail.trim()) {
      toast({
        title: "Error",
        description: "Please enter an email address.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Referral Sent",
      description: `Referral sent to ${referralEmail}!`,
    });
    setReferralEmail('');
  };

  const handleEditFundraiser = () => {
    toast({
      title: "Edit Fundraiser",
      description: "Edit functionality will be available soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Success Banner */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Congrats! Your fundraiser is now active and you can begin receiving contributions.</span>
          </div>
          <div className="text-sm opacity-90">
            Share this URL with your family, friends and well-wishers: {fundraiserData.shareUrl}
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 text-rose-600 border-white hover:bg-white/10"
              onClick={handleCopyLink}
            >
              COPY LINK
            </Button>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Spread the Word
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => handleShare('whatsapp')}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share on Whatsapp
            </Button>
          </div>
        </div>
      </div>

      {/* Status Alerts */}
      <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
        {fundraiserData.isUnderReview && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-blue-800 text-sm">
                Your fundraiser has been marked as "Under Review" and can only accept INR contributions until the 
                verification process is complete. Complete verification within 7 days to avoid deactivation.
              </p>
              <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
                Complete verification now
              </Button>
            </div>
          </div>
        )}
        
        {fundraiserData.isUrgent && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <span className="text-red-800 text-sm font-medium">This fundraiser is in an urgent need of funds</span>
          </div>
        )}

        <div className="flex justify-end">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-rose-600 border-rose-300 hover:bg-rose-50"
            onClick={handleEditFundraiser}
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Fundraiser
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Fundraiser Header */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=400" 
                  alt="Medical fundraiser"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {fundraiserData.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      MS
                    </div>
                    <span className="text-gray-700">by {fundraiserData.organizer}</span>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(fundraiserData.raised)}
                    </span>
                    <span className="text-gray-600">
                      raised out of {formatCurrency(fundraiserData.goal)}
                    </span>
                  </div>
                  
                  <Progress value={progressPercentage} className="h-3 bg-gray-200">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </Progress>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{fundraiserData.supporters}</div>
                      <div className="text-sm text-gray-600">Supporters</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{fundraiserData.daysLeft}</div>
                      <div className="text-sm text-gray-600">Days left</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">0%</div>
                      <div className="text-sm text-gray-600">Funded</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About the Fundraiser */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Fundraiser</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {fundraiserData.story}
                  </p>
                </div>
                <Button variant="link" className="text-rose-600 p-0 mt-4">
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Other Contribution Methods */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Contribution Methods</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">You can also pay via Paytm/UPI QR code</p>
                    <p className="text-xs text-gray-500">Scan the QR code from the app and make payment</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-2">For Paytm</h4>
                      <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" 
                          alt="Paytm QR" 
                          className="w-16 h-16"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-2">For Other Apps</h4>
                      <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-gray-500 text-sm">UPI QR Code</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 mt-6">
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                      Generate QR
                    </Button>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                      Generate QR
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600 mb-2">Scan here to pay with Paytm Wallet</p>
                    <div className="flex justify-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="w-8 h-8" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="bg-teal-500 text-white p-3 rounded-lg text-center">
                    <p className="text-sm font-medium">
                      Claim your contribution acknowledgement now! For payment done via <span className="underline">varak.org</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refer a Friend */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">REFER A FRIEND</h3>
                <p className="text-gray-600 text-sm mb-4">
                  In need of funds for medical treatment or know someone who might be? Share the 
                  details and Ketto will get in touch with!
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter email address"
                    value={referralEmail}
                    onChange={(e) => setReferralEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleReferFriend}
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    REFER A FRIEND
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Supporters' Comments */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Supporters' Comments</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Textarea 
                      placeholder="Write something to cheer Manish Singh!"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="flex-1 min-h-[80px] resize-none"
                    />
                    <Button 
                      onClick={handlePostComment}
                      className="bg-teal-500 hover:bg-teal-600 text-white self-end"
                    >
                      POST
                    </Button>
                  </div>
                  
                  <div className="text-center text-gray-500 py-8">
                    <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No comments yet. Be the first to show your support!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contribute Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <Button 
                  onClick={handleContribute}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold py-3 text-lg mb-4"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  CONTRIBUTE NOW
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 mb-4"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Spread the word
                </Button>

                <div className="text-center text-sm text-gray-600 mb-4">
                  Only 30% of the amount raised so far ₹0
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Campaigner</span>
                    <span className="font-medium">{fundraiserData.organizer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Beneficiary</span>
                    <span className="font-medium">Vishal Singh</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('whatsapp')}
                    className="text-green-600 border-green-300 hover:bg-green-50"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="text-blue-600 border-blue-300 hover:bg-blue-50"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="text-blue-400 border-blue-300 hover:bg-blue-50"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCopyLink}
                    className="text-gray-600 border-gray-300 hover:bg-gray-50"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Have a question? Check out our FAQs page or chat with us on Facebook or WhatsApp</h4>
                
                <div className="flex gap-2 mb-4">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    CHAT WITH US
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white flex-1"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    CHAT WITH US
                  </Button>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-gray-600 border-gray-300"
                >
                  Report this fundraiser to Ketto
                </Button>

                <div className="mt-4 text-xs text-gray-500">
                  <p className="mb-2">Content Disclaimer: The views and opinions expressed on the campaign page are those of a campaigner or beneficiaries. They do not reflect the company's views and opinions.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Fundraisers */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">People like you contributed to these Fundraisers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={`https://images.unsplash.com/photo-${1559757148 + item}000-5c350d0d3c56?auto=format&fit=crop&w=300&h=200`}
                  alt="Related fundraiser"
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                    Help Support Medical Treatment for Patient {item}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">by Organizer {item}</p>
                  <div className="text-sm font-bold text-gray-900 mb-1">
                    ₹{(Math.random() * 500000).toFixed(0)} raised out of ₹{(Math.random() * 1000000 + 500000).toFixed(0)}
                  </div>
                  <Progress value={Math.random() * 100} className="h-1 mb-2" />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{Math.floor(Math.random() * 100)} Days Left</span>
                    <span>{Math.floor(Math.random() * 1000)} Supporters</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FundraiserDetailsPage;