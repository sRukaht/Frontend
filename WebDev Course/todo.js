var todo=[];
var input="yes";

		while(input!=="quit")
		{
			input=prompt("What do you want to do? (list/new/delete/quit)");

			if(input==="new")
				newtodo();

			else if(input==="list")
				showlist();

			else if(input==="delete")
				deletee();
		}


		function newtodo(){			
              todo.push(prompt("What do you wish to add?"));
              console.log("added new todo");
        }

		function showlist(){
			console.log("*********");
          todo.forEach(function(todos,i){
            console.log(i+ ": " + todos);
            });
          console.log("*********");
		}
  
        function deletee(){
        	var index=prompt("Which index do you want to remove?");
        	todo.splice(index,1);
        	console.log("Deleted todo");
        }