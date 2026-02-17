import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DepthNavigator } from "@/components/DepthNavigator";
import { Schedule } from "@/components/Schedule";
import { Pricing } from "@/components/Pricing";
import { Conservation } from "@/components/Conservation";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="relative flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <Navbar />
          <Hero />
          <DepthNavigator />
          <Schedule />
          <Pricing />
          <Conservation />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
