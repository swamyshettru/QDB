import { useState, useEffect, useCallback } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
      //log error to any loggers
      console.log(`Something went wrong while fetching, error:  ${error}`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [url]);
  return [data, error, loading];
};
