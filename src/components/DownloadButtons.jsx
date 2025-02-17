// import { FaDownload } from "react-icons/fa";

const DownloadButtons = ({ link1, link2 }) => {
  return (
    <div className="flex gap-4">
      {/* White Button */}
      <a href={link1} className={`${link1 ? "block" : "hidden"}`} download>
        <button className="flex items-center gap-2 bg-white text-[#ED5E24] border border-[#ED5E24] px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
          {/* <FaDownload /> */}
          Download Datasheet 1
        </button>
      </a>

      {/* Dark Gray Button */}
      <a href={link2} className={`${link2 ? "block" : "hidden"}`} download>
        <button className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
          Download Datasheet 2
        </button>
      </a>
    </div>
  );
};

export default DownloadButtons;
