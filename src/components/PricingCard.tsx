// src/components/PricingCard.tsx

export default function PricingCard() {
  return (
    <div className="border p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Basic Plan</h2>
      <p className="text-gray-700">₹99/month</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Subscribe
      </button>
    </div>
  );
}
