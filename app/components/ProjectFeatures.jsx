export default function ProjectFeatures({ features }) {
  return (
    <div className="lg:space-y-16 space-y-8">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="lg:grid lg:grid-cols-2 flex flex-col gap-4 lg:gap-8"
        >
          <div>
            <img
              src={feature.img}
              alt={feature.heading}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2 flex flex-col justify-center">
            <h2 className="text-2xl">{feature.heading}</h2>
            <ul className="text-gray-400 space-y-2">
              {feature.items?.length > 0 ? (
                feature.items.map((item, i) => <li key={i}>{item}</li>)
              ) : (
                <li>Feature details coming soon...</li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
