var answers = ["The competition will be located at Richard Montgomery High School (250 Richard Montgomery Drive, Rockville, MD)",
"The rules are listed <u> <a href='rules.txt'> here </a> </u>",
"Teams have anywhere from 1 to 4 people",
"Teammates do not need to be from the same school",
"Python 3.4, Java 7 and C++ 11 will be used",
"The prizes are giftcards for the top 3 teams",
"Teams may bring as many non-electronic reference materials as they desire"]
var counter;

function buttonToggle(a)
{
	for(var i = 1;i<=answers.length;i++)
	{
		var buttonName = String(i)+"button";
		var element = document.getElementById(buttonName);
		if(i!=a && element!=null && element.innerHTML.length>2)
		{
			element.innerHTML = "";
		}
	}

	var realElement = document.getElementById(String(a)+"button");
	if(realElement.innerHTML.length<=1)
	{	
		realElement.innerHTML = answers[a-1]
		counter = 0;
		realElement.style.fontSize = String(counter+"px");
		var i = setInterval(function(){
			realElement.style.fontSize = String(counter)+"px";

			if(counter == 24)
			{	
				clearInterval(i)
			}

			counter+=1	
			
		},20);
	}

	else
	{
		counter = 24;
		var i = setInterval(function(){
			realElement.style.fontSize = String(counter)+"px";
		

			if(counter == 2)
			{
				realElement.innerHTML = ""
				clearInterval(i)
			}
			counter-=1;
			},20);
	}
	
}
