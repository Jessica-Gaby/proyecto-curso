import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { GradeBookSetup } from "./entities/gradeBookSeutp";


let students: Student[] = [];
let teachers: Teacher[] = [];
let activities : activity [] = [];
//let courses : course [] = [];
let gradesBook : GradeBookSetup  []=[];

enum Course{
    Programacion = "Programacion Visual",
    BaseDatos = " Base de Datos",
    Metodologias = "Metodologias",
}

enum Area{
    Desarrolo = "Desarrrollo de software",
    Marketing = " Marketing",
    Turismo = "turismo",
}

function addStudent():void{

    let currentStudent : Student = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    }
    students.push(currentStudent);
    console.table(students);
};


function addTeacher(){

    let currentTeacher : Teacher = {
        name: readFromHtml("name-teachers"),
        identification: parseInt(readFromHtml("identification-teachers")),
        gmail: readFromHtml("mail-teachers"),
        adress: readFromHtml("adress-teachers"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        area: readFromHtml("area"),
    }
    teachers.push(currentTeacher);
    console.table(teachers);
};


function addactivities (){

    let currentActivity : activity = {
        name_activity : readFromHtml("name_activity")


    }
    activities.push(currentActivity);
    console.table(activities);
};


/*function addcourses (){

    let currentCourse :course = {
         name_courses : readFromHtml("name_courses"),
         number_hours : parseInt(readFromHtml("number_hours")),
         parallel : readFromHtml("parallel")
    }
    courses.push(currentCourse);
    console.table(courses);
};*/



function addGradeBookSetup():void{

    let currentGrade : GradeBookSetup = {
        value: readFromHtml("value_gradebook"),
        course:readFromHtml("course-gradebook"),
        activity: readFromHtml("activity-gradebook"),
        maximunGrade: parseInt(readFromHtml("maximun_gradebook")),
        
    }
    gradesBook.push(currentGrade);
    console.table(gradesBook);
    
}

function initCourse():void{
   let courseGradebook=document.getElementById("course-gradebook") as HTMLSelectElement;

   let courses =Object.values(Course);
   courses.forEach(
    (value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
        courseGradebook.add(option);
    }
   )
}

initCourse();

function initArea():void{
    let area=document.getElementById("area") as HTMLSelectElement;
 
    let areas =Object.values(Area);
    areas.forEach(
     (value) => {
         let option = document.createElement("option");
         option.value = value;
         option.text = value,
         area.add(option);
     }
    )
 }
 initArea();

function readFromHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;

}

