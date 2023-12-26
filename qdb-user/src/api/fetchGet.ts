
export const fetchData = async (url:string, setData:any) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
    } catch (error) {
      console.log("There was an error fetching details", error);
    }
}

