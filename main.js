console.log("Hello world");
let rose = 8;
let rose_quantity = 70;
let lily = 10;
let lily_quantity = 50;
let tulip = 2;
let tulip_quantity = 120;

function flowerValue(piece,amount){
   return piece * amount;
}

console.log(flowerValue(rose,rose_quantity));

console.log(flowerValue(lily,lily_quantity));

console.log(flowerValue(tulip,tulip_quantity));

let  name1='Maxwell Wright';
let  name2='Raja Villarreal';
let  name3='Helen Richards';

let phone1='(0191) 719 6495';
let phone2='0866 398 2895';
let phone3='0800 1111';

let email1='Curabitur.egestas.nunc@nonummyac.co.uk';
let email2='posuere.vulputate@sed.com';
let email3='libero@convallis.edu';

console.log(`${name1}/${phone1}/${email1}`);
console.log(`${name2}/${phone2}/${email2}`);
console.log(`${name3}/${phone3}/${email3}`);
console.log(typeof console.log)

year=2024
console.log(typeof year)
let typeYear = typeof year
console.log(typeYear)
console.log(typeof typeYear)

let path="C:\\\\Windows"
console.log(path)

console.log(email1-email2)//NaN
console.log('10' - '12')

console.count("Hello");
console.time();
console.timeEnd()

console.log('hello'.slice(1,5))
let variable1;
console.log(typeof null)//type is 'object'
console.log(typeof variable1)//type is 'undefined'

const numberToString = String(7);
console.log(typeof numberToString)
const numberToBoolean = Boolean(numberToString);
console.log(typeof numberToBoolean)

let ticket={
  from: 'Kitchener Go',
  end: 'Guelph Go',
  price:100
}

console.log(ticket.from,ticket.end, ticket.price);

let books = [
              { title: "Speaking JavaScript", 
              author: "Axel Rauschmayer", 
              pages: 460 }, 
              { title: "Programming JavaScript Applications", 
              author: "Eric Elliot", 
              pages: 254 }, 
              { title: "Understanding ECMAScript 6", 
              author: "Nicholas C. Zakas", 
              pages: 352 } 
            ];
  let newBook = {
    title: "Learning JavaScript Design Patterns", 
              author: "Addy Osmani", 
              pages: 254
  }
            books.push(newBook)
            console.log(books);

            console.log(books.slice(-2));    


            let name;
            let age;
            {
            let height;
            // 2
            { // 2
            { let weight; // 1 // 2
            console.log(name); // 1 // 2
            }
            // 2
               console.log(name); // 2
            }  
          }

          let height = 180;
          {
          let height = 200;
          height = height + 10;
          }
          console.log(height);
          
          let x = 10 / 100;
{
console.log(typeof (x));
}

let lx = "Alice" + 10;
console.log(lx)

let summer = ["June", "July", "August"];

summer[1] = 7;
console.log(summer[1])

let animals = ["dog", /*"cat",*/ "hamster"];
//let animals1 = ["dog", //"cat",// "hamster"];

let decision = window.confirm("Is it ok?")
console.log(decision);

let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"
console.log(message);

let username = window.prompt("What is your name?", "John Doe");
promtedname = username ? username : "anonymous";
let userage = prompt("Hello " + promtedname + " how old are you?");
alert(promtedname + " is " + userage + " years old");

                 