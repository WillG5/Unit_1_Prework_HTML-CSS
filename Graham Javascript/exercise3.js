var repeat;
var name;

name = prompt("Enter your name");
repeat = prompt("Would you like to print your name?");

while(repeat.valueOf() == "yes")
{
	console.log("Hello. My name is " + name);
	repeat = prompt("Would you like to print this again?");
	if(repeat.valueOf() == "yes")
	{
		name += "!";
	}
}
alert(name);