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
  UserPlus,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FundraiserDetailsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [comment, setComment] = useState('');
  const [referralEmail, setReferralEmail] = useState('');

  // Exact data from your images
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
      
      {/* Exact Success Banner from Image 1 */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium text-sm">Congrats! Your fundraiser is now active and you can begin receiving contributions.</span>
          </div>
          <div className="text-xs opacity-90 mb-3">
            Share this URL with your family, friends and well-wishers: {fundraiserData.shareUrl}
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 text-rose-600 border-white hover:bg-white/10 text-xs h-6 px-2"
              onClick={handleCopyLink}
            >
              COPY LINK
            </Button>
          </div>
          <div className="flex justify-center gap-2">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="h-3 w-3 mr-1" />
              Spread the Word
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white text-xs h-8 px-3"
              onClick={() => handleShare('whatsapp')}
            >
              <Share2 className="h-3 w-3 mr-1" />
              Share on Whatsapp
            </Button>
          </div>
        </div>
      </div>

      {/* Status Alerts - Exact from Image 1 */}
      <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
        {fundraiserData.isUnderReview && (
          <div className="bg-blue-50 border border-blue-200 rounded p-3 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-blue-800 text-xs leading-relaxed">
                Your fundraiser has been marked as "Under Review" and can only accept INR contributions until the 
                verification process is complete. Complete verification within 7 days to avoid deactivation.
              </p>
              <Button variant="link" className="text-blue-600 p-0 h-auto font-medium text-xs">
                Complete verification now
              </Button>
            </div>
          </div>
        )}
        
        {fundraiserData.isUrgent && (
          <div className="bg-red-50 border border-red-200 rounded p-2 flex items-center gap-2">
            <AlertTriangle className="h-3 w-3 text-red-600" />
            <span className="text-red-800 text-xs font-medium">This fundraiser is in an urgent need of funds</span>
          </div>
        )}

        <div className="flex justify-end">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-rose-600 border-rose-300 hover:bg-rose-50 text-xs h-7 px-2"
            onClick={handleEditFundraiser}
          >
            <Edit className="h-3 w-3 mr-1" />
            Edit Fundraiser
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Exact Layout from Images */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Fundraiser Card - Exact from Image 1 */}
            <Card className="overflow-hidden">
              {/* Medical Background Image */}
              <div className="relative h-64 bg-gradient-to-br from-rose-100 via-pink-50 to-blue-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Medical Icons Pattern */}
                  <div className="grid grid-cols-6 gap-8 opacity-20">
                    <Heart className="h-8 w-8 text-rose-400" />
                    <div className="w-8 h-8 rounded-full bg-rose-300"></div>
                    <Users className="h-8 w-8 text-pink-400" />
                    <div className="w-6 h-8 bg-blue-300 rounded"></div>
                    <Heart className="h-6 w-6 text-rose-300" />
                    <div className="w-8 h-6 bg-pink-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-rose-200 rounded"></div>
                    <Heart className="h-6 w-6 text-pink-300" />
                    <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                    <Users className="h-8 w-8 text-rose-300" />
                    <div className="w-8 h-6 bg-pink-200 rounded"></div>
                    <Heart className="h-8 w-8 text-blue-300" />
                  </div>
                </div>
                {/* Contribute Button Overlay */}
                <div className="absolute bottom-4 right-4">
                  <Button 
                    onClick={handleContribute}
                    className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold px-6 py-2"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    CONTRIBUTE NOW
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h1 className="text-xl font-bold text-gray-900 mb-3">
                  {fundraiserData.title}
                </h1>

                {/* Progress Section - Exact Layout */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹ {fundraiserData.raised}
                    </span>
                    <span className="text-sm text-gray-600">
                      ₹ {fundraiserData.goal.toLocaleString()} goal
                    </span>
                  </div>
                  
                  <Progress value={progressPercentage} className="h-2 bg-gray-200">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </Progress>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-gray-900">{fundraiserData.supporters}</div>
                      <div className="text-gray-600">supporters</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{fundraiserData.daysLeft}</div>
                      <div className="text-gray-600">Days left</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">0%</div>
                      <div className="text-gray-600">funded</div>
                    </div>
                  </div>
                </div>

                {/* Share This Fundraiser */}
                <div className="mt-4 pt-3 border-t">
                  <div className="flex items-center justify-center gap-2 text-rose-600">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Share This Fundraiser</span>
                  </div>
                </div>

                {/* Tabs - About, Updates, Comments */}
                <div className="mt-4 border-b">
                  <div className="flex gap-6">
                    <button className="text-rose-600 border-b-2 border-rose-600 pb-2 text-sm font-medium">About</button>
                    <button className="text-gray-500 pb-2 text-sm">Updates</button>
                    <button className="text-gray-500 pb-2 text-sm">Comments</button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About the Fundraiser - Exact from Image 1 */}
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-3">About the Fundraiser</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="whitespace-pre-line text-gray-700 leading-relaxed text-sm">
                    {fundraiserData.story}
                  </p>
                </div>
                <Button variant="link" className="text-rose-600 p-0 mt-3 text-sm">
                  Read More
                </Button>

                {/* Action Buttons - Exact from Image */}
                <div className="flex gap-2 mt-4">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2"
                    onClick={() => handleShare('whatsapp')}
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2"
                    onClick={() => handleShare('facebook')}
                  >
                    <Facebook className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-sm px-4 py-2"
                    onClick={handleContribute}
                  >
                    Contribute Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Other Contribution Methods - Exact from Image 2 */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Contribution Methods</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">You can also pay via Paytm/UPI QR code</p>
                    <p className="text-xs text-gray-500">Scan the QR code from the app and make payment</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">For Paytm</h4>
                      <div className="w-24 h-24 bg-gray-100 rounded mx-auto flex items-center justify-center mb-2">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" 
                          alt="Paytm QR" 
                          className="w-12 h-12"
                        />
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs px-3 py-1"
                      >
                        Generate QR
                      </Button>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">For Other Apps</h4>
                      <div className="w-24 h-24 bg-gray-100 rounded mx-auto flex items-center justify-center mb-2">
                        <span className="text-gray-500 text-xs">UPI QR Code</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs px-3 py-1"
                      >
                        Generate QR
                      </Button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-2">Scan here to pay with Paytm Wallet</p>
                    <div className="flex justify-center gap-2 mb-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="w-6 h-6" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-3 rounded text-center">
                    <p className="text-xs font-medium">
                      Claim your contribution acknowledgement now! For payment done via <span className="underline">varak.org</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refer a Friend - Exact from Image 2 */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">REFER A FRIEND</h3>
                <p className="text-gray-600 text-xs mb-3">
                  In need of funds for medical treatment or know someone who might be? Share the 
                  details and Varak will get in touch with!
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter email address"
                    value={referralEmail}
                    onChange={(e) => setReferralEmail(e.target.value)}
                    className="flex-1 text-sm"
                  />
                  <Button 
                    onClick={handleReferFriend}
                    className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs px-3"
                  >
                    REFER A FRIEND
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Supporters' Comments - Exact from Image 2 */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Supporters' Comments</h3>
                
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Textarea 
                      placeholder="Write something to cheer Manish Singh!"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="flex-1 min-h-[60px] resize-none text-sm"
                    />
                    <Button 
                      onClick={handlePostComment}
                      className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white self-end text-sm px-4"
                    >
                      POST
                    </Button>
                  </div>
                  
                  <div className="text-center text-gray-500 py-6">
                    <MessageCircle className="h-10 w-10 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No comments yet. Be the first to show your support!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDEBAR - EXACT FROM YOUR IMAGE */}
          <div className="space-y-4">
            {/* Main Contribute Card - Exact from Image */}
            <Card>
              <CardContent className="p-4">
                {/* Contribute Button */}
                <Button 
                  onClick={handleContribute}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-3 text-sm mb-4 rounded-lg"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  CONTRIBUTE NOW
                </Button>
                
                {/* Spread the Word Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 mb-4 text-sm font-semibold py-2"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Spread the word
                </Button>

                {/* Amount Info */}
                <div className="text-center text-xs text-gray-600 mb-4">
                  Only 30% of the amount raised so far ₹0
                </div>

                <Separator className="my-4" />

                {/* Campaigner and Beneficiary Info - Exact Layout */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Campaigner</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        MS
                      </div>
                      <span className="font-medium text-sm">{fundraiserData.organizer}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Beneficiary</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        VS
                      </div>
                      <span className="font-medium text-sm">Vishal Singh</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Social Share Icons */}
                <div className="flex justify-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('whatsapp')}
                    className="text-green-600 border-green-300 hover:bg-green-50 p-2 rounded-full"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="text-blue-600 border-blue-300 hover:bg-blue-50 p-2 rounded-full"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="text-blue-400 border-blue-300 hover:bg-blue-50 p-2 rounded-full"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCopyLink}
                    className="text-gray-600 border-gray-300 hover:bg-gray-50 p-2 rounded-full"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support Card - Exact from Image */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm leading-tight">
                  Have a question? Check out our FAQs page or chat with us on Facebook or WhatsApp
                </h4>
                
                {/* Chat Buttons */}
                <div className="flex gap-2 mb-4">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white flex-1 text-xs font-bold py-2"
                  >
                    <Facebook className="h-3 w-3 mr-1" />
                    CHAT WITH US
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white flex-1 text-xs font-bold py-2"
                  >
                    <MessageCircle className="h-3 w-3 mr-1" />
                    CHAT WITH US
                  </Button>
                </div>

                {/* Report Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-gray-600 border-gray-300 text-xs py-2 mb-4"
                >
                  Report this fundraiser to Varak
                </Button>

                {/* Disclaimer Text */}
                <div className="text-xs text-gray-500 leading-relaxed">
                  <p className="mb-2">
                    <strong>Content Disclaimer:</strong> The views and opinions expressed on the campaign page are those of a campaigner or beneficiaries. They do not reflect the company's views and opinions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Fundraisers - Exact from Image 3 */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">People like you contributed to these Fundraisers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Help father and his 20-year old son, Father ...",
                organizer: "Manoj Singh",
                raised: "₹1,61,61,594",
                goal: "raised out of ₹2,00,00,000",
                daysLeft: "48 Days Left",
                supporters: "13933 Supporters"
              },
              {
                title: "My Baby Battles For His Life And We Need Your ...",
                organizer: "Mahendra Buddy Baba",
                raised: "₹44,54,532",
                goal: "raised out of ₹6,00,000",
                daysLeft: "15 Days Left",
                supporters: "3088 Supporters"
              },
              {
                title: "Support Ramavati Devi In Her Fight Against Lung...",
                organizer: "KARAN KUMAR SHARMA",
                raised: "₹33,52,800",
                goal: "raised out of ₹5,00,000",
                daysLeft: "38 Days Left",
                supporters: "2993 Supporters"
              },
              {
                title: "Support My Dad's Brain Injury Recovery - Urgent...",
                organizer: "Alok Ramayan Chaurasia",
                raised: "₹28,31,771",
                goal: "raised out of ₹30,00,000",
                daysLeft: "15 Days Left",
                supporters: "3570 Supporters"
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={`https://images.unsplash.com/photo-${1559757148 + index}000-5c350d0d3c56?auto=format&fit=crop&w=300&h=150`}
                  alt="Related fundraiser"
                  className="w-full h-32 object-cover"
                />
                <CardContent className="p-3">
                  <h3 className="font-semibold text-xs mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">by {item.organizer}</p>
                  <div className="text-xs font-bold text-gray-900 mb-1">
                    {item.raised}
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    {item.goal}
                  </div>
                  <Progress value={Math.random() * 100} className="h-1 mb-2" />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{item.daysLeft}</span>
                    <span>{item.supporters}</span>
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