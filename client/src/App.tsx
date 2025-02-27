import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { NavigationBar } from "@/components/NavigationBar";
import HomePage from "@/pages/HomePage";
import SubscriptionPage from "@/pages/SubscriptionPage";
import SecondHandPage from "@/pages/SecondHandPage";
import ImpactPage from "@/pages/ImpactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/subscription" component={SubscriptionPage} />
        <Route path="/second-hand" component={SecondHandPage} />
        <Route path="/impact" component={ImpactPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;