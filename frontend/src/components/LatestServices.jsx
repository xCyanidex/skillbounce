import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const LatestServices = () => {
  return (
    <section className="container px-4 md:px-6 py-12 md:py-16 lg:py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Latest Skills</h2>
        <Link
          href="#"
          className="text-primary hover:underline"
          prefetch={false}
        >
          View all
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader className="min-h-[120px]">
            <CardTitle>Web Development</CardTitle>
            <CardDescription className="line-clamp-2 overflow-hidden text-ellipsis">
              Expertise in HTML, CSS, JavaScript, and popular frameworks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">
                  Web Developer
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-muted-foreground">
                (120 reviews)
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Request Skill</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="min-h-[120px]">
            <CardTitle>Graphic Design</CardTitle>
            <CardDescription className="whitespace-nowrap overflow-hidden text-ellipsis">
              Proficient in Adobe Creative Suite and design principles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Sarah Anderson</div>
                <div className="text-sm text-muted-foreground">
                  Graphic Designer
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">4.7</span>
              <span className="text-sm text-muted-foreground">
                (80 reviews)
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Request Skill</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="min-h-[120px]">
            <CardTitle>Accounting</CardTitle>
            <CardDescription className="whitespace-nowrap overflow-hidden text-ellipsis">
              Expertise in financial reporting, tax preparation, and
              bookkeeping.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Michael Johnson</div>
                <div className="text-sm text-muted-foreground">Accountant</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">
                (90 reviews)
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Request Skill</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default LatestServices


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}