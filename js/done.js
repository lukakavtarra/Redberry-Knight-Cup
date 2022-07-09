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
  await fetch(
    "https://chess-tournament-api.devtest.ge/api/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((res) => {
    console.log("request Complete Response:", res);
  });
};

window.onload = () => {
  postApi()
  localStorage.clear();
};


// setTimeout( () => {
//   window.location.href = "index.html";
// }, 3000);
