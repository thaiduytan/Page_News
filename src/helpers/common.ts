export function shortenString(str: string) {
  return `${str.substring(0, 4)}...${str.substring(str.length - 6)}`;
}

export const convertSecondsToTime = (time: number) => {
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;
  var ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + String(mins).padStart(2, "0") + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
};
