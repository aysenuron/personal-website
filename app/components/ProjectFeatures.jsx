import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function ProjectFeatures({ features }) {
  return (
    <div className="space-y-16">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`${
            feature.img && feature.heading
              ? "lg:grid lg:grid-cols-2 flex flex-col gap-8"
              : ""
          }`}
        >
          {feature.img ? (
            <div>
              <img
                src={feature.img}
                alt={feature.heading}
                className={`mx-auto drop-shadow-xl border-2 border-gray-200 rounded-xl h-auto ${feature.imgClassName}`}
              />
            </div>
          ) : null}
          {feature.heading && feature.items ? (
            <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl text-gray-400 font-semibold">
                {feature.heading}
              </h2>
              <ul className="text-gray-700 space-y-2">
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
