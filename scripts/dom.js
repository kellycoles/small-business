// import htmlRep from "./factory.js"

const output = document.querySelector("#output")

const renderToDom = (parsedEntries) => {
    // console.log('parsedEntries: ', parsedEntries);
        for (const employee of parsedEntries) {
        const employeeHTML = htmlRep(employee)
       output.innerHTML += employeeHTML
    }
}

const htmlRep = (employee) => {
    return `
    <article class="employee">
        <header class="employee__name">
            <h1>${employee.name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${employee.department.department} department
        </section>
        <section class="employee__computer">
            Currently using a ${employee.computer.type}
        </section>
    </article>`
    }

export default renderToDom