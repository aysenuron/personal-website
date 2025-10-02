import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function ProjectFeatures({ features }) {
  return (
    <div className="space-y-20">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`${
            (feature.img || feature.video) && feature.heading
              ? "lg:grid lg:grid-cols-2 flex flex-col gap-8"
              : ""
          }`}
        >
          {feature.img ? (
            <div
              className={`${feature.imgClassName} mx-auto overflow-hidden h-auto bg-white flex justify-center items-center drop-shadow-xl border-2 border-gray-200 rounded-xl`}
            >
              <img src={feature.img} alt={feature.heading} />
            </div>
          ) : null}
          {feature.video ? (
            <video
              src={feature.video}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className={`mx-auto my-auto border-gray-200 border-4 rounded-2xl drop-shadow-lg ${feature.vidClassName}`}
            />
          ) : null}
          {feature.heading && feature.items ? (
            <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl text-gray-400 font-semibold">
                {feature.heading}
              </h2>
              <ul className="text-gray-700 space-y-4">
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
