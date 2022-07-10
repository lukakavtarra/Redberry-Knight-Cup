let grandmasters;

const divMaster = document.getElementById("masters");
const experienceLevel = document.getElementById("levelOfExperience");
const selectMaster = document.getElementById("characters");
const selector = document.getElementById("grandmaster");
const avataSelectionDiv = document.getElementById("chooseAvatar");
const selectAvatar = document.createElement("div");

const form = document.getElementById("experienceForm");
const wrongValidity = document.createElement('div')
const errorAlert = document.createElement('p')    
const errorMessage = document.createElement('p');

checkParticipation = localStorage.getItem("alreadyParticipated");
let alreadyParticipated = localStorage.getItem("alreadyParticipated") === "true";
if (alreadyParticipated) {
  document.getElementById("yes").checked = checkParticipation;
} else{
  document.getElementById("no").checked = checkParticipation;
}
//get API
function getGrandmasters() {
  grandmasters.forEach((item, index) => {
    const grandmastersList = document.createElement("div");

    grandmastersList.className = "chessGrands";
    grandmastersList.id = item.id;
    grandmastersList.addEventListener("click", getValue);
    grandmastersList.innerText = item.name;

    grandPicturesURL = `https://chess-tournament-api.devtest.ge/${item.image}`;
    grandmastersList.style.backgroundImage = `url(${grandPicturesURL})`;
    

    selectMaster.appendChild(grandmastersList);
  });
}
const getValue = (elem) => {
  if (selectMaster.innerHTML == null) {

    getGrandmasters();

  } else{
    const selectedMasters = document.getElementById(`${elem.path[0].id}`).id;
    const chosen = elem.path[0].innerHTML;

    selectAvatar.innerHTML = chosen;
    selectMaster.innerHTML = null;

    localStorage.setItem("avatar", parseInt(selectedMasters));
    localStorage.setItem("chosedAvatar", chosen);
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
  if (
    !localStorage.experience ||
    !localStorage.avatar||
    !localStorage.alreadyParticipated
  ) {
    document.getElementById("experienceActive").style.backgroundColor = "#E9FAF1"
  }
  // make select div for grandmasters
  selectAvatar.className = "experience";
  selectAvatar.id = "grandmaster";
  selectAvatar.addEventListener("click", showGrands);
  
  avataSelectionDiv.appendChild(selectAvatar);

  try {
    const response =  await fetch(
      "https://chess-tournament-api.devtest.ge/api/grandmasters",
    ) 
  grandmasters = await response.json();
  
} catch(error) {
  console.log(error)
}
}

// select
const formFuncSelect = elem =>  localStorage.setItem("experience", elem.value);
const radioButton = () => {
  localStorage.setItem(
    "alreadyParticipated",
    document.getElementById("yes").checked
  );
};

// Done submiting
const doneSubmit = (elem) => {
  if (
    !localStorage.experience ||
    !localStorage.avatar ||
    !localStorage.alreadyParticipated
  ) {
    errorAlert.innerHTML = `<span>!</span> Something is missing`;
    errorMessage.innerHTML = `Please fill all forms `
    wrongValidity.remove();
    wrongValidity.classList = "error-box";
    form.appendChild(wrongValidity)

    errorAlert.classList = "error-alert";
    wrongValidity.append(errorAlert)

    errorMessage.classList = "error-message"
    wrongValidity.append(errorMessage)
    setTimeout( () => {
      wrongValidity.remove();
    }, 5000)
    // alert("Please fill all forms");
  } else {
    elem.children[0].href = "thank-u-page.html";
  }
};