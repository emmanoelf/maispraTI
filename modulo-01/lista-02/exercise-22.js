const prompt = require('prompt-sync')();

function populationStatistics(){
    let population = [];
    let highest_salary = Number.NEGATIVE_INFINITY;
    let sum_salary = 0;
    let sum_number_children = 0;
    let salary_low = 0;
    let option;

    do{
        let salary = parseFloat(prompt("Digite o salário do(a) cidadão(ã): "));

        while(isNaN(salary)){
            salary = parseFloat(prompt("Valor inválido. Por favor, digite o salário do(a) cidadão(ã): "));
        }

        let number_children = parseInt(prompt("Digite a quantidade de filhos: "));
        while(isNaN(number_children)){
            number_children = parseInt(prompt("Valor inválido. Por favor, digite a quantidade de filhos: "));
        }

        let citizen = { salary, number_children };
        population.push(citizen);
        option = parseInt(prompt("Digite 1 para adicionar pessoas na tabela ou 0 para sair: "));
    }while(option !== 0);

    population.forEach(element => {
        sum_salary += element.salary;
        sum_number_children += element.number_children;
        
        if (element.salary > highest_salary) {
            highest_salary = element.salary;
        }
        if (element.salary <= 350) {
            salary_low++;
        }
    });

    const average_salary = sum_salary / population.length;
    const average_number_children = sum_number_children / population.length;
    const percentage_salary_low = (salary_low / population.length) * 100;
    return { average_salary, average_number_children, highest_salary, percentage_salary_low };
}

function main(){
    const {average_salary, average_number_children, highest_salary, percentage_salary_low } = populationStatistics();
    console.log("Média de salários: " + average_salary.toFixed(2) + "\n" + "Média de número de filhos: " + average_number_children.toFixed(2)  + "\n" +
    "Salário mais alto: " + highest_salary.toFixed(2)  + "\n" + "Percentual de pessoas com salário até R$ 350,00: " + percentage_salary_low.toFixed(2) + "%" );
}

main();