import { Link, useLocation } from "react-router-dom";
import DownloadButtons from "./DownloadButtons";

const Breadcrumb = ({ title, download1, download2 }) => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x !== "icube-parking");

  return (
    <div className="relative h-[40vh] bg-[#ed5e24] flex flex-col justify-center space-y-3 py-10 px-6 text-white">
      {/* Background Pattern */}
      <div className="absolute bg-cover bg-[url('./assets/images/Breadcrumb_bg.png')] inset-0 opacity-20"></div>

      {/* Page Title */}
      <h1 className="amiri-bold relative text-3xl md:text-5xl font-bold uppercase">
        {title.toUpperCase()}
      </h1>

      {/* Breadcrumb Navigation */}
      <nav className="relative mt-2 manrope">
        <ul className="flex space-x-3 text-sm md:text-xl">
          <li>
            <Link to="/icube-parking/" className="hover:underline">
              Home
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const routeTo = `/icube-parking/${pathnames
              .slice(0, index + 1)
              .join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-white/70">›</span>
                {isLast ? (
                  <span className="text-white">{value}</span>
                ) : (
                  <Link to={routeTo} className="hover:underline">
                    {value}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Buttons */}
      {download1 && (
        <div className="absolute right-5 bottom-8">
          <DownloadButtons link1={download1} link2={download2} />
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
