const prompt = require('prompt-sync')();

function sumSalary(){
    let man_salary = 0;
    let woman_salary = 0;;
    let keep_going;

    do{
        let salary = parseFloat(prompt("Digite o salário do funcionário: "));
        let gender = prompt("Digite o sexo do funcionário entre masculino ou feminino: ").toLowerCase();

        while(gender !== "masculino" && gender !== "feminino"){
            gender = prompt("Digite o sexo do funcionário entre masculino ou feminino: ").toLowerCase();
        }

        if(gender === "masculino"){
            man_salary += salary;
        }else{
            woman_salary += salary;
        }

        keep_going = prompt("Deseja continuar a inserção de funcionários? Sim ou não ").toLowerCase();
    }while(keep_going === "sim")

    console.log("O salário total de todos os homens é R$ " + man_salary.toFixed(2));
    console.log("O salário total de todas as mulheres é R$ " + woman_salary.toFixed(2));
}

sumSalary();