let {studentScore, increaseGrades, squareGrades, schedule} = require("./ClassTasks")

test("studentScore", ()=>{
    let testScores = [70, 30, 80, 67, 50, 82, 25, 40, 65, 100];
    let answer = [70,80,82,100]
    let result = studentScore(testScores)
    expect(result).toEqual(answer)
})

test("increaseGrades", ()=>{
    let grades =[85, 92, 78, 88, 95];
    let answer = [90, 97, 83, 93, 100];
    let result = increaseGrades(grades);
    expect(result).toEqual(answer)
})

test("squareGrades", ()=>{
    let studentGrades=[2,4,6,8,10];
    let answer = [4,16,36,64,100];
    let result = squareGrades(studentGrades);
    expect(result).toEqual(answer)
})


test("afternoonClass", ()=>{
    let  time = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"]
    let answer = ["1:00PM", "3:00PM", "5:00PM"]
    let result = schedule(time)
    expect(result).toEqual(answer)

})

