import add from "./modules.js";
import { Person } from "./modules.js";
import { name , age } from "./named.js";
import fetchData from "./default.js";
import * as a from "./entire_module.js"
import axios from "axios";
// Activity 1
console.log(add(4,5))
console.log(Person.getDetails())
// Activity 2
console.log(name,age)
console.log(fetchData())
console.log(a.data)
console.log(a.age)
a.default()
// Activity 3
axios.get("https://jsonplaceholder.typicode.com/todos/1").then(data => console.log(data.data))
