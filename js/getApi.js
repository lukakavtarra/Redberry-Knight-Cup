let grandmasters;

const divMaster = document.getElementById("masters");
const experienceLevel = document.getElementById("levelOfExperience");
const selectMaster = document.getElementById("characters");
const selector = document.getElementById("grandmaster");
const avataSelectionDiv = document.getElementById("chooseAvatar");
const selectAvatar = document.createElement("div");

checkParticipation = localStorage.getItem("alreadyParticipated");
bool = localStorage.getItem("alreadyParticipated") === "true";
if (bool) {
  document.getElementById("yes").checked = checkParticipation;
} else if (!bool && bool !== undefined) {
  document.getElementById("no").checked = checkParticipation;
}
//get API
function getGrandmasters() {
  grandmasters.forEach((item, index) => {
    const grandmastersList = document.createElement("div");
    grandmastersList.className = "chessGrands";
    grandmastersList.id = item.id;
    grandmastersList.addEventListener("click", getValue);
    grandPicturesURL = `https://chess-tournament-api.devtest.ge/${item.image}`;
    grandmastersList.innerText = item.name;
    grandmastersList.style.backgroundImage = `url(${grandPicturesURL})`;

    selectMaster.appendChild(grandmastersList);
  });
}
const getValue = (elem) => {
  if (selectMaster.innerHTML == null) {
    getGrandmasters();
  } else if (selectMaster.innerHTML !== null) {
    const selectedMasters = document.getElementById(`${elem.path[0].id}`).id;
    localStorage.setItem("avatar", parseInt(selectedMasters));
    const choosed = elem.path[0].innerHTML;
    selectAvatar.innerHTML = choosed;
    localStorage.setItem("chosedAvatar", choosed);
    selectMaster.innerHTML = null;
  }
};
const clickBody = (elem) => {
  if (selectMaster.innerHTML !== null && elem.path[0].id !== "grandmaster") {
    selectMaster.innerHTML = null;
  }
};

const showGrands = () => {
  const show = document.querySelectorAll(".chessGrands");
  document.body.addEventListener("click", clickBody);
  if (show.length == 0) {
    getGrandmasters();
  } else {
    selectMaster.innerHTML = null;
  }
};

window.onload = async () => {
  if (localStorage.experience !== undefined) {
    experienceLevel.value = localStorage.getItem("experience");
  }
  if (localStorage.chosedAvatar !== undefined) {
    selectAvatar.innerHTML = `${localStorage.chosedAvatar}`;
  } else {
    selectAvatar.innerHTML =
      "Choose your character <span style='color:red'>*</span>";
  }
  // make select div for grandmasters
  selectAvatar.className = "experience";
  selectAvatar.id = "grandmaster";
  avataSelectionDiv.appendChild(selectAvatar);

  selectAvatar.addEventListener("click", showGrands);

  //
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
