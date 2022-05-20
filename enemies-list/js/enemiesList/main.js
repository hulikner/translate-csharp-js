console.log("My Enemies List!");
console.log("----------------");


// A function to make and return list of enemies
const getEnemies = () => 
{
    
    // Make a list of Enemy objects
    //  How would you create a collection of enemy objects in JavaScript?
    const enemies = [
        {
            FirstName: "Joshua",
            LastName: "Flowers",
            // Offenses =  [
                //     "Being a jerk to me in elementary school",
                //     "Not being nice to me in elementary school"
                // ],
            IsReallyHated: true
        },
        {
            FirstName: "Darth",
            LastName: "Vader",
            // Offenses = [
                //     "Cut off Luke's hand",
                //     "Murdered all those kids",
                //     "Unkind management practices"
                // ],
                IsReallyHated: false
            },
            {
                FirstName: "Betty",
                LastName: "Rudelady",
                // Offenses = [
                    //     "Phone calls in the theater",
                    //     "Phone calls on the bus",
                    //     "Phone calls in line at the grocery store",
                    //     "Poor conversationalist"
                    // ],
                    IsReallyHated: true
                },
                {
                    FirstName: "Leon",
                    LastName: "Peck",
                    // Offenses = [
                        //     "Keeps giving me a hotplate"
                        // ],
                        IsReallyHated: false
                    }
                ]
                
                
                return enemies;
            }
            
            const enemies = getEnemies();
            
            // foreach (Enemy myEnemy in enemies)
            for (const myEnemy of enemies)
            {
                if (myEnemy.IsReallyHated)
                {
                    console.log(`${myEnemy.FirstName} ${myEnemy.LastName} Really, really dislike!`);
                }
                else
                {
                    console.log(`${myEnemy.FirstName} ${myEnemy.LastName}`);
                }
            }
// Classes are how we define objects in C#. They help us ensure that our objects always have
//  the correct properties and methods.
// JavaScript is more flexible (but also more error-prone), so you will not need to translate
//  this class into JavaScript
// public class Enemy
// {
//     public string FirstName { get; set; }
//     public string LastName { get; set; }
//     public bool IsReallyHated { get; set; }
//     public List<string> Offenses { get; set; }
// }
