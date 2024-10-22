import { Metadata } from 'next'
import { Inter } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Zillow Clone",
  description: "A modern real estate platform built with Next.js and WordPress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}