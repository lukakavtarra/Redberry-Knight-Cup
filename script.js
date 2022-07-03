const checked = document.querySelectorAll('.input-placeholder input');
const inputDiv = document.querySelectorAll(".input-placeholder");
const goodValidation = document.querySelectorAll("i");
localItems = ['name','email','phone','dateOfBirth']
checked.forEach((item,index)=> {
  item.value = localStorage.getItem(localItems[index])
})
const postApi =  async () => {
  const data = {
  "name": "Beth Harmon",
  "email": "beth@redberry.ge",
  "phone": "598125819",
  "date_of_birth": "10/20/1997",
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



  checked.forEach((item,index) => {
    if(item.value !== ""){
      localStorage.setItem(localItems[index],item.value)
      // const goodValidation = document.createElement('i');
      // goodValidation.className = "fa-regular fa-circle-check";
      // inputDiv[index].append(goodValidation);

    }else {
      localStorage.removeItem(localItems[index])
      console.log("test")
    }
  })
  postApi();
}
