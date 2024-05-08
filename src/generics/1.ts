import axios from "axios";

async function fetchData(url: string) {
  try {
    const response: Promise<object> = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
