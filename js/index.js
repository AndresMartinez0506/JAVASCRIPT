//Variables

    console.log("Hola desde index.js")

    var x = 10

    var y = 55.55

    console.log("X="+x+" Y="+y)

    var nombre="Pedro"

    var text= "Mi nombre es Pedro Perez"

    console.log(nombre)

    console.log(text)

    document.write(text)

    var x= 19

    console.log(x)

    var text2= "Hola a todos!Soy Pedro un estudiante que aprende a programar!.";

    console.log(text2)

//Operaciones Aritmeticas

    var x1 = 10+5

    console.log(x1);

    var x2=10;

    var y2=x2+5+22+1000+50;

    var z=x1*2;

    var y3=y2/4;

    var d=26%6

    var text3 = " y tengo  "

    document.write(text3)

    document.write(x1+z)

    console.log(y2)

//Operadores matematicos

    var x3 = 9

    var b = --x3

    console.log(b)

//Operadores de comparacion

    var c = 96 == 8

    var C = "hola" > "HOLA"

    console.log (c)

    console.log(C)

//Operadores lógicos o booleanos

    var logica = (4>2)&&(10<15) 

    console.log(logica)

//Operadores de cadena de texto

    var op= "Mi nombre es Pedro Pérez"

    var op2= "aprendo JavaScript”"

    document.write(op + op2);


    var l = "50";

    var m="200";

    console.log(l+m);

//Condicionales

    var num1 = 7;      

    var num2 = 10;

    if (num1 > num2) {alert

    ("Este es mi primer condicional")}

else{

    alert("Este es mi otro condicional")};

    var course = 3;

    if (course ==1) {document.write

        ("<h1>TUTORIAL DE CSS</h1>");}

else if (course == 2) {document.write("<h1>TUTORUAL DE CSS")}

else {document.write("<h1>TUTORIAL DE JAVASCRIPT</h1>")}

//Switch

    var day = 2;

    switch (day) {

        case 1: document.write("Monday");break;

        case 2: document.write("Tuesday");break;

        case 3: document.write("Wednesday");break;
        
        default: document.write("Another day")}

//Bucles

//For

    for (i=1; i<=5; i++){

        document.write(i + "<br />");}

    var i=0

//While

    var i=0

    while (i<=10) {document.write(i + "<br />"); i++}

// Do while

   var i=20;
   
   do {document.write(i + "<br />"); i++;}

   while (i<=25);

//Diferencia entre break y continue

   for (i =0; i<=10; i++)
  
   {if (i==5){break;} document.write(i + "<br />");}

   for (i =0; i<=10; i++)
  
   {if (i==5){continue;} document.write(i + "<br />");}

//Funciones

   function sayHello(name){alert("Hi, " + name);}
   
    sayHello("David");

    function sayHello(name, age){

        document.write(name + " is " + age + " years old.");}

function myFunction(a, b){return a * b;}

var x4= myFunction(5, 6);

//Ventanas Alert, Prompt, Confirm

//Alert

    alert("Do you really want to leave this page?")

//Prompt

    var user= prompt("Please enter your name"); alert(user);

//Confirm

    var result= confirm("Do you really want to leave this page?");

    if (result == true){alert("Thanks for visiting");}

    else {alert("Thanks for staying with us");}

//EMACAcrips6 (ES6)

//Var y let

    function varTest(){var x = 1; if (true) {var x = 2; console.log(x);}

    console.log(x);}

    function letTest() {let x = 1; if (true){let x = 2;

    console.log(x);}console.log(x);}

//let en bucles

    for (let i = 0; i < 3; i++)

    {document.write(i);}

//Const

    const a = 'Hello';

    document.write(a);

//Si escribo a='Bye'; no se puede ya que se reasigna

//Template literals

    {let name = 'David';

    let msg = `Welcome ${name}!`

    console.log(msg)}

    {let a = 8;

    let b = 34 

    let msg = `La suma es ${a+b}`;

    console.log(msg)}

//Bucles y funciones

    let list = ["x", "y","z"];

    for(let val of list){console.log(val);}

//Funciones

    const add =(x, y) => {let sum = x+ y; console.log(sum);}

    const test = (a, b = 3, c = 42) =>

    {return a + b + c;}

    console.log(test(10))

//Objetos

    let tree = {height: 10, color: 'green', grow()

    {this.height +=2;}};

    tree.grow(); console.log(tree.height);

    let height = 5; let health = 100;

    let athlete = {height, health};

    let prop = 'name';

    let id = '1234';

    let mobile = '08923'

    let usuario = {[prop]: 'Jack',

    [`usuario${id}`]: `${mobile}`};

    var i = 0;

    var usu = {['foo'+ ++i]:i,

    ['foo' + ++i]: i,

    ['foo' + ++i]: i};

    var param = 'size'; 

    var config = {[param]: 12,

    ['mobile' + param.charAt(0).toUpperCase() + 

    param.slice(1)]:4};

    console.log(config);

    //Object.assign()

    let person = { name : 'Jack', age: 18, sex: 'male'};

    let student = { name: 'Bob', age: 20, xp: '2'};

    let newStudent = Object.assign({}, person, student);

    let person = { name: 'Jack', age: 18};

    let newPerson = Object.assign({},person);

newPerson.name = 'Bob';

console.log(person.name); console.log(newPerson.name);