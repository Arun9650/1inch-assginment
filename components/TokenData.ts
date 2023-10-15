import axios from "axios";

export const TokenData = async ({ chain }: { chain: number | undefined }) => {
  const baseurl = "https://api.1inch.dev/token";
  const token = "wINrkvzrIFDAHM3b9k9DHcR5r13jJoD4"; // Replace with your API token

  // Set the headers with your API token
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(`${baseurl}/v1.2/${chain}`, {
      headers: headers,
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error:", error);
    throw error; // Optionally re-throw the error for the calling code to handle
  }
};
