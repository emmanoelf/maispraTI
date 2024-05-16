const template = ['v','f','v','v','v','f','f','v','f','f','f','f','f','v','v','f','v','f','f','f'];
const possible_answer = ['v','f'];

function fulfillExam(possible_answer){
    const response = new Array(20);

    for(let i = 0; i < response.length; i++){
        let select_answer = possible_answer[Math.floor(Math.random() * possible_answer.length)];
        response[i] = select_answer;
    }

    return response;
}

function gradeTest(template){
    const students = new Array(50);

    for(let i = 0; i < students.length; i++){
        students[i] = fulfillExam(possible_answer);
    }

    students.forEach(student => {
        studentGrade(template, student);
    });

}

function studentGrade(template, answer_student){
    let correct_answer = 0;
    let passing_grade = 12;
    for(let i = 0; i < template.length; i++){
        if(template[i] === answer_student[i]){
            correct_answer++;
        }
    }

    if(correct_answer >= passing_grade){
        console.log("APROVADO");
    }else{
        console.log("REPROVADO");
    }
}

function main(){
    gradeTest(template);
}

main();