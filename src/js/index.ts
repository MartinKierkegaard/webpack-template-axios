import axios, {
    AxiosResponse,
    AxiosError} 
from "../../node_modules/axios/index"

interface Person {
    firstName: string;
    lastName: string;
}


interface ITodo {
    userId: number;
    id : number
    title : string;
    completed : boolean;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let contentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
// contentElement.innerHTML = greeter(user);
console.clear;

let todoId:number = 1;

function performGetRequest1() {
    // var resultElement = document.getElementById('getResult1');
    // resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos',{
        params:{
            id : todoId
        }
    })
      .then(function (response:AxiosResponse<ITodo[]>):ITodo[] {
                   console.log("I THEN 1");
          response.data.forEach(element => {
              console.log (`id:${element.id}, title: ${element.title}`);
          
          });
          console.log("I Then 1 slut");    
          
          return response.data;
        // resultElement.innerHTML = return response;
      })
      .then(function (response:ITodo[]):void {
        console.log("I THEN2");
        response.forEach(element => {
            console.log (element.title);
           contentElement.innerHTML = "<h4>"+element.title +"</h4>"
        });
        console.log("I THEN 2 slut"); 
        // return response.data;

    }).catch(function (error) {
        // resultElement.innerHTML = "";
        console.log("fejl");
      });   
  }

  performGetRequest1();