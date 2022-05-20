console.log("Let's roll some dice, baby!");
console.log("---------------------------");



// Function to "roll" a die
//  Generates a random number between 1 and 6
//  Constructs a new Die object with the random number as it's value
let Roll = () => 
{
    return 1 + Math.floor(Math.random() * 6);
}

// This class is used to define a "die" object (a single "dice")
//  Each die will have a value. This value is the number that the
//  die "landed on" when it was rolled.


// A place to store the numeric "value" of a Die object
// public int Value { get; set; }

// When we construct a new Die object, this method is called
//  We call this kind of method a "constructor"
let Die=(value)=>
{
    die.Value = value;
    }

    // This method is automatically called when we create the "message" variable above
    // By the way, a JavaScript object can have a toString() method too...
    let ToString = (Value) =>
    {
        let dieString = "Unknown";

        // This "switch" statement behaves like a series of "if/else if" statements.
        //  We compare the numeric Value of the current object accross different "cases".
        //  When we find a matching case we return a string that represents an image of a die
        // Did you kow that JavaScript also has "switch" statements?
        switch (Value)
        {
            /* "case 1:" is like the following "if" statement
            if (Value == 1) {
                dieString = "one";
            }
            */
            case 1:
                if(Value === 1){
                    dieString = "one"; // These \uXXXX values are fancy unicode characters
                    break;
                }
                case 2:
                    if(Value === 2){
                        dieString = "two"; // These \uXXXX values are fancy unicode characters
                        break;
                    }
                    case 3:
                        if(Value === 3){
                            dieString = "three"; // These \uXXXX values are fancy unicode characters
                    break;
                }
                case 4:
                    if(Value === 4){
                        dieString = "four"; // These \uXXXX values are fancy unicode characters
                    break;
                }
                case 5:
                    if(Value === 5){
                        dieString = "five"; // These \uXXXX values are fancy unicode characters
                        break;
                    }
                    case 6:
                        if(Value === 6){
                            dieString = "six"; // These \uXXXX values are fancy unicode characters
                            break;
                        }
                    }
                    
        return dieString;
    }
    for (let i = 0; i < 10; i++)
    {
        let die1Value= Roll();
        let die2Value= Roll();
        let die1 = ToString(die1Value);
        let die2 = ToString(die2Value);
    
        let message = `${die1} + ${die2} == ${die1Value + die2Value}`;
        if (die1Value === die2Value)
        {
            message += " DOUBLES!";
        }
    
        console.log(message);
    }

