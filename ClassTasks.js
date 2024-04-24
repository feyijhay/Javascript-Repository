function studentScore(testScores) {
    let answer = testScores.filter((num) => num >= 70)
    return answer
}



function increaseGrades(array) {
    let answer = array.map((num) => num + 5);
    return answer
}


function squareGrades(number){
    let answer = number.map((num) => num * num);
    return answer;
}


function afternoonClasses(time) {
    if (time === "12:00PM" || time === "1:00PM" || time === "2:00PM" || time === "3:00PM" || time === "5:00PM") {
        return time
    }
}

function schedule(timing){return timing.filter(time => afternoonClasses(time))

}
module.exports = {studentScore, increaseGrades, squareGrades, schedule}

