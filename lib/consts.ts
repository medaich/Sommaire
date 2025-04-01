import { BrainCircuit, FileOutput, FileText, LucideIcon } from "lucide-react";

export interface Step {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface PricingTier {
  label: string;
  description: string;
  price: number;
  advanteges: string[];
  isRecommended: boolean;
}

export const steps: Step[] = [
  {
    title: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
    Icon: FileText,
  },
  {
    title: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly",
    Icon: BrainCircuit,
  },
  {
    title: "Get Summary",
    description: "Receive a clear, concise summary of your document",
    Icon: FileOutput,
  },
];

export const pricings: PricingTier[] = [
  {
    label: "Basic",
    description: "Perfect for occasional use",
    price: 9,
    advanteges: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    isRecommended: false,
  },
  {
    label: "Pro",
    description: "For professionals and teams",
    price: 19,
    advanteges: [
      "Unlimitec PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown export",
    ],
    isRecommended: true,
  },
];
