// This function will return Month and Year in a string format
export const getDateinRequiredFormat = (date: string) => {
  const dateObj = new Date(date);
  const requuiredFormat = dateObj.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  return requuiredFormat;
};
