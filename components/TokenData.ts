import axios from "axios";

const API_KEY = "JQnOv9gMMhHR3hBlan8WFwOwbIEPd05U"; // Replace with your actual 1inch API key
const BASE_URL = "https://api.1inch.dev/token";

const headers = {
  Authorization: `Bearer wINrkvzrIFDAHM3b9k9DHcR5r13jJoD4`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

export const get1inchTokenList = async (
  chainId: number,
  cfIpCountry?: string | null,
  provider: string = "1inch",
  country?: string | null
) => {
  const params = {
    "cf-ipcountry": cfIpCountry,
    provider,
    country,
  };
  const endpoint = `/v1.2/${chainId}/token-list?cf-ipcountry=US&provider=1inch&country=US`;

  try {
    // const response = await axios.get(BASE_URL + endpoint, { headers, params });

    // if (response.status === 200) {
    //   return response.data;
    // } else {
    //   console.error(`Failed to get 1inch token list. Status code: ${response.status}`);
    //   return null;

    const res = await fetch(BASE_URL + endpoint, { headers, method: "GET" });
    const data = await res.json();
  } catch (error) {
    console.error("Error: thyakdhfkadj", error);
    return null;
  }
};

// Example usage:
const chainId = 1;
const cfIpCountry = "US";
const country = "US";

export const TokenData = async ({ chain }: { chain: number | undefined }) => {
  get1inchTokenList(chainId, cfIpCountry, "1inch", country).then(
    (tokenList) => {
      if (tokenList) {
        console.log("1inch Token List:", tokenList);
      }
    }
  );
};
