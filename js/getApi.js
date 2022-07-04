let grandmasters;
const divMaster = document.getElementById("masters");
const experienceLevel = document.getElementById("levelOfExperience");
let bool;
experienceLevel.value = localStorage.getItem("experience");
checkParticipation = localStorage.getItem("alreadyParticipated");
bool = localStorage.getItem("alreadyParticipated") === "true";

if (bool) {
  document.getElementById("yes").checked = checkParticipation;
  console.log(checkParticipation);
} else if (!bool && bool !== undefined) {
  document.getElementById("no").checked = checkParticipation;
}
//get API
function getGrandmasters() {
  const selectMaster = document.getElementById("characters");

  grandmasters.forEach((item, index) => {
    const grandmastersList = document.createElement("div");
    const grandPictures = document.createElement("img");
    grandmastersList.className = "chessGrands";
    grandmastersList.id = index;
    grandmastersList.addEventListener("click", getValue);
    grandPicturesURL = `https://chess-tournament-api.devtest.ge/${item.image}`;
    grandPictures.src = `${grandPicturesURL}`;
    grandPictures.className = "grandmasters-img";
    // divMaster.append(testPictures);
    grandmastersList.innerHTML = item.name;
    grandmastersList.append(grandPictures);

    selectMaster.appendChild(grandmastersList);
  });
}
const getValue = (elem) => {
  ///////////ააააააააააააააააააააააააქქქქქქქქქქქქქქქქქქ//////////////
  //id გამოვიტანოთ და დავამახსოვრებინოთ id value სთვის api ში გადასაგზავნად
  console.log(elem.path[0].id);
};
const showGrands = () => {
  const show = document.querySelectorAll(".chessGrands");
  show.forEach((item) => item.classList.toggle("show"));
};
window.onload = async () => {
  bool = document.getElementById("yes").checked === "true";
  const response = await fetch(
    "https://chess-tournament-api.devtest.ge/api/grandmasters",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  grandmasters = await response.json();
  getGrandmasters();
};

//post API
const postApi = async () => {
  const data = {
    name: localStorage.name,
    email: localStorage.email,
    phone: localStorage.phone,
    date_of_birth: localStorage.dateOfBirth,
    experience_level: localStorage.experience,
    already_participated: bool,
    character_id: 2,
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
const mySubmit = () => {
  postApi();
};

// select
const formFuncSelect = (elem) => {
  localStorage.setItem("experience", elem.value);
};
const test = () => {
  localStorage.setItem(
    "alreadyParticipated",
    document.getElementById("yes").checked
  );
};
