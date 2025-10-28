import ReactMarkdown from "react-markdown";

export default function ProjectFeatures({ features }) {
  return (
    <div className="space-y-20">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`${
            (feature.img || feature.videos) && feature.items
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
          {feature.videos?.length > 0 ? (
            <div
              className={`${
                feature.videos.length === 2
                  ? `lg:grid lg:grid-cols-2 flex flex-col gap-4`
                  : ``
              }`}
            >
              {feature.videos.map((video, i) => (
                <video
                  key={i}
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className={`mx-auto my-auto rounded-2xl ${feature.vidClassName}`}
                />
              ))}
            </div>
          ) : null}
          {feature.items ? (
            <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl text-gray-400 font-bold">
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
