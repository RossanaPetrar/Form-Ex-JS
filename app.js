const judetOption = document.querySelector(".judet-container");
const localitateContainer = document.querySelector("#localitate");

function onChange() {
  let text = judetOption.options[judetOption.selectedIndex].text;

  if (text === "Cluj") {
    localitateContainer.innerHTML = `
        <option selected>-</option>
        <option value="Cluj-Napoca" class="localitate">Cluj-Napoca</option>
        <option value="Turda" class="localitate">Turda</option>
        <option value="Huedin" class="localitate">Huedin</option>
        `;
  } else if (text === "Bihor") {
    localitateContainer.innerHTML = `
        <option selected>-</option>
        <option value="Oradea" class="localitate">Oradea</option>
        <option value="Alesd" class="localitate">Alesd</option>
        <option value="Beius" class="localitate">Beius</option>
        `;
  }
}
judetOption.onchange = onChange;
onChange();
