import { useEffect, useState } from 'react';
import { MdClose, MdMenu, MdQueueMusic } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import IconButton from '../../common/IconButton';
import Profile from './Profile';
import SelectedTrackList from '../SelectedTrackList';
import SideMenu from '../SideMenu';

const TopBar = () => {
  const [isSelectedTrackListOpen, setIsSelectedTrackListOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const displayImage = useAppSelector(
    (state) => state.userProfile.displayImage
  );
  const displayName = useAppSelector((state) => state.userProfile.displayName);

  const location = useLocation();

  const isLogin = location.pathname === '/login';

  const handleSelectedTrackListClick = () => {
    setIsSelectedTrackListOpen(!isSelectedTrackListOpen);
  };

  const handleSideMenuClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    // handle clickOutside of the side menu
    const handleClickOutside = (event: any) => {
      if (
        isSideMenuOpen &&
        !event.target.closest('.side-menu') &&
        !event.target.closest('#side-menu-button')
      ) {
        setIsSideMenuOpen(false);
      }

      if (
        isSelectedTrackListOpen &&
        !event.target.closest('.selected-track-list') &&
        !event.target.closest('#selected-track-list-button') &&
        !event.target.closest('#delete-track')
      ) {
        setIsSelectedTrackListOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSideMenuOpen, isSelectedTrackListOpen]);

  return (
    <div>
      {!isLogin && (
        <div className="container fixed bg-black p-4">
          <div className="grid grid-cols-2">
            <div className="flex items-center space-x-2 lg:space-x-0">
              <div className="block lg:hidden">
                <IconButton
                  id="side-menu-button"
                  icon={isSideMenuOpen ? <MdClose /> : <MdMenu />}
                  title="Menu"
                  type="button"
                  variant="default"
                  handleOnClick={handleSideMenuClick}
                />
              </div>
              <div>
                <h3 className="text-green-500">Spotifie</h3>
              </div>
            </div>
            <div className="grid justify-items-end">
              <div className="flex items-center space-x-2 lg:space-x-0">
                <div className="block lg:hidden">
                  <IconButton
                    id="selected-track-list-button"
                    icon={
                      isSelectedTrackListOpen ? <MdClose /> : <MdQueueMusic />
                    }
                    title="Menu"
                    type="button"
                    variant="default"
                    handleOnClick={handleSelectedTrackListClick}
                  />
                </div>
                <div>
                  <Profile
                    displayImage={displayImage}
                    displayName={displayName}
                  />
                </div>
              </div>
            </div>
            <div>
              {isSideMenuOpen && (
                <div className="side-menu fixed bg-black">
                  <SideMenu />
                </div>
              )}
            </div>
            <div className="grid justify-items-end">
              {isSelectedTrackListOpen && (
                <div className="selected-track-list fixed bg-black pr-4">
                  <SelectedTrackList />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TopBar;
