
export const fetchData = async (url:string, setData:any) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
    } catch (error) {
      console.log("There was an error fetching details", error);
    }
}


export const updateData = async (url:string, headers:any, body:string) => {
  try {
    const response = await fetch(url, {method:'PUT', body, headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was an error updating the blog post", error);
  }
}



