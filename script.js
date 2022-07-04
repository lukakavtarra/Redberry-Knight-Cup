const checked = document.querySelectorAll('.input-placeholder input');
const inputDiv = document.querySelectorAll(".input-placeholder");
const goodValidation = document.querySelectorAll("i");
const geoPhoneRegex =  /^(\+?995)?(79\d{7}|5\d{8})$/;
const redberryMail = /@redberry.ge$/;
localItems = ['name','email','phone','dateOfBirth'];

checked.forEach((item,index)=> {
  item.value = localStorage.getItem(localItems[index])
})
const postApi =  async () => {
  const data = {
  "name": localStorage.name,
  "email": localStorage.email,
  "phone": localStorage.phone,
  "date_of_birth": localStorage.dateOfBirth,
  "experience_level": "beginner",
  "already_participated": true,
  "character_id": 2,  
}
  const response = await fetch('https://chess-tournament-api.devtest.ge/api/register', {
  method: "POST",   
  headers:{
          'Accept': "application/json",
          'Content-Type': "application/json",
      },
      body: JSON.stringify(data)
  }).then( res => {
    console.log("request Complete Response:",res);
  });
}
const mySubmit = () => {




  postApi();
}
checked.forEach(item => {
  if(item.value !== "") {
    item.parentNode.children[1].style.display = "none";
  }
})
const formFunc = (elem) => {
  checked.forEach((item,index) => {
    if(item.value !== ""){
      localStorage.setItem(localItems[index],item.value);

    }else {
      localStorage.removeItem(localItems[index]);
    }
  })
const placeHolder = elem.parentNode.children[1];
// match redberry mail regex
  if(elem.type == "email" && elem.value.match(redberryMail)){
    elem.style.backgroundColor = "white";
  } else if (elem.type == "email") {
    elem.style.backgroundColor = "#FFEFEF";
  }
  //placeholder
  if(elem.value == ""){
    placeHolder.style.display = "block";
  }else {
    placeHolder.style.display = "none";
  }
}
// hide placeholder on date type input
const makeDateFormat = (elem) => {
  elem.type='date'
  console.log(elem.parentNode.children[0])
  elem.parentNode.children[1].style.display = "none"
}