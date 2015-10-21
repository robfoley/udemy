// Function Definitions
function displayGreeting()
{
    document.write("Hey there dude!");
}

function displayPlayerScore(theScore)
{
    //playerScore = 1000;
    theScore += 1000;
    document.write("Your score is:  " + theScore);
}

function addTheseNumbers(numOne, numTwo)
{
    //var total = numOne + numTwo;
    //document.write(total);
    return(numOne + numTwo);
}

function english()
{
    alert("English = Hello! How are you?");
}

function spanish()
{
    alert("Spanish = Hola. Como estas?");
}

function hebrew()
{
    alert("Hebrew = Shalom!");
}

function french()
{
    alert("Bon Jour!");
}

function add(x, y)
{
    document.write(x + " + " + y + " = ");
    document.write(x + y);
}

function subtract(x, y)
{
    if(x > y)
        {
            document.write(x + " - " + y + " = ");
            document.write(x - y);
        }
    else
        {
            document.write(y + " - " + x + " = ");
            document.write(y - x);
        }
}

function multiply(x, y)
{
    document.write(x + " * " + y + " = ");
    document.write(x * y);
}

function divide(x, y)
{
    document.write(x + " / " + y + " = ");
    var ans = parseInt(x / y);
    document.write(ans);
}

function mathProb(x, y, z)
{
    if(z == "+")
    {
        document.write(x + " + " + y + " = ");
        document.write(x + y);
    }
    else if(z == "-")
    {
        if(x > y)
        {
            document.write(x + " - " + y + " = ");
            document.write(x - y);
        }
        else
        {
            document.write(y + " - " + x + " = ");
            document.write(y - x);
        }
    }
    else if(z == "*")
    {
        document.write(x + " * " + y + " = ");
        document.write(x * y);         
    }
    else if(z == "/")
    {
        document.write(x + " / " + y + " = ");
        document.write(x / y);         
    }
}