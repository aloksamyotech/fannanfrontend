export const Getuserid = () => {
  let { data } = localStorage.getItem("Adminuser");
  let userDetails = JSON.parse(data);
  console.log(userDetails, "id");
  return data;
};
