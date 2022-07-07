const checked = document.querySelectorAll(".input-placeholder input");
const inputDiv = document.querySelectorAll(".input-placeholder");
const goodValidation = document.querySelectorAll("i");
const activePage = document.querySelector(".active");
const form = document.getElementById("myForm");
const icon = document.querySelectorAll(".fa-circle-check");

// const geoPhoneRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;
// const redberryMail = /@redberry.ge$/;
const localItems = [
  "name",
  "email",
  "phone",
  "dateOfBirth",
  "experience",
  "alreadyParticipated",
  "avatar",
];
checked.forEach((item, index) => {
  item.value = localStorage.getItem(localItems[index]);
});

checked.forEach((item) => {
  if (item.value) {
    item.parentNode.children[1].style.display = "none";
  }
});
const formFunc = (elem) => {
  const placeHolder = elem.parentNode.children[1];
  checked.forEach((item, index) => {
    if (item.value !== "") {
      activePage.style.backgroundColor = "#E9FAF1";
      localStorage.setItem(localItems[index], item.value);
    } else {
      activePage.style.backgroundColor = "white";
      localStorage.removeItem(localItems[index]);
    }
  });

  //placeholder
  if (!elem.value) {
    placeHolder.style.display = "block";
  } else {
    placeHolder.style.display = "none";
  }
  //placeholder 2.0
  elem.parentNode.children[2].style.display = "none";
};

// hide placeholder on date type input
const makeDateFormat = (elem) => {
  elem.type = "date";
  elem.parentNode.children[1].style.display = "none";
  console.log(elem.parentNode.children)
};
//styling wrong validated forms
const stylingWrongValidation = () => {
  checked.forEach((item) => {
    item.style.backgroundColor = "white";
    item.style.color = "black";
  });

  for (let i = 0; i < checked.length; i++)
    if (checked[i].checkValidity() == true) {
      checked[i].style.backgroundColor = "white";
      checked[i].style.color = "black";
    } else {
      checked[i].style.backgroundColor = "#FFEFEF";
      checked[i].style.color = "#DC3545";
      break;
    }
};
// Validate Form
const validateForm = (elem) => {
  const checkForm = form.checkValidity();
  const url = "./experience.html";

  if (checkForm) {
    elem.children[0].href = url;
  } else {
    stylingWrongValidation();
  }
};


/////////
