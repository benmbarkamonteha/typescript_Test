const name: string ="World";
console.log(`Hello ${name}`);

let hobbies:string[] = ["Sports","Cooking"];//array of strings take one type of data

let student :{name: string, age: number} [] = [{name: "John", age: 20}, {name: "Jane", age: 25}]; 






let user :unknown= JSON.parse('{"name": "John", "age": 30}');
if (typeof user === "object" ){
  console.log("user is an object",user);
} else {
  console.log("user is not an object", user);
}

type User ={
    name: string;
    age:number;
}

function isValidUser(user:User): User | never {
    if(user.name==="monteha"){
        console.log("user is valid", user);
        return user;
    
    }
    else {throw new Error("user is not valid");}
}
const user1 =isValidUser({name:"monteha", age:30});
console.log(user1);

//union type and type narrowing

type StatusCodes= 200|400|500;

type ApiResponse = {data:User |null,status:StatusCodes};

function handleApiResponse(response:ApiResponse){
    if(response.status===200){
        console.log("Success", response.data);
        return response.data;
    } else if (response.status===400){
        console.log("Bad Request");
    } else if (response.status===500){
        console.log("Internal Server Error");
    }
        return null;
   }


//interface and alias data 




