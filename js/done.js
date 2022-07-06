//post api
const postApi = async () => {
  const data = {
    name: localStorage.name,
    email: localStorage.email,
    phone: localStorage.phone,
    date_of_birth: localStorage.dateOfBirth,
    experience_level: localStorage.experience,
    already_participated: Boolean(localStorage.alreadyParticipated),
    character_id: localStorage.avatar,
  };
  const response = await fetch(
    "https://chess-tournament-api.devtest.ge/api/register",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((res) => {
    console.log("request Complete Response:", res);
  });
};

window.onload = () => {
  postApi();
};
setTimeout(function () {
  localStorage.clear();
  window.location.href = "../index.html";
}, 3000);
