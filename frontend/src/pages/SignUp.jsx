import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="#" className="underline" prefetch={false}>
              Log in
            </Link>
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Skills & Interests</Label>
            <Textarea
              id="description"
              placeholder="Briefly describe your skills and interests"
              className="min-h-[100px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>
      </div>
  );
};

export default SignUpPage;
