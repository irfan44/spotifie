/* eslint-disable no-undef */
import { NavLink } from 'react-router-dom';

type Props = {
  title: string;
  path: string;
  iconActive: React.ReactNode;
  iconDefault: React.ReactNode;
};

const Menus = ({ title, path, iconActive, iconDefault }: Props) => {
  return (
    <li>
      <NavLink to={path}>
        {({ isActive }) => (
          <div
            className={
              isActive
                ? 'bg-zinc-900 rounded-lg'
                : 'bg-black hover:bg-zinc-900 hover:rounded-lg'
            }
          >
            <div className="flex px-5 py-4 items-center space-x-4">
              <div>{isActive ? iconActive : iconDefault}</div>
              <p className="font-bold">{title}</p>
            </div>
          </div>
        )}
      </NavLink>
    </li>
  );
};
export default Menus;
