import { Routes, Route } from "react-router-dom";
// import SignUp from "./pages/auth/signup/signup";
// import Home from "./pages/Home";
// import GetStarted from "./pages/auth/Onboarding/GetStarted";
// import VerifyAccount from "./pages/auth/VerifyAccount/VerifyAccount";
// import VerifyEmail from "./pages/auth/VerifyAccount/VerifyEmail";
// import Signin from "./pages/auth/signin/signin";
// import IntroScreen from "./pages/Kyc/IntroScreen";
// import VerifyIdentity from "./pages/Kyc/VerifyIdentity";
// import UploadIdentity from "./pages/Kyc/UploadIdentity";
// import KycSuccess from "./pages/Kyc/KycSuccess";
// import SelectRole from "./pages/Role/SelectRole";
import LandingPage from "./pages/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ChooseRole from "./pages/auth/chooseRole/ChooseRole";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
