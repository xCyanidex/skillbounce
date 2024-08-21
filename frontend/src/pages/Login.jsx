/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 h-full">
      <div className="space-y-2 text-center text-primary-foreground">
        <h1 className="text-3xl font-bold">Log In</h1>
        <p>
          Welcome back to the community skill exchange platform. Log in to
          continue.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-primary-foreground">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="jhon@example.com"
            required
            className="bg-primary-foreground text-primary"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-primary-foreground">
              Password
            </Label>
            <Link
              href="#"
              className="text-xs text-primary-foreground hover:underline"
          
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="bg-primary-foreground text-primary"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary-foreground text-primary hover:bg-white"
        >
          Log In
        </Button>
        <div className="space-y-2 text-center">
          <p className="text-primary-foreground">
            Don't have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage