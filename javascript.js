   document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })
 
        function myFunction(){
            let salary = Number(document.getElementById("salary").value);
            let grade = Number(document.getElementById("grade").value);
            let bonus_salary;
            let result;
            if(grade>15){
                bonus_salary= salary + (salary * (50/100));
                result = "Your Salary is " + bonus_salary;
            }
            else{
                bonus_salary = salary + (salary * (25/100));
                result = "Your Salary is " + bonus_salary;
            }
            if(grade>15){
                document.getElementById("output").style.background = "green";
            }
            else{
                document.getElementById("output").style.background = "gray";
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;

        }
   