let grandmasters;
const divMaster = document.getElementById("masters");
function getGrandmasters() {
  const grandmastersDiv = document.createElement("select");

  grandmasters.forEach((item) => {
    const grandmastersList = document.createElement("option");
    const testPictures = document.createElement("img");
    testPictures.src = item.image;
    divMaster.append(testPictures);
    grandmastersList.text = item.name;
    grandmastersDiv.options = "meoretesti";
    divMaster.append(grandmastersDiv);
    grandmastersDiv.appendChild(grandmastersList);

    console.log(item.name);
  });
}
window.onload = async () => {
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
  console.log(grandmasters);
  getGrandmasters();
};
