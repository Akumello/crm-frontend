const inputBidName = document.querySelector('#input-bid-name');
const inputDepartment = document.querySelector('#input-department');
const inputAgency = document.querySelector('#input-agency');
const inputOffice = document.querySelector('#input-office');
const inputName = document.querySelector('#input-name');
const inputPhone = document.querySelector('#input-phone');
const inputEmail = document.querySelector('#input-email');
const inputTitle = document.querySelector('#input-title');

const btnSave = document.querySelector('#btn-save');

btnSave.addEventListener('click', e => {
  console.log(generateJSON());
});

function generateJSON() {
    let json = JSON.stringify
    ({
        'bid-name': inputBidName.value, 
        'department': inputDepartment.value, 
        'agency': inputAgency.value,
        'office': inputOffice.value,
        'name': inputName.value,
        'phone': inputPhone.value,
        'email': inputEmail.value,
        'title': inputTitle.value
      }
    );

    return json;
}