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
                ? 'rounded-lg bg-zinc-900'
                : 'bg-black hover:rounded-lg hover:bg-zinc-900'
            }
          >
            <div className="flex items-center space-x-4 px-5 py-4">
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
