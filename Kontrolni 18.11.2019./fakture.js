const companyNameContainer = document.querySelector('#txt-company-name');
const companyPIBContainer = document.querySelector('#txt-company-pib');
const fakturaValue = document.getElementById('txt-value');
const insertBtn = document.querySelector('#btn-add');
const dateTxt = document.querySelector('#txt-time');
//console.log(fakturaValue);

const itemList1 = document.querySelector('#item-list'); //veliki div gde su fakture

insertBtn.addEventListener('click', submitF);
insertBtn.addEventListener('click', saveObject);
var arrayF = []; 


function submitF (e) {
    
    let itemList = document.createElement('div');
    itemList.className = 'item-container';
    
    let textCompany = companyNameContainer.value + ' ';
    if(textCompany == ""){
        alert('Task Title can not be empty!');
        return;
    }
    let textPIB = companyPIBContainer.value + ' ';
    if (textPIB.length !== 8 && isNaN(textPIB)) {
        alert("Company's PIB number must be 8 digits long");
        return;
    }
    let textValue = fakturaValue.value + ' ';
     if ( isNaN(textValue) == true) {                     //!!!!!!!!!!
         alert("Value mustn't contain any letters, only numbers");
         return;
    }

    let itemInfo = document.createElement('div');                                       //ceo div gde je informacija 
    itemInfo.className = 'item-info';
    console.log(itemInfo)
    
    let itemInfo1 = document.createElement('div');                  //div gde će biti label-li faktura
    itemInfo1.className = 'item-info1';

    let companyName = document.createElement('label'); 
    companyName.className = 'company-name';                                                               //label za ime kompanije
    companyName.innerHTML = textCompany;
    let companyPIB = document.createElement('label');                   //label za PIB komapnije
    companyPIB.innerHTML = textPIB;
    companyPIB.className = 'company-pib';
    let companyValue = document.createElement('label');
    companyValue.className = 'price-value';
    companyValue.innerHTML = ' ' + textValue + 'RSD';
    let date = document.createElement('label');
    date.classname = 'time-created';
    date.innerHTML = dateTxt.value;

    itemInfo.appendChild(companyName);
    itemInfo.appendChild(companyPIB);
    itemInfo.appendChild(date);
    itemInfo.appendChild(companyValue);
    
    let timeStampDiv = document.createElement('div');
    timeStampDiv.className = 'time-stamp-div';
    console.log(timeStampDiv);

    let timeStampLabel = document.createElement('label');
    timeStampLabel.className = 'insert-timestamp';
    let dateTimeNow = new Date();
    timeStampLabel.innerHTML = `[${dateTimeNow.getFullYear()}-${dateTimeNow.getMonth()}-${dateTimeNow.getDate()}@${dateTimeNow.getHours()}:${dateTimeNow.getMinutes()}]`;
    console.log(timeStampLabel)
    timeStampDiv.appendChild(timeStampLabel);


    let deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.class = 'item-actions';
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'item-trashCan';
    deleteBtn.innerHTML = 'DELETE';
    deleteBtn.addEventListener('click', deleteF);
    
    deleteBtnDiv.appendChild(deleteBtn);
    
    itemList.appendChild(itemInfo);
    itemList.appendChild(timeStampDiv);
    itemList.appendChild(deleteBtnDiv);

    itemList1.appendChild(itemList);

    companyNameContainer.value = '';
    companyPIBContainer.value = '';
    fakturaValue.value = '';
    dateTxt.value = '';


}

function deleteF (e) {              //nije urađeno na testu - izbacivalo je can't do appendchild of null 
    // let itemContainter = document.querySelector('#item-container');
    // itemContainter.remove();
    e.target.parentElement.parentElement.remove();
}

function saveObject (e) {
     
    let date = new Date();          
    let object = {
    name: companyNameContainer.value,
    pib:companyPIBContainer.value,
    dateIssued:dateTxt.value,
    value:fakturaValue.value,
    currency:"RSD",
    timeStamp:`${date.getHours}:${date.getMinutes}:${date.getSeconds}`,
    dateStamp:`${date.getFullYear}-${date.getMonth}-${date.getDate}`
    }
    arrayF.push(object);
    return console.log(arrayF);
}