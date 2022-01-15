function getMonth(month) {
  const monthNames = [
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
  const d = new Date("2023 - 01 - 14");

  return monthNames[d.getMonth()];
}
export default getMonth;
