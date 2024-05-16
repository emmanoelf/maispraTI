const population = [
    { salary: 4500.00, number_children: 2 },
    { salary: 5700.00, number_children: 1 },
    { salary: 2300.00, number_children: 1 },
    { salary: 1350.00, number_children: 0 },
    { salary: 350.00, number_children: 0 },
    { salary: 250.00, number_children: 0 },
];

function populationStatistics(population){
    let sum_salary = 0;
    let sum_number_children = 0;
    let highest_salary = Number.NEGATIVE_INFINITY;
    let salary_low = 0;

    population.forEach(citizen => {
        sum_salary += citizen.salary;
        sum_number_children += citizen.number_children;

        if(citizen.salary > highest_salary){
            highest_salary = citizen.salary;
        }

        if(citizen.salary <= 350){
            salary_low++;
        }
    });

    const average_salary = sum_salary / population.length;
    const average_number_children = sum_number_children / population.length;
    const percentage_salary_low = (salary_low / population.length) * 100;
    
    return { average_salary, average_number_children, highest_salary, percentage_salary_low }
}

function main(){
    const {average_salary, average_number_children, highest_salary, percentage_salary_low } = populationStatistics(population);
    console.log("Média de salários: " + average_salary.toFixed(2) + "\n" + "Média de número de filhos: " + average_number_children.toFixed(2)  + "\n" +
    "Salário mais alto: " + highest_salary.toFixed(2)  + "\n" + "Percentual de pessoas com salário até R$ 350,00: " + percentage_salary_low.toFixed(2) + "%" );
}

main();