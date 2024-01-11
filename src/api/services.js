export async function postData(url, data, setLoader) {
  console.log(`api called`);
  try {
    setLoader(true)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status : ${response.status}`);
    }
    const result = await response.json();
    setLoader(false)
    return result;
  } catch (error) {
    setLoader(false)
    console.log(`Error making POST call`, error);
  }
}

export const authorizeUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};
