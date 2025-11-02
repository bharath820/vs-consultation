import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Universities from "./pages/Universities";
import Coaching from "./pages/Coaching";
import Work from "./pages/Work";
import Migrate from "./pages/Migrate";
import NotFound from "./pages/NotFound";
import Visasevices from "./pages/VisaServices";
import Bookconsultation from './pages/Bookconsulant'
import Whyus from "./pages/Whyus"

import ContactUs from "./pages/ContactUs";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/universities/:country" element={<Universities />} />
          <Route path="/study/:country" element={<Universities />} />
          <Route path="/work/:country" element={<Work />} />
          <Route path="/migrate/:country" element={<Migrate />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/visaservices" element={<Visasevices />} />
          <Route path="/bookconsultation" element={<Bookconsultation />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path='/contactus' element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
