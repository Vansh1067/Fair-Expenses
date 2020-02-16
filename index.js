const newRegistrationButton=document.getElementById('newreg');
const expensesButton=document.getElementById('expens');
const reportButton =document.getElementById('report');
const buttonUI=document.getElementById('buttonUI');
const RegistrationUI=document.getElementById('RegistrationUI');
const expensesUI=document.getElementById('expensesUI');
const reportUI=document.getElementById('reportUI');
const addGroupAddButton=document.getElementById('addGroupAddButton');
const addGroupCancelButton=document.getElementById('addGroupCancelButton')
const addExpensesAddButton=document.getElementById("addExpensesAddButton");
const addExpensesCancelButton=document.getElementById("addExpensesCancelButton");
const groupNamesBackButton=document.getElementById('groupNamesBackButton');
const addMemberName=document.getElementById('addMemberName');
const addMemberNameAddButton=document.getElementById('addMemberNameAddButton');
const addMemberNameResetButton=document.getElementById('addMemberNameResetButton');
const addMemberNameInput=document.querySelectorAll('.input-content input');
const addgroupNameInput=document.querySelectorAll('.Registration input');
const addExpensesInput=document.querySelectorAll('.Expenses input');
const addButtonImg=document.getElementById('addButtonImg');
const inputDiv=document.querySelector('.input-content');
function addExpensesCancel(){
    buttonUI.classList.toggle('hide');
    expensesUI.classList.toggle('hide'); 
    reset(addExpensesInput);
}
function addGroup(){
buttonUI.classList.toggle('hide');
RegistrationUI.classList.toggle('hide');
reset(addgroupNameInput);
}
function addReport(){
    buttonUI.classList.toggle('hide');
    reportUI.classList.toggle('hide'); 
    
    
}
function addMembersName(){
    RegistrationUI.classList.toggle('hide');
    addMemberName.classList.toggle('hide');
    reset(addMemberNameInput);

}
function addMemberNameButton(){
    addMemberName.classList.toggle('hide');
    buttonUI.classList.toggle('hide');

}
function reset(arrays){
    arrays.forEach(event=>{
            event.value="";
    });
}
function addExpensesDetails(){
    addExpensesCancel();

}
function addMoreMember(){
     inputMember=document.createElement("input");
     inputMember.setAttribute('type','text');
     inputMember.setAttribute('placeholder','Enter Member Name.....');
     inputDiv.appendChild(inputMember);
}
newRegistrationButton.addEventListener('click',addGroup);
expensesButton.addEventListener('click',addExpensesCancel);
reportButton.addEventListener('click',addReport);
addGroupCancelButton.addEventListener('click',addGroup);
addExpensesCancelButton.addEventListener('click',addExpensesCancel);
addExpensesAddButton.addEventListener('click',addExpensesDetails);
groupNamesBackButton.addEventListener('click',addReport);
addGroupAddButton.addEventListener('click',addMembersName);
addMemberNameAddButton.addEventListener('click',addMemberNameButton);
addMemberNameResetButton.addEventListener('click',reset.bind(this,addMemberNameInput));
addButtonImg.addEventListener('click',addMoreMember);