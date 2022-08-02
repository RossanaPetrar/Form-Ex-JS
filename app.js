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

// Getting form values as JSON

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  console.log(JSON.stringify(value, null, 2));
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
