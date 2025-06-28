import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FundraiserSuccessPage from "@/components/FundraiserSuccessPage";
import { useAuth } from "@/contexts/AuthContext";

const FundraiserSuccess = () => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the user name from location state or use the authenticated user's name
  const userName = location.state?.userName || user?.name || "";
  
  useEffect(() => {
    // If user navigated here directly without creating a fundraiser, redirect to home
    if (!location.state?.fromFundraiserCreation) {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen">
      <Header />
      <FundraiserSuccessPage userName={userName} />
      <Footer />
    </div>
  );
};

export default FundraiserSuccess; 