// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++)
{
 if    (i % 2 != 0)
{ 
    console.log(" "+i+" is an odd number.");
}
 else continue;
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++)
{
 if    (i % 5 == 0 && i % 3 == 0)
{ 
    console.log("FIZZBUZZ");
}
else if    (i % 5 == 0)
{ 
    console.log("BUZZ");
}
else if    (i % 3 == 0)
 { 
     console.log("FIZZ");
 }
 else continue;
}

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("1 While Loop\n");
let i = 0
while (i++ < 100) 
{
    if (i % 2 != 0)
    console.log(" "+i+" is an odd number.");
}

console.log("1 Do While Loop");
z = 0;
do {
    if (z % 2 != 0)
    console.log(" "+z+" is an odd number."); 
} while (z++ < 100) ;


console.log("2 While Loop");
let y = 0
while (y++ < 100) 
{
    if    (y % 5 == 0 && y % 3 == 0)
{ 
    console.log("FIZZBUZZ");
}
else if    (y % 5 == 0)
{ 
    console.log("BUZZ");
}
else if    (y % 3 == 0)
 { 
     console.log("FIZZ");
 }
 else continue;  
}


console.log("2 Do While Loop");
let x = 0;
do 
{
    if    (x % 5 == 0 && x % 3 == 0)
{ 
    console.log("FIZZBUZZ");
}
else if    (x % 5 == 0)
{ 
    console.log("BUZZ");
}
else if    (x % 3 == 0)
 { 
     console.log("FIZZ");
 }
 else continue;     
} while (x++ <100);


//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let index = 0; index <= n; index++) 
{
    
    if (index == value) 
    {
        console.log(`Found ${value}!`);
        break;
    }
    else if (index == n)
    {
        console.log(`Didn't find ${value} within 0 - ${n}`);
    }
}