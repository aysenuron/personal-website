export default function ProjectFeatures({ features }) {
  return (
    <div className="lg:space-y-16 space-y-8">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`${
            feature.img && feature.heading
              ? "lg:grid lg:grid-cols-2 lg:gap-8 flex flex-col gap-4"
              : ""
          }`}
        >
          {feature.img ? (
            <div>
              <img
                src={feature.img}
                alt={feature.heading}
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}
          {feature.heading && feature.items ? (
            <div className="space-y-2 flex flex-col justify-center">
              <h2 className="text-2xl">{feature.heading}</h2>
              <ul className="text-gray-400 space-y-4">
                {feature.items?.length > 0
                  ? feature.items.map((item, i) => <li key={i}>{item}</li>)
                  : null}
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
