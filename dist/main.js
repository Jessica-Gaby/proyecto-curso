"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
//let courses : course [] = [];
let gradesBook = [];
var Course;
(function (Course) {
    Course["Programacion"] = "Programacion Visual";
    Course["BaseDatos"] = " Base de Datos";
    Course["Metodologias"] = "Metodologias";
})(Course || (Course = {}));
var Area;
(function (Area) {
    Area["Desarrolo"] = "Desarrrollo de software";
    Area["Marketing"] = " Marketing";
    Area["Turismo"] = "turismo";
})(Area || (Area = {}));
function addStudent() {
    let currentStudent = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    };
    students.push(currentStudent);
    console.table(students);
}
;
function addTeacher() {
    let currentTeacher = {
        name: readFromHtml("name-teachers"),
        identification: parseInt(readFromHtml("identification-teachers")),
        gmail: readFromHtml("mail-teachers"),
        adress: readFromHtml("adress-teachers"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        area: readFromHtml("area"),
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
;
function addactivities() {
    let currentActivity = {
        name_activity: readFromHtml("name_activity")
    };
    activities.push(currentActivity);
    console.table(activities);
}
;
/*function addcourses (){

    let currentCourse :course = {
         name_courses : readFromHtml("name_courses"),
         number_hours : parseInt(readFromHtml("number_hours")),
         parallel : readFromHtml("parallel")
    }
    courses.push(currentCourse);
    console.table(courses);
};*/
function addGradeBookSetup() {
    let currentGrade = {
        value: readFromHtml("value_gradebook"),
        course: readFromHtml("course-gradebook"),
        activity: readFromHtml("activity-gradebook"),
        maximunGrade: parseInt(readFromHtml("maximun_gradebook")),
    };
    gradesBook.push(currentGrade);
    console.table(gradesBook);
}
function initCourse() {
    let courseGradebook = document.getElementById("course-gradebook");
    let courses = Object.values(Course);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            courseGradebook.add(option);
    });
}
initCourse();
function initArea() {
    let area = document.getElementById("area");
    let areas = Object.values(Area);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            area.add(option);
    });
}
initArea();
function readFromHtml(id) {
    return document.getElementById(id).value;
}
