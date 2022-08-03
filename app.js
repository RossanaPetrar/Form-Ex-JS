// Judet and Localitate inputs linked

const judetOption = document.querySelector(".judet-container");
const localitateContainer = document.querySelector("#localitate");

function onChange() {
  let text = judetOption.options[judetOption.selectedIndex].text;

  if (text === "Cluj") {
    localitateContainer.innerHTML = `
        <option selected>-</option>
        <option value="Cluj-Napoca" class="localitate" name="localitate">Cluj-Napoca</option>
        <option value="Turda" class="localitate" name="localitate">Turda</option>
        <option value="Huedin" class="localitate" name="localitate">Huedin</option>
        `;
  } else if (text === "Bihor") {
    localitateContainer.innerHTML = `
        <option selected>-</option>
        <option value="Oradea" class="localitate" name="localitate">Oradea</option>
        <option value="Alesd" class="localitate" name="localitate">Alesd</option>
        <option value="Beius" class="localitate" name="localitate">Beius</option>
        `;
  }
}
judetOption.onchange = onChange;
onChange();

// POST

const addPost = document.querySelector(".add-post-form");
const url = "http://localhost:3000/client";

addPost.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submited");
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nume: nume.value,
      prenume: prenume.value,
      adresa: adresa.value,
      judet: judet.value,
      localitate: localitate.value,
      email: email.value,
      parola: parola.value,
      telefon: telefon.value,
    }),
  })
    .then((response) => {
      console.log(response.json());
      return response.json();
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {
  window.open("result.html");
});
