import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaceVerificationGate from "@/components/FaceVerificationGate";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import ForumPage from "./pages/ForumPage";
import CreatePostPage from "./pages/CreatePostPage";
import ResourcesPage from "./pages/ResourcesPage";
import SOSPage from "./pages/SOSPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [verified, setVerified] = useState(false);

  if (!verified) {
    return <FaceVerificationGate onVerified={() => setVerified(true)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen gradient-mesh">
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/post" element={<CreatePostPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/sos" element={<SOSPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
