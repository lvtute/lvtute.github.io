import { PropsWithChildren } from 'react';
import NavBar from './NavBar';

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="bg-[#0f172a] h-screen">
        <header className="absolute right-0 top-0 z-50 max-w-2xl">
          <NavBar />
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8 ">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContainer;