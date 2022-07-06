window.onload = () => {
  if (form.checkValidity() == true) {
    icon.forEach((item) => {
      item.style.display = "block";
    });
  } else {
    icon.forEach((item) => {
      item.style.display = "none";
    });
  }
};
