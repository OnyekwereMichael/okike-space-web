import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/signup/signup";
import Home from "./pages/Home";
import GetStarted from "./pages/auth/Onboarding/GetStarted";
import VerifyAccount from "./pages/auth/VerifyAccount/VerifyAccount";
import VerifyEmail from "./pages/auth/VerifyAccount/VerifyEmail";
import Signin from "./pages/auth/signin/signin";
import IntroScreen from "./pages/Kyc/IntroScreen";
import VerifyIdentity from "./pages/Kyc/VerifyIdentity";
import UploadIdentity from "./pages/Kyc/UploadIdentity";
import KycSuccess from "./pages/Kyc/KycSuccess";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />

        {/* Onboarding  */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-account" element={<VerifyAccount />} />

        {/* Kyc */}
        <Route path="/kyc/intro" element={<IntroScreen />} />
        <Route path="/kyc/verify-identity" element={<VerifyIdentity />} />
        <Route path="/kyc/upload-identity" element={<UploadIdentity />} />
        <Route path="/kyc/success" element={<KycSuccess />} />
      </Routes>
    </>
  );
}

export default App;
