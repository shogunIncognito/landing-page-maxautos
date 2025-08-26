import axios from "axios";

export const askAi = async (messages) => {
  const response = await axios.post("https://maxapi.onrender.com/api/openai", {
    messages,
  });
  return response.data;
};

export const checkVisitor = () => {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  const time = new Date().getTime();
  axios.post("https://maxapi.onrender.com/api/stats", { time });
};
