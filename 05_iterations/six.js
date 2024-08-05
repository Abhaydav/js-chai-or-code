//here we will learn about filter Method

const books=[
    {title:"book one",genre:"Fiction",publish:"1981",edition:"2004"},
    {title:"book two",genre:"Non-Fiction",publish:"1992",edition:"2008"},
    {title:"book three",genre:"History",publish:"1999",edition:"2007"},
    {title:"book four",genre:"Science",publish:"1989",edition:"2010"},
    {title:"book five",genre:"History",publish:"1981",edition:"2004"},
    {title:"book six",genre:"Science",publish:"1989",edition:"2008"}

]
// const userBooks=books.filter((bk)=> bk.genre==="History")
// console.log(userBooks);

const userBooks=books.filter((bk)=> bk.genre==="History" && bk.publish==="1981")
console.log(userBooks);
