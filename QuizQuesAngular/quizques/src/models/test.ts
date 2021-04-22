export class Test{
    id: number;
    testName: number;
    marks: number;
    noOfQues: number;
    activeStatus = true;

    constructor(id, testName, marks, noOfQues)
    {
        this.id = id;
        this.testName = testName;
        this.marks = marks;
        this.noOfQues = noOfQues;
    }
}