interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "John", lastName: "Doe" };

let element = <HTMLInputElement> document.getElementById("content");
element.innerHTML = greeter(user);