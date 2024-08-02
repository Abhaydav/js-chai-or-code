//singleton
//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"same@google.com",
    fullName:{
        userFullName:{
            firstName:"hitesh",
            lastName:"Choudhary"
        }
    }
}
//console.log(regularUser.fullName)
//if we want to access in more inside
//console.log(regularUser.fullName.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const returnTarget=Object.assign(target,source)
const obj4=Object.assign({},obj1,obj2,obj3)
//console.log(obj4)

//we can also use

const obj5={...obj1,...obj2,...obj3}//we will use this most of the time because its new
//console.log(obj5)

const users=[
    {
        id:1,
        email:"A@google.com"
    },
    {
        id:2,
        email:"B@google.com"
    },
    {
        id:3,
        email:"C@google.com"
    }
]
//console.log(users[0].email)

//console.log(tinderUser)
//console.log(Object.keys(tinderUser))//we can find keys of object
//console.log(Object.values(tinderUser))//can access values of objects
//console.log(Object.entries(tinderUser))//can access both keys and values
//console.log(tinderUser.hasOwnProperty("isLoggedIn"))//to check this properties are in objects or not

const course={
    courseNama:"js in hindi",
    price:99,
    courseInstructor:"hitesh"
}

console.log(course)
//console.log(course.courseInstructor)//instead of accessing like that we do destrucuture

const {courseInstructor:instructor}=course
//now we can directly access the 

console.log(instructor)

