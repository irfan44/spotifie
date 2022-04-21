import Modal from 'components/common/Modal';
import SelectedTrackList from 'components/navigation/SelectedTrackList';
import SideMenu from 'components/navigation/SideMenu';
import TopBar from 'components/navigation/TopBar';
import { useAppSelector } from 'redux/hooks';
import AppRouter from 'routes';

const Main = () => {
  const isModalOpen = useAppSelector((state) => state.modal.value.isOpen);
  return (
    <div className="container mx-auto">
      {isModalOpen && <Modal />}
      <div className="h-screen">
        <div>
          <TopBar />
        </div>
        <div className="flex h-screen">
          <div className="hidden px-4 lg:block">
            <SideMenu />
          </div>
          <div className="grow px-4">
            <div className="h-screen overflow-auto scrollbar-hide">
              <AppRouter />
            </div>
          </div>
          <div className="hidden px-4 lg:block">
            <SelectedTrackList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
