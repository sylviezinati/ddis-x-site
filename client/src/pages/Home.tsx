import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import ProblemSolution from "@/components/ProblemSolution";
import ConcreteChange from "@/components/ConcreteChange";
import FourPillars from "@/components/FourPillars";
import HowItWorks from "@/components/HowItWorks";
import { SelectiveAccompaniment, DataValidation } from "@/components/SelectiveData";
import FAQ from "@/components/FAQ";
import FinalCTA, { Footer } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TargetAudience />
      <ProblemSolution />
      <ConcreteChange />
      <FourPillars />
      <HowItWorks />
      <SelectiveAccompaniment />
      <DataValidation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
