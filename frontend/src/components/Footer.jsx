
import { Link } from 'react-router-dom';

const Footer = () => {
    let year =new Date().getFullYear();
    if(!year){
    year=2024;
    }
  return (
    <footer className="bg-muted text-muted-foreground px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm">
        &copy; {year} Skill Exchange. All rights reserved.
      </p>
      <nav className="flex gap-4 md:gap-6 mt-4 md:mt-0">
        <Link
          href="#"
          className="text-sm hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-sm hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-sm hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </footer>
  );
}

export default Footer