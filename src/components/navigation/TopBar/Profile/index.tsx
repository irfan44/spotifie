type Props = {
  displayImage: string | null;
  displayName: string | null;
  profileLink: string | null;
};

const Profile = ({ displayImage, displayName, profileLink }: Props) => {
  return (
    <a
      href={profileLink !== null ? profileLink : '/'}
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-24 rounded-2xl bg-zinc-900 p-1 md:w-36">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={
              displayImage !== null
                ? displayImage
                : '/images/default-display-image.png'
            }
            alt="profile"
            width={30}
            height={30}
          />
          <p className="truncate text-sm font-bold">{displayName}</p>
        </div>
      </div>
    </a>
  );
};
export default Profile;
