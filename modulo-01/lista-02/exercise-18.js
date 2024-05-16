const prompt = require('prompt-sync')();

function saveEmployee(){
    const employee = {};

    employee.name = prompt("Digite o nome do funcionário: ");
    employee.job_role = prompt("Digite o cargo do funcionário: ");
    employee.salary = parseFloat(prompt("Digite o salário do funcionário: "));

    return employee;
}

function main(){
    const employee = saveEmployee();
    console.log("Nome: " + employee.name + "\n" + "Cargo: " + employee.job_role + "\n" + "Salário: " + employee.salary);
}

main();