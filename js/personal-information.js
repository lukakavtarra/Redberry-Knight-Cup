const checked = document.querySelectorAll(".input-placeholder input");
const activePage = document.querySelector(".active");
const form = document.getElementById("myForm");
const icon = document.querySelectorAll(".fa-circle-check");
const wrongValidity = document.createElement('div')
const errorAlert = document.createElement('p')    
const errorMessage = document.createElement('p');
let invalidType;
let invalidTitle;

const localItems = [
  "name",
  "email",
  "phone",
  "dateOfBirth",
  "experience",
  "alreadyParticipated",
  "avatar",
];

checked.forEach((item, index) => item.value = localStorage.getItem(localItems[index]));

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

};

// hide placeholder on date type input
const makeDateFormat = (elem) => {
  elem.type = "date";
  elem.parentNode.children[1].style.display = "none";
  

};

//don't allow letters in tel input
const onlyNumberKey = (evt) => {
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31  && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}


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
      invalidType = checked[i].type;
      invalidTitle = checked[i].title
      errorAlert.innerHTML = `<span>!</span> Invalid ${invalidType}`;
      errorMessage.innerHTML = `Please enter valid ${invalidTitle}`

      checked[i].style.backgroundColor = "#FFEFEF";
      checked[i].style.color = "#DC3545";
      break;
    }
};

// Validate Form
const validateForm = (elem) => {
  const checkForm = form.checkValidity();
  const url = "experience.html";

  if (checkForm) {
    elem.href = url;
  } else {

wrongValidity.remove();
wrongValidity.classList = "error-box";
form.appendChild(wrongValidity)

errorAlert.classList = "error-alert";
wrongValidity.append(errorAlert)

errorMessage.classList = "error-message"
wrongValidity.append(errorMessage)
    stylingWrongValidation();
  }
};

