export default function Playground() {
  return (
    <div className="container mx-auto px-4 pt-20 lg:px-0">
      <div className="grid lg:grid-cols-6">
        <h2 className="degular lg:col-span-2 text-2xl lg:text-4xl font-medium mb-5 lg:mb-10">
          Playground 👩🏻‍💻
        </h2>
        <p className="text-gray-400 text-md lg:col-span-4">
          These projects were developed during my learning journey and for
          personal use. Feel free to explore, use, or adapt any that interest
          you.{" "}
          <span className="text-orange-500 font-medium">
            Feedback is always welcome!
          </span>{" "}
          👉🏻{" "}
          <a
            className="underline-offset-1 font-medium text-gray-900"
            href="mailto:contact@aysenuronaran.com"
          >
            contact@aysenuronaran.com
          </a>
        </p>
      </div>
    </div>
  );
}
