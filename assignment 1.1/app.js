const totalMarks = 600;

let english = +prompt("Enter Your English Number");
let math = +prompt("Enter Your Maths Number");
let chemistry = +prompt("Enter Your Chemistry Number");
let physics = +prompt("Enter Your Physics Number");
let computer = +prompt("Enter Your Computer Number");
let urdu = +prompt("Enter Your Urdu Number");


let obtainedMarks = english + math + chemistry + physics + computer + urdu;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade = (percentage >= 80) ? "A+" :
            (percentage >= 70) ? "A" :
            (percentage >= 60) ? "B" :
            (percentage >= 50) ? "C" :
            (percentage <= 50) ? "Fail": "Invalid";

document.write(`
    <div class="result">
        <h3>Result</h3>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    </div>
`);