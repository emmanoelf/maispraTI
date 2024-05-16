const employees = [
    { registration: 12, name: "Geralt de Rívia", gross_salary: 4000.00},
    { registration: 15, name: "Batman", gross_salary: 999999.99},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
    { registration: 20, name: "Triss Merigold", gross_salary: 5000.00},
];

function calculateInssDeduction(gross_salary){
    let inss_deduction = 0.12;
    return gross_salary * inss_deduction;
}

function calculateNetSalary(gross_salary, inss_deduction){
    return  gross_salary - inss_deduction;
}

function generatePaycheck(employee){
    const deduction_inss = calculateInssDeduction(employee.gross_salary).toFixed(2);
    const net_salary = calculateNetSalary(employee.gross_salary, deduction_inss).toFixed(2);

    console.log("Matrícula: " + employee.registration + "\n" + "Nome: " + employee.name + "\n" 
    + "Salário Bruto: " + employee.gross_salary.toFixed(2) + "\n" + "Dedução INSS: " + deduction_inss + "\n" 
    + "Salário Líquido: " + net_salary);
    console.log("------------------------------------")
}

function main(employees){
    employees.forEach(employee => generatePaycheck(employee));
}

main(employees);