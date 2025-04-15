import WebsiteCard from "./WebsiteCard";
import websites from "../websites";

export default function SelectedWorks() {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <h2 className="degular text-2xl lg:text-4xl font-medium mb-5 lg:mb-10">
        Selected Works 👇🏻
      </h2>
      <div className="flex flex-col gap-4 lg:gap-10">
        {websites.map((website) => (
          <WebsiteCard key={website.id} websiteInfo={website} />
        ))}
      </div>
    </div>
  );
}
