import { useState, useEffect } from "react";

interface PutDataProps {
  responseData: any | null;
  updateError: string | null;
  updateInprogress: boolean;
}

const usePutData = (url: string, requestBody: object): PutDataProps => {
  const [responseData, setData] = useState<any | null>(null);
  const [updateError, setError] = useState<string | null>(null);
  const [updateInprogress, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setData(null);
        setError("Error during PUT request");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, requestBody]);

  return { responseData, updateError, updateInprogress };
};

export default usePutData;
