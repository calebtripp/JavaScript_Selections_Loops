// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//let i = 0;
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