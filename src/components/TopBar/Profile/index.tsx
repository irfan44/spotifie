type Props = {
  displayImage: string | null;
  displayName: string | null;
};

const Profile = ({ displayImage, displayName }: Props) => {
  return (
    <div className="p-1 bg-zinc-900 w-24 md:w-36 rounded-2xl">
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
        <p className="text-sm font-bold truncate">{displayName}</p>
      </div>
    </div>
  );
};
export default Profile;
