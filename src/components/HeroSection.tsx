const apps = [
  // {
  //   id: "autodrive-sim",
  //   name: "AutoDrive-Sim",
  //   color: "from-indigo-600 via-pink-500 to-purple-600",
  // },
];
export default function HeroSection() {
  function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-3xl flex items-center h-[calc(100vh-60px)]">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome to Yang'Website
            </h1>
            <div className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Where Programming Meets Imagination
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              <p>
                Dive into a vibrant world where coding transforms into
                creativity! Here we celebrate the art of programming with
                interesting projects, including AI applications and engaging
                front-end tutorials. Discover innovative web applications that
                harness the power of AI. Learn with fun tutorials and stay
                inspired with insightful blog articles that share the trends and
                tips in coding.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-1 flex-wrap hidden sm:flex">
              {apps.map((app, index) => (
                <a
                  key={index}
                  href="javascript:;"
                  className={`px-2 text-base font-semibold m-6 group relative w-max whitespace-nowrap font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r ${app.color}`}
                  onClick={() => {
                    scrollTo(app.id);
                  }}
                >
                  <span>{app.name}</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
