import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  return Object.fromEntries([...searchParams]);
};
