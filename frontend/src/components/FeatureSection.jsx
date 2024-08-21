

const FeatureSection = () => {
  return (
    <section className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-center text-center">
          <SearchIcon className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Discover Skills</h3>
          <p className="mt-2 text-muted-foreground">
            Browse through a wide range of skills and services offered by
            community members.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CalendarCheckIcon className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Live Chat</h3>
          <p className="mt-2 text-muted-foreground">
            Easily communicate to proceed with exchanging skills.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <StarIcon className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Rate & Review</h3>
          <p className="mt-2 text-muted-foreground">
            Provide feedback and ratings to help build trust in the community.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CoinsIcon className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Points System</h3>
          <p className="mt-2 text-muted-foreground">
            Exchange skills and services without the need for money.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <ListIcon className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Skill Categories</h3>
          <p className="mt-2 text-muted-foreground">
            Browse and discover skills across a wide range of categories.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <BellIcon className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Notifications</h3>
          <p className="mt-2 text-muted-foreground">
            Stay up-to-date with the latest skill exchange opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

// function CalendarCheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//       <path d="m9 16 2 2 4-4" />
//     </svg>
//   );
// }
function CalendarCheckIcon(props) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M18.5 6.5H17" />
    </svg>
  );
}


function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}


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


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
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
