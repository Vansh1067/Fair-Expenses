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
function addExpenses(){
    buttonUI.classList.toggle('hide');
    expensesUI.classList.toggle('hide'); 
}
function addGroup(){
buttonUI.classList.toggle('hide');
RegistrationUI.classList.toggle('hide');
}
function addReport(){
    buttonUI.classList.toggle('hide');
    reportUI.classList.toggle('hide'); 
}
function addMembersName(){
    RegistrationUI.classList.toggle('hide');
    addMemberName.classList.toggle('hide');

}
function addMemberNameButton(){
    addMemberName.classList.toggle('hide');
    buttonUI.classList.toggle('hide');

}
newRegistrationButton.addEventListener('click',addGroup);
expensesButton.addEventListener('click',addExpenses);
reportButton.addEventListener('click',addReport);
addGroupCancelButton.addEventListener('click',addGroup);
addExpensesCancelButton.addEventListener('click',addExpenses);
groupNamesBackButton.addEventListener('click',addReport);
addGroupAddButton.addEventListener('click',addMembersName);
addMemberNameAddButton.addEventListener('click',addMemberNameButton);