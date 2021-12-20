const NowDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const t = new Date();
  let date = t.getDate() + " " + months[t.getMonth()] + " " + t.getFullYear();

  return date;
};
export default NowDate;
