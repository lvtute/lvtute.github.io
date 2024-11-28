import { PropsWithChildren } from 'react';
import NavBar from './NavBar';

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="bg-[#0f172a] min-h-screen h-full">
        <header className="absolute right-0 top-0 z-50 max-w-2xl">
          <NavBar />
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8 ">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContainer;
