import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ServiceDetailCard = () => {
  return (
    <>
      <section className="container px-4 md:px-6 py-12 md:py-16 lg:py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold my-4">Service Detail</h2>
        </div>
        <div className="grid  gap-8">
          <div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex items-start">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold mb-2">Web Development</h1>
                  <p className="text-muted-foreground mb-4">
                    Experienced in building modern web applications.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-muted-foreground text-sm">
                      (120 reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button>Book Service</Button>
                    <Button variant="outline">Chat with Provider</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 mt-8">
              <h2 className="text-xl font-bold mb-4">Web Development</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium">
                  HTML, CSS, JavaScript, React, Angular
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                As an experienced web developer, I specialize in building
                modern, responsive, and user-friendly websites and web
                applications. I have a strong understanding of HTML, CSS,
                JavaScript, and various front-end frameworks like React and
                Angular. I can help you create a custom website that meets your
                business needs and provides a great user experience.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <LocateIcon className="w-4 h-4 fill-primary" />
                <span className="text-sm font-medium">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <CoinsIcon className="w-4 h-4 fill-primary" />
                <span className="text-sm font-medium">100 points</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <StarIcon className="w-4 h-4 fill-primary" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-muted-foreground text-sm">
                  (120 reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailCard;


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


function CoinsIcon(props) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}