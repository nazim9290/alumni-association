const Regex = (text) => {
  var regex = /(<([^>]+)>)/gi;
  const regText = text.replace(regex, " ");
  return regText.slice(0, 150);
  console.log(regText);
};
export default Regex;
