var repeat;
var words = "";

repeat = prompt("Do you want to play?");

if (repeat.valueOf() == ("yes"))
{
	do 
	{
		words += prompt("Enter a word");
		words += " ";
		repeat = prompt("Do you want to play?");
	}
	while (repeat.valueOf() == ("yes"));
}
alert(words);