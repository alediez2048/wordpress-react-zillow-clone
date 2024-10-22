import type { Metadata } from "next";
import PropertyList from '../components/PropertyList';

export const metadata: Metadata = {
  title: "Zillow Clone",
  description: "A modern real estate platform built with Next.js and WordPress",
};

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">WordPress Posts Test</h1>
        <PropertyList />
      </main>
    </div>
  );
}