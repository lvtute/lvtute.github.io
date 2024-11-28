import pdf from '../Resume.pdf';

const About = () => {
  const openResumePdfInNewTab = () => {
    window.open(pdf, '_blank');
  };

  return (
    <div className="mt-40">
      <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-300 sm:text-7xl">
        Hi there
      </h1>
      <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
        I'm Thuan, a Software Developer from Khanh Hoa, Viet Nam
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Say Hello
        </a>
        <span
          onClick={openResumePdfInNewTab}
          className="text-sm font-semibold leading-6 text-sky-500 cursor-pointer"
        >
          See My Resume
        </span>
      </div>
    </div>
  );
};

export default About;
