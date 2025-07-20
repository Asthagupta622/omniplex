// app/pricing/page.tsx

import PricingCard from "@/components/PricingCard";

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Choose a Plan</h1>
      <PricingCard />
    </div>
  );
}
