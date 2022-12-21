import { HolidayRoad } from "./HolidayRoad.js"

const applicationElement = document.querySelector("#holidayroad")
export const renderApp = () => {
  applicationElement.innerHTML = HolidayRoad()
}

renderApp()