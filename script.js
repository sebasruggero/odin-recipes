const dataInfo = document.getElementById("data-info");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  const id = document.getElementById("id").value;

  if (!id) {
    dataInfo.innerHTML = "Please enter a valid ID.";
    return;
  }

  fetch(`https://data.cityofchicago.org/resource/ijzp-q8t2.json?id=${id}`)
.then(response => response.json())
.then(data => {
  const info = data[0];
  dataInfo.innerHTML = `
    <p>ID: ${info.id}</p>
    <p>Case Number: ${info.case_number}</p>
    <p>Date: ${info.date}</p>
    <p>Block: ${info.block}</p>
    <p>IUCR: ${info.iucr}</p>
    <p>Primary Type: ${info.primary_type}</p>
    <p>Description: ${info.description}</p>
    <p>Location Description: ${info.location_description}</p>
    <p>Arrest: ${info.arrest}</p>
    <p>Domestic: ${info.domestic}</p>
    <p>Beat: ${info.beat}</p>
    <p>District: ${info.district}</p>
    <p>Ward: ${info.ward}</p>
    <p>Community Area: ${info.community_area}</p>
    <p>FBI Code: ${info.fbi_code}</p>
    <p>X Coordinate: ${info.x_coordinate}</p>
    <p>Y Coordinate: ${info.y_coordinate}</p>
    <p>Year: ${info.year}</p>
    <p>Updated On: ${info.updated_on}</p>
    <p>Latitude: ${info.latitude}</p>`;
    })
    .catch(error => {
      dataInfo.innerHTML = "Error: " + error;
    });
});
