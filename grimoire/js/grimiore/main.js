



const GetAllSpells = () =>
{
    let allSpells =  [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ];
    
    return allSpells;
}


let DisplaySpellBook = (book) =>
{   
    // console.log(book)
    book.forEach(book => console.log(`     ${book.Name}`))
}


const MakeEvilSpellBook = (allSpells) =>
{
    // SpellBook evilBook = SpellBook();
    let evilBook= allSpells;
    evilBook = evilBook.filter(spell => spell.IsEvil===true)
    // evilBook.Spells = allSpells.Where(spell => spell.IsEvil).ToList();
    // console.log(evilBook)
    return evilBook;
}


const MakeGoodSpellBook = (allSpells) =>
{
    let goodBook = allSpells;
    // goodBook.Title = "Good Book";
    goodBook = goodBook.filter(spell => spell.IsEvil===false)
    // goodBook.Spells = allSpells.Where(spell => !spell.IsEvil).ToList();
    
    return goodBook;
}

const allSpells = GetAllSpells();
const goodBook = MakeGoodSpellBook(allSpells);
const evilBook = MakeEvilSpellBook(allSpells);
console.log("Do you believe in magic?");
console.log("------------------------");


console.log("Good Book")
DisplaySpellBook(goodBook);
console.log("Evil Book");
DisplaySpellBook(evilBook);






// public class SpellBook
// {
    //     public string Title { get; set; }
    //     public List<Spell> Spells { get; set; }
    // }
    
    // public class Spell
    // {
        //     public string Name { get; set; }
        //     public bool IsEvil { get; set; }
        //     public double EnergyReqired { get; set; }
        // }
        