import { FaAngleDown } from 'react-icons/fa';

const memberData = [
  {
    name: "Diane Cooper",
    email: "diane.cooper@gmail.com",
    gender: "male",
    birthday: "Feb 27, 1999",
    number: "91 9999999999",
    status: "Active Member",
    past: 15,
    upcoming: 2,
  },
  {
    name: "Diane Cooper",
    email: "diane.cooper@gmail.com",
    gender: "male",
    birthday: "Feb 27, 1999",
    number: "91 9999999999",
    status: "Active Member",
    past: 15,
    upcoming: 2,
  },
  {
    name: "Diane Cooper",
    email: "diane.cooper@gmail.com",
    gender: "male",
    birthday: "Feb 27, 1999",
    number: "91 9999999999",
    status: "Active Member",
    past: 15,
    upcoming: 2,
  },
  {
    name: "Diane Cooper",
    email: "diane.cooper@gmail.com",
    gender: "male",
    birthday: "Feb 27, 1999",
    number: "91 9999999999",
    status: "Active Member",
    past: 15,
    upcoming: 2,
  },
  {
    name: "Diane Cooper",
    email: "diane.cooper@gmail.com",
    gender: "male",
    birthday: "Feb 27, 1999",
    number: "91 9999999999",
    status: "Active Member",
    past: 15,
    upcoming: 2,
  },
  {
    name: "Diane Cooper",
    email: "diane.cooper@gmail.com",
    gender: "male",
    birthday: "Feb 27, 1999",
    number: "91 9999999999",
    status: "Active Member",
    past: 15,
    upcoming: 2,
  },
];

function Content() {
  return (
    <div>
      <div className="flex p-2 border-b justify-between	">
        <form>
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <input
            type="search"
            id="default-search"
            className="block text-base font-bold w-96 h-7 text-sm text-gray-900 focus:outline-none"
            placeholder="Find by Name or phone Number"
          />
        </form>
        <div className="flex items-center	">
          <div className="flex">
            <p className="opacity-50 text-xs">Gender</p>
            <p className="text-xs px-2.5">Male</p>
            <FaAngleDown/>
          </div>
          <div className="flex">
            <p className="opacity-50 text-xs">Member Status</p>
            <p className="text-xs px-2.5">Active Member</p>
            <FaAngleDown/>
          </div>
        </div>
      </div>
      <ul className="">
        {memberData.map((item) => (
          <li className="border-b p-2">
            <div className="flex">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-xs text-[#6B6B6B] py-2.5 pl-2 font-normal">
                {item.email}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <div className="border-r-2 h-9 pr-7">
                  <p className="text-xs text-[#6B6B6B] font-normal">Gender</p>
                  <p className="text-sm">{item.gender}</p>
                </div>
                <div className="border-r-2 h-9 pl-2.5 pr-7">
                  <p className="text-xs text-[#6B6B6B] font-normal">Birthday</p>
                  <p className="text-sm">{item.birthday}</p>
                </div>
                <div className="border-r-2 h-9 pl-2.5 pr-7">
                  <p className="text-xs text-[#6B6B6B] font-normal">
                    Phone Number
                  </p>
                  <p className="text-sm">{item.number}</p>
                </div>
                <div className="pl-2.5 h-9 pr-7">
                  <p className="text-xs text-[#6B6B6B] font-normal">
                    Member Status
                  </p>
                  <p className="text-sm">{item.status}</p>
                </div>
              </div>
              <div className="flex">
                <div className="border-r-2 h-10 pr-7">
                  <p className="text-lg leading-6">{item.past}</p>
                  <p className="text-xs text-[#6B6B6B] font-normal">Past</p>
                </div>
                <div className="pl-7 pl-2.5">
                  <p className="text-lg leading-6">{item.upcoming}</p>
                  <p className="text-xs text-[#6B6B6B] font-normal">Upcoming</p>
                </div>
                <div className="pl-7 pl-2.5">
                  <p className="text-xs text-[#29B712] font-bold">VIEW ECG</p>
                  <p className="text-xs text-[#29B712] font-bold">REPORT</p>
                  <p className="text-xs text-[#29B712] font-bold">DOCUMENTS</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
