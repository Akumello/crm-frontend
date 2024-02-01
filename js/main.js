const statusDropdown = document.querySelector('#statusDropdown');
const btnAddContact = document.querySelector('#btn-add-contact');
const tableContacts = document.querySelector('#table-contacts');

statusDropdown.addEventListener('change', e => {
  const status = e.target.value;

  switch (status) {
    case 'Yes':
      console.log(1);
      break;
    case 'Pending Questions':
      console.log(2);
      break;
    case 'Pending Additional Review':
      console.log(3);
      break;
    case 'No - Archive':
      console.log(4);
      break;
    case 'No - Delete':
      console.log(5);
      break;
  
    default:
      break;
  }
});

btnAddContact.addEventListener('click', e => {
  // Append input html td data to table's innerHTML
  const newRow = '<tr><td><input type="text" placeholder="John" class="input input-bordered w-24" /></td><td><input type="text" placeholder="PM" class="input input-bordered w-32" /></td><td><input type="text" placeholder="jsmith@email.com" class="input input-bordered w-36" /></td><td><input type="text" placeholder="(555) 555-5555" class="input input-bordered w-32" /></td></tr>';
  tableContacts.innerHTML += newRow;
});

// CHATGPT
// JavaScript code to handle the dynamic status window updates
// document.addEventListener('DOMContentLoaded', function () {
//   const statusDropdown = document.querySelector('#statusDropdown');
//   const dynamicStatusWindow = document.querySelector('#dynamicStatusContent');

//   statusDropdown.addEventListener('change', function (event) {
//     updateDynamicStatusWindow(event.target.value);
//   });

//   function updateDynamicStatusWindow(status) {
//     dynamicStatusWindow.innerHTML = ''; // Clear the current content

//     if (!status) {
//       dynamicStatusWindow.innerHTML = '<p>Please select a status to add relevant information.</p>';
//       return;
//     }

//     if (status === 'Yes') {
//       dynamicStatusWindow.innerHTML = `
//         <p>How many requirements are needed for your proposal?</p>
//         <input type="number" id="requirementsCount" class="input input-bordered w-full mb-2" placeholder="Enter number" />
//         <div id="requirementsList"></div>
//       `;

//       // Event listener for requirements count input
//       document.querySelector('#requirementsCount').addEventListener('input', function (e) {
//         const count = parseInt(e.target.value, 10);
//         const requirementsList = document.querySelector('#requirementsList');
//         requirementsList.innerHTML = ''; // Clear the current list

//         for (let i = 1; i <= count; i++) {
//           requirementsList.innerHTML += `
//             <div class="mb-2">
//               <label class="inline-block text-gray-700">Requirement ${i}</label>
//               <input type="text" class="input input-bordered w-full mb-2" placeholder="Enter requirement here" />
//               <button class="btn">Upload Document</button>
//             </div>
//           `;
//         }
//       });
//     }

    // Add additional cases for other status values and update the DOM accordingly
//   }
// });