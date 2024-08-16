import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import logo from "@/assets/logo.png"

const Header = () => {

    
  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <img
          src={logo}
          className="aspect-square max-w-full h-auto object-contain md:h-12"
        />
        <span className="text-lg font-semibold">Skill Exchange</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Discover
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          My Profile
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
