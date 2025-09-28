import ReactMarkdown from "react-markdown";
import Image from "next/image";

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
            <div className={`relative ${feature.imgClassName}`}>
              <Image
                src={feature.img}
                alt={feature.heading}
                fill
                className={`h-full object-cover rounded-xl`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : null}
          {feature.heading && feature.items ? (
            <div className="space-y-2 flex flex-col justify-center">
              <h2 className="text-2xl">{feature.heading}</h2>
              <ul className="text-gray-500 space-y-2">
                {feature.items?.length > 0
                  ? feature.items.map((item, i) => (
                      <li key={i}>
                        <ReactMarkdown>{item}</ReactMarkdown>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
