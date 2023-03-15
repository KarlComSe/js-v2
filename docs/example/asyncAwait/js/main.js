(async function () {
    'use strict';

    const staff = document.getElementById('staff');
    const url = 'https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/fetch/data/';
    const file = 'staff.json';

    function addDataToTable (data) {
        for (const teacher of data) {
            staff.innerHTML += `
        <tr>
            <td>${teacher.firstname}</td>
            <td>${teacher.lastname}</td>
            <td>${teacher.courses.join(", ")}</td>
        </tr>`;
        }
    }


    let data = await fetch(`${url}/${file}`);
    let json = await data.json()

    addDataToTable(json);

    window.console.log('Sandbox is ready!');
})();
