import axios from "axios";

export const TokenData = async ({ chain }: { chain: number | undefined }) => {
  const baseurl = "https://api.1inch.dev/token";
  const header = {
    Authorization: "Bearer wINrkvzrIFDAHM3b9k9DHcR5r13jJoD4",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    
  };
  const res = await axios.get(`${baseurl}/v1.2/${chain}`, { headers: header });
  const data = res.data;
  console.log(data);
  return data;
};
