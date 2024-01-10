import { useState, useCallback } from "react";

const usePutData = (url: string) => {
  const [updateInprogress, setUpdateInprogress] = useState<boolean>(false);
  const [updateError, setupdateError] = useState<any>(null);
  const [updatedData, setUpdatedData] = useState<any>(null);

  const makeRequest = useCallback(
    async (requestData: object) => {
      const config = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      };

      setUpdateInprogress(true);
      setupdateError(null);
      try {
        const response = await fetch(url, config);
        const result = await response.json();
        setUpdatedData(result);
      } catch (error) {
        setupdateError(error);
        //log error to any loggers
        console.log(
          `Something went wrong while updating post, error:  ${error}`
        );
      } finally {
        setUpdateInprogress(false);
      }
    },
    [url]
  );

  return { makeRequest, updatedData, updateInprogress, updateError };
};

export default usePutData;
