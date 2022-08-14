function Employee( id,name,department,level,img){
this.id=id;
this.name=name;
this.department=department
this.level=level
this.salary=calc();

        function calc(level){
            switch(level){
                case"junior":
                return math.round(math.random()* 500 + 500);
                break;
                case"mid senior":
                return math.round(math.random()* 500 + 500);
                break;
                case"seniorr":
                return math.round(math.random()* 500 + 500);
                break;

            }
        }
        function print(){
            return``
        }
}

console.log(math.round(math.random()* 500 + 500));










// let Employee1= new Employee(1000 , "ahmad" , "ll" , "senior");
// let Employee2= new Employee(1001 , "ali" , "ll" , "senior");
