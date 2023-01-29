import {
  AiOutlinePlus,
  AiOutlineFolderOpen,
  AiOutlineFileText,
} from "react-icons/ai";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { MdPeopleOutline } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";
import logo from "./logo.svg";

const sidebarContent = [
  {
    title: "New",
    icon: <AiOutlinePlus />,
  },
  {
    title: "Patient",
    icon: <MdPeopleOutline />,
  },
  {
    title: "Folder",
    icon: <AiOutlineFolderOpen />,
  },
  {
    title: "Upload",
    icon: <TbFileUpload />,
  },
  {
    title: "Report",
    icon: <AiOutlineFileText />,
  },
  {
    title: "Setting",
    icon: <FiSettings />,
  },
  {
    title: "Logout",
    icon: <FiLogOut />,
  },
];

function SideBar({ children }) {
  return (
    <div className="flex">
      <div className="flex flex-col w-30 h-screen overflow-y-auto border-r">
        <div className="flex flex-col justify-between">
          <aside>
            <ul>
              <li className="bg-[#29B712] mb-1.5">
                <a
                  className="flex items-center text-sm p-4 h-15 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <img src={logo} alt="" />
                </a>
              </li>

              {sidebarContent.map((item) => (
                <li>
                  <a
                    className="flex flex-col items-center py-4 px-6 h-15 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    <span className="text-3xl mb-1.5">{item.icon}</span>
                    <span className="text-xs uppercase opacity-50">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
      <div className="w-full h-full px-10">{children}</div>
    </div>
  );
}

export default SideBar;
