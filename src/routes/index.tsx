import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/perfectia/Navbar";
import { Hero } from "@/components/perfectia/Hero";
import { TechEcosystem } from "@/components/perfectia/TechEcosystem";
import { AppSection } from "@/components/perfectia/AppSection";
import { MedicosSection } from "@/components/perfectia/MedicosSection";
import { StatsFooter } from "@/components/perfectia/StatsFooter";

const title = "PerfectIA | Implantes mamarios inteligentes";
const description =
  "Implantes mamarios inteligentes con gel ultra soft, nano superficie y pasaporte digital. Tecnología, trazabilidad y garantía de por vida.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechEcosystem />
      <AppSection />
      <MedicosSection />
      <StatsFooter />
    </main>
  );
}
