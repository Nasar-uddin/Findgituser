# Findgituser
A github user finder with jqeury ajax
<html>
<head>
	<title>Rgular expression</title>
</head>
<body>
	<div id="test">new</div>
	<script>
		var text= document.getElementById("test").innerText;
		check(text);
		function check(word){
			const keyWord = ["abstract","arguments","boolean",
				"break","public","protected","private",
				"byte","case","catch","char",
				"const","continue","debugger","default",
				"delete","do","double","else",
				"eval",	"false","final","finally",
				"float","for","function","goto",
				"if","implements","in","instanceof",
				"int","interface","let","long",
				"native","new","null","package",
				"return","short","static","switch",
				"synchronized",
				"this","throw","throws","transient",
				"true","try","typeof","var",
				"void","volatile","while","with",
				"yield"];
			const _static = {
				"static":[
					"int",
					"float",
					"double",
					"long",
					"String",
					"function"
				]
			}
			for(i=0;i<keyWord.length;i++){
				if(word==keyWord[i]){
					console.log(word+" is a keyword");
					return true;
				}
			}
			console.log("This is not a keyword");
			return false;
		}
	</script>
</body>
</html>
