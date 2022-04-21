import { MdLibraryMusic, MdOutlineLibraryMusic } from 'react-icons/md';
import {
  RiHome5Fill,
  RiHome5Line,
  RiSearchFill,
  RiSearchLine,
  RiAddCircleFill,
  RiAddCircleLine,
} from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import Menus from './Menus';

const SideMenu = () => {
  const location = useLocation();

  const isLogin = location.pathname === '/login';

  const menus = [
    {
      title: 'Home',
      path: '/',
      iconActive: <RiHome5Fill />,
      iconDefault: <RiHome5Line />,
    },
    {
      title: 'Search',
      path: '/search',
      iconActive: <RiSearchFill />,
      iconDefault: <RiSearchLine />,
    },
    {
      title: 'Create Playlist',
      path: '/create-playlist',
      iconActive: <RiAddCircleFill />,
      iconDefault: <RiAddCircleLine />,
    },
    {
      title: 'Playlists',
      path: '/playlists',
      iconActive: <MdLibraryMusic />,
      iconDefault: <MdOutlineLibraryMusic />,
    },
  ];

  return (
    <div>
      {!isLogin && (
        <nav className="mt-6 w-52 pr-4 pb-4 lg:mt-20">
          <div className="flex h-[calc(100vh_-_5.85rem)] flex-col lg:h-[calc(100vh_-_6rem)]">
            <div className="flex-1">
              <ul className="space-y-2">
                {menus.map((menu) => {
                  return (
                    <Menus
                      key={menu.title}
                      title={menu.title}
                      path={menu.path}
                      iconActive={menu.iconActive}
                      iconDefault={menu.iconDefault}
                    />
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold">
                © 2022 Irfan Nurghiffari Muhajir
              </p>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};
export default SideMenu;
