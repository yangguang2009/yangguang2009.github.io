import Link from "@docusaurus/Link";
import data from "./data";

export default function AppSection() {
  return (
    <>
      {data.map((app, index) => (
        <div
          id={app.id}
          className={`min-h-screen flex flex-col items-center p-4 py-32 text-white ${
            index % 2 === 0 ? "bg-gray-900" : "bg-white"
          } `}
        >
          <header className="mx-auto max-w-2xl text-center mb-8">
            <h1
              className={`text-4xl font-bold mb-2 ${
                index % 2 === 0 ? "text-white" : "text-gray-900"
              }`}
            >
              {app.title}
            </h1>
            <p
              className={`mt-6 text-lg leading-8 text-lg ${
                index % 2 === 0 ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {app.description}
            </p>
          </header>
          <div className="flex items-center justify-center gap-x-6">
            <Link to={app.url} target="_blank">
              <button
                className={`${
                  index % 2 === 0 ? "text-white" : "text-black hover:text-white"
                } relative group inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium border-2 border-indigo-600 rounded-lg group`}
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span
                  className={` relative text-base font-semibold transition-all duration-300 group-hover:-translate-x-3`}
                >
                  {app.url ? "Visit" : "Coming soon..."}️
                </span>
              </button>
            </Link>
            {app.docs && (
              <Link
                className={`text-sm font-semibold leading-6  ${
                  index % 2 === 0 ? "text-white" : "text-black"
                }`}
                href={app.docs}
                target="_blank"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            )}
            {app.download && (
              <>
                {app.download.includes("http") ? (
                  <Link
                    className={`text-sm font-semibold leading-6  ${
                      index % 2 === 0 ? "text-white" : "text-black"
                    }`}
                    href={app.download}
                    target="_blank"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span
                    className={`text-sm font-semibold leading-6  ${
                      index % 2 === 0 ? "text-white" : "text-black"
                    }`}
                  >
                    {app.download}
                  </span>
                )}
              </>
            )}
          </div>
          <main className="mt-10 flex flex-col items-center w-full max-w-5xl">
            {app.image ? (
              <div className="mb-8">
                <img
                  src={app.image}
                  alt="Placeholder"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            ) : null}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {app.features.map((feature) => (
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <h2 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      ))}
    </>
  );
}
