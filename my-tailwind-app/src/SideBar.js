import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return(
        <div className="fixed left-0 p-0 m-0 w-16 h-screen flex-col flex  bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28"/>}/>
            <SideBarIcon icon={<BsPlus size="32"/>}/>
            <SideBarIcon icon={<BsFillLightningFill size="20"/>}/>
            <SideBarIcon icon={<FaPoo size="20"/>}/>
        </div>
  );
    

};

const SideBarIcon = ({icon, text = "tooltip 💡"}) => (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

export default SideBar;