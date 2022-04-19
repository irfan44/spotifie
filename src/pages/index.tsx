import AppRouter from '../routes';
import SideMenu from '../components/navigation/SideMenu';
import SelectedTrackList from '../components/navigation/SelectedTrackList';
import TopBar from '../components/navigation/TopBar';

const Main = () => {
  return (
    <div className="container mx-auto">
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
