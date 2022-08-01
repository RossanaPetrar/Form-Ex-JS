const judetOption = document.querySelectorAll(".judet");
const localitateContainer = document.querySelector("#localitate");
judetOption.addEventListener("focus", getLocalitati());

function getLocalitati() {
  console.log(judetOption.textContent);
  if ((judetOption.value = "Cluj")) {
    localitateContainer.innerHTML = `
    <option selected>-</option>
    <option value="Cluj-Napoca" class="localitate">Cluj-Napoca</option>
    <option value="Turda" class="localitate">Turda</option>
    <option value="Huedin" class="localitate">Huedin</option>
    `;
  } else if ((judetOption.value = "Bihor")) {
    localitateContainer.innerHTML = `
    <option selected>-</option>
    <option value="Oradea" class="localitate">Oradea</option>
    <option value="Alesd" class="localitate">Alesd</option>
    <option value="Beius" class="localitate">Beius</option>
    `;
  }
}
