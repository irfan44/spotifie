const convertTrackDuration = (duration: number) => {
  const convertDuration = new Date(duration);
  const minutes = convertDuration.getMinutes();
  const seconds = convertDuration.getSeconds();
  return `${minutes}:${seconds}`;
};
export default convertTrackDuration;
