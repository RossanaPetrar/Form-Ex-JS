// GET

const clientArray = [];
const url = "http://localhost:3000/client";
const clientInfo = document.querySelector(".client-information");

window.addEventListener("load", () => {
  fetch(url, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      console.log("Raspuns JSON:", responseJSON);
      output = "";
      responseJSON.forEach((client) => {
        output += `
      <div class="card mb-3" style="width: 26rem;">
  <div class="card-body">
    <h5 class="card-title text-center">${client.nume} ${client.prenume}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Nume: </b><span>${client.nume}</span></li>
    <li class="list-group-item"><b>Prenume: </b><span>${client.prenume}</li>
    <li class="list-group-item"><b>Adresa: </b><span>${client.adresa}</span></li>
    <li class="list-group-item"><b>Judet: </b><span>${client.judet}</span></li>
    <li class="list-group-item"><b>Localitate: </b><span>${client.localitate}</span></li>
    <li class="list-group-item"><b>Adresa de email: </b><span>${client.email}</span></li>
    <li class="list-group-item"><b>Parola: </b><span>${client.parola}</span></li>
    <li class="list-group-item"><b>Numar de telefon: </b><span>${client.telefon}</span></li>
  </ul>
</div>
      `;
        clientInfo.innerHTML = output;
      });
    });
});

/* <p>Nume: <span>${client.nume}</span></p>
<p>Prenume: <span>${client.prenume}</span></p>
<p>Adresa: <span>${client.adresa}</span></p>
<p>Judet: <span>${client.judet}</span></p>
<p>Localitate: <span>${client.localitate}</span></p>
<p>Adresa de email: <span>${client.email}</span></p>
<p>Parola: <span>${client.parola}</span></p>
<p>Numar de telefon: <span>${client.telefon}</span></p> */
