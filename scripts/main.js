import API from "./data.js"
import renderToDom from "./dom.js"


    API.getEmployeeData().then((parsedEntries) => {renderToDom(parsedEntries) })

