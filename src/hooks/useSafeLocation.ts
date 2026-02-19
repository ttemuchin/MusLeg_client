import { useLocation, Location } from "react-router-dom";

export const useSafeLocation = (): Location => {
  //   eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const location = useLocation();
  return location as Location;
};
