import { Link } from "react-router-dom";
import community from "@/assets/community.jpg"

const CTASection = () => {
  return (
    <section className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Join Our Vibrant Community
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl">
            Connect with skilled individuals, learn new things, and build
            meaningful relationships.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Log In
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={community}
            width={500}
            height={500}
            alt="Join Our Community"
            className="max-w-full rounded-lg"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection