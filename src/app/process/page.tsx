import type { Metadata } from "next";
import { contentRepository } from "@/lib/repositories";
import { ProcessContent } from "@/components/process/ProcessContent";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Six stages of crystal craftsmanship — consultation, design, production, engraving, inspection, and worldwide presentation.",
};

export default function ProcessPage() {
  const steps = contentRepository.getProcessSteps();
  return <ProcessContent steps={steps} />;
}
