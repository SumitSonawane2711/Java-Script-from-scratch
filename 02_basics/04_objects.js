//const tinder = new Object()    singleton object
const tinder = {}              //non singleton object

tinder.id="112xyz"
tinder.name = "stanely"
tinder.isLoggedIn = false

//console.log(tinder);

const regularuser = {
    email: "some@gamil.com",
    fullname: {
        userFullname: {
            firstName: "stanley",
            lastname: "more"
        }
    }
}

console.log(regularuser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
   
    {
        id :1,
        email:"X@gmail.com"
    },
    {
        id :2,
        email:"Y@gmail.com"
    },
]

user[1].email
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('name'));

//******** course Extractions using destructoring ***********

const course = {
    courseName: "javaScript",
    price: "499",
    courseInstructor: "harry"
}

const {courseInstructor: instructor} = course

console.log(instructor);

//******** json ***********

// {
//     "name": "sumit",
//     "courseName": "full stack",
//     "pice":1
// }

// {
//     {},
//     {},
//     {}
// }
