


export const HolidayRoad = () => {
  return `
    <h2>Holiday Road</h2>
  
    <div class="dropdownBoxes">
      <div class="parkDropdown dropdown">
        <select><option> parks </option></select>
      </div>

      <div class="bizarreDropdown dropdown">
        <select><option> bizarres </option></select>
      </div>

      <div class="eateryDropdown dropdown">
        <select><option> eateries </option></select>
      </div>
    </div>
    
    <div class="mainContent">
      <div class="chosenOptions">
        <div class="optionsDisplay">
          <h3>Your Itinerary</h3>
          <div class="chosenPark">Park</div>
          <div class="chosenBizarre">Bizarre</div>
          <div class="chosenEatery">Eatery</div>
      

        <button style="width:100px" class="saveButton">SAV3</button>
        </div>

        <div class="weatherDisplay">
        <h3>WEATHER</h3>
        </div>
      </div>

      <div class="savedOptions">
        <h3>saved itinerary list</h3>
      </div>


    </div>
    `
}