import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpeg"


const HeroSection = () => {
  return (
    <section className="container px-4 md:px-6 py-12 md:py-16 lg:py-10">
      <div className="grid md:grid-cols-2 gap-3 md:gap-6 lg:gap-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Exchange Skills, Build Community
          </h1>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl">
            Discover and offer a wide range of skills and services in your local
            community.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
         
            >
              Find Skills
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        
            >
              Offer Skills
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImg}
            width={500}
            height={500}
            alt="Community Skill Exchange"
            className="max-w-full rounded-lg"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection