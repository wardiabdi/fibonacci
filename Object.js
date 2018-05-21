
// let team = {
//     "Id": 0012,
//     "Name": "James",
//     "Surname": "John",
//     "Dept": "HR"
// };

// let person = {
//     Id: "",
//     name: "",
//     lastname: "",
//     age: null,
//     qualifications: "",
//     skillSet: ["JS", "HTML", "CSS"]
//       Department: "",
//     Experience: "8",
//     pes

// };


let person = function createPerson(Id, Firstname, Lastname, Age, Title, Qualifications, Department, ExperienceYears) {

    let Person = {
        Id: Id,
        Firstname: Firstname,
        Lastname: Lastname,
        Age: Age,
        Title: Title,
        Qualifications: Qualifications,
        Department: Department,
        ExperienceYears: ExperienceYears
    };

    return Person;
}



let mPerson = person('10', 'Smith', 'Wardi');
console.log(mPerson);

// console.log(mPerson.Firstname);
console.log(mPerson['Lastname']);

mPerson.Firstname = 'John';


mPerson['Lastname'] = 'Ronaldo';
console.log(mPerson['Lastname']);
