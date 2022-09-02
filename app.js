 
//Chapter 1


// alert("Hello Visitors");

// alert("Error! Please enter valid password")


// alert("Welcome to js land \n happy coding");

// alert("Welcome to js land");

// alert("Happy codding !\nPrevent this page from creating additional dialougues");

// alert("Hello I can run Js from console"); // this code is done on console

// -----------------------------------------------------------------------------------


// chapter 2


// var username;
// var myname="Muhammad Shoaib Anis";
// var titlemessage;
// titlemessage="hello world";
// alert(titlemessage);


// var studentname='jhone doe';
// var stdAge='15 years old';
// var course="Certified Mobile Application Development";

// alert(studentname);
// alert(stdAge);
// alert(course);


// var word="Pizza";
// alert(word);
// var word="Pizz";
// alert(word);
// var word="Piz";
// alert(word);
// var word="Pi";
// alert(word);
// var word="P";
// alert(word);


// var email="shoaibanis00@gmail.com";
// alert("My email address is " + email);


// var book='A smarter way to learn JavaScript';
// alert("im trying to learn a book " + book);


// document.write("Yay ! I can write HTML content through Javascript");


// var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(design)


// -----------------------------------------------------------------------------------


//chapter 3

// var age=22;
// alert("Im " + age + " years old");

// var Vcount=4;
// alert("You gave visited this website "+ Vcount + " Times")

// var birthyear=2000;
// document.write("My birth year is " + birthyear + "<br> Data type of my declared variable is number")

// var vName="John Doe";
// var pTittle=" Tshirts";
// var quantity=5

// document.write(vName + " ordered " + quantity +" "+ pTittle + "(s)" + " on XYZ Clothing Store")


// -----------------------------------------------------------------------------------


//chapter 4


// var age,age2,age3;

// var age,age1,age_1,Age,a_3456e; //legal

// var 1age, age-1, %age, #age; //illegal


// document.write("<b>Rules for Naming Js Variables</b><br>")
// document.write("variable names are case sesitive<br>")
// document.write("variable names should not be js keyword<br>")

// -----------------------------------------------------------------------------------



// chapter 5 

// var num1=3;
// var num2=5;
// var tNum=num1+num2;
// var sNum=num1-num2;
// var mNum=num1*num2;
// var dNum=num1/num2;
// var ModNum=num1%num2;
// document.write('sum of '+ num1 + " and " + num2 +" is " + tNum +"<br>");
// document.write('Subtraction of '+ num1 + " and " + num2 +" is " + sNum +"<br>");
// document.write('Multiplication of '+ num1 + " and " + num2 +" is " + mNum +"<br>");
// document.write('Division of '+ num1 + " and " + num2 +" is " + dNum +"<br>");
// document.write('Modulus of '+ num1 + " and " + num2 +" is " + ModNum +"<br>");



// var num;
// document.write("Value After Variable declaration is : ?? <br>")
// num=5;
// document.write("Initial value : "+ num + "<br>");
// num++;
// document.write("value after increment : "+ num + "<br>");
// num=num+7;
// document.write("value after addition : "+ num + "<br>");
// num--;
// document.write("value after decrement : "+ num + "<br>");
// num=num%3;
// document.write("Remainder : "+ num + "<br>")



// var ticketprice=600;
// document.write("Total Cost to buy 5 tickets to a movie is "+ (ticketprice*5));

// document.write("<b>Table of 2</b><br>");
// for(var i=1;i<11;i++)
//   {  var ans = 2*i;
//      document.write("2 * " + i + "= ");
//      document.write(ans+"<br>");

// }


// var cTemp,ftemp;
// ctemp=25;
// ftemp=(ctemp*9/5)+32;
// document.write(ctemp+"oC" + " is " +  ftemp+"oF");
// var c1Temp,f1temp;
// c1temp=70;
// c1Temp=(f1temp-32)*5/9;
// document.write(f1temp+"oF" + " is " +  cTtemp+"oC");

// var item1=650;
// var qitem1=3;
// document.write("Price of item 1 is "+ item1 +"<br>");
// document.write("Quantity of item 1 is " + qitem1+"<br>");
// var item2=100;
// var qitem2=7;
// document.write("Price of item 2 is "+ item2 +"<br>");
// document.write("Quantity of item 2 is " + qitem2+"<br>");
// document.write("Shipping charges is 100 <br>")

// var total=(item1*qitem1) + (item2*qitem2);
//  document.write("Total cost of your order is "+ total);


// document.write("<b>Marksheet</b><br>")
// var marks=804;
// var tMarks=980;
// var percentage=(marks/tMarks)*100;
//  document.write("Total Marks : "+tMarks+"<br>" + "Marks obtained : " + marks + "<br>" +"Percentage : " + percentage );


// var dollar=10;
// var riyal=25;  
// var total=(dollar*104.80)+(riyal*28);
// document.write("<h1>Currency In PKR</h1><br>")
// document.write("Total currency in PKR : "+ total);


// var num;   
// num=num+5*10/2 ;

// var cyear=2022;
// var byear=2000;
// var age=cyear-byear;
// document.write("Current Year " + cyear + "<br>" + "Birth Year " + byear + "<br>" + "Age " + age + "<br>" ) 

// document.write("The Geometrizer<br>");
// var radius=20;
// document.write("The circumference of a circle = " + (radius * 2 * 3.142) + "<br>");
// document.write("The area is : " + (radius*3.142*3.142)  );

// var favsnack="Lays";
// var cage=22;
// var maxage=70;
// var pday=5;

// document.write("you need this much " + (70-22)*365*5 )


// -----------------------------------------------------------------------------------

// chapter 6-9

// var a =10;
// document.write(" The value of a is " + a + "<br>"); 
// document.write(" The value of ++a is " + ++a + "<br>");
// document.write(" Now the value of a is " + a + "<br>");
// document.write(" Now the value of a++ is " + a++ + "<br>");
// document.write(" The value of a is " + a + "<br>"); 
// document.write(" The value of --a is " + --a + "<br>");
// document.write(" The value of a is " + a + "<br>"); 
// document.write(" The value of a-- is " + a-- + "<br>"); 
// document.write(" The value of a is " + a + "<br>"); 

// var a=2;
// var b=1;
// var result= --a - --b + ++b + b--;
// document.write(--a + "<br>");
// document.write(--a - --b + "<br>");
// document.write(--a - --b + ++b + "<br>");
// document.write(result +  "<br>");
// document.write(a + "<br>" + b);


// var a;
// a=prompt("enter your name " , "ex : John" );
// document.write("Hello " + a);




// var num;
// num=+prompt("Enter the number ");
// if (num==0){
// document.write("<b>Table of 5</b><br>");
// for(var i=1;i<11;i++)
//   {  var ans = 5*i;
//      document.write("5 * " + i + "= ");
//      document.write(ans+"<br>");
// }
// }
// else{
//     for(var i=1;i<11;i++)
//     {  var ans = num*i;
//         document.write( num + " * " + i + "= ");
//         document.write(ans+"<br>");
//     }
// }



// document.write("<b>Subject &nbsp;&nbsp Total-Marks &nbsp;&nbsp  Obtained-Marks &nbsp;&nbsp Percentage</b><br>")
// var sub1,mark1,percentage1;
// sub1=prompt("Subject Name : ");
// mark1=+prompt("Marks here");
// percentage1=(mark1/100)*100;
// sub2=prompt("Subject Name : ");
// mark2=+prompt("Marks here");
// percentage2=(mark2/100)*100;
// sub3=prompt("Subject Name : ");
// mark3=+prompt("Marks here");
// percentage3=(mark3/100)*100;
// document.write(sub1 + "&nbsp &nbsp &nbsp" +  "100 " + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + mark1 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + percentage1+"<br>");
// document.write(sub2 + "&nbsp &nbsp &nbsp" +  "100 " + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + mark2 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + percentage2 + "<br>");
// document.write(sub3 + "&nbsp &nbsp &nbsp" +  "100 " + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + mark3 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + percentage3+ "<br>");




// -----------------------------------------------------------------------------------

// chapter 9-11

  
// var city;
// city=prompt("Enter Your City Name");
// if(city=="karachi"){
//     alert("Welcome the city of Lights");
// }


// var gender;
// gender=prompt("Enter your gender please");
// if(gender=="male"){
//     document.write("Good Morning Sir");
// }
// else if(gender=="female")
// {
//     document.write("Good Morning Maam");
// }


// var Light;
// Light=prompt("Enter Colour");
// if(Light=="red"){document.write("Must stop")}
// else if(Light=="yellow"){document.write("ready to move")}
// else if(Light=="green"){document.write("Move Now")}

// var litre;
// litre=prompt("Enter the fuel remaining in liters");
// if(litre<0.25){
//     document.write("Please Refill the Fuel in Car")   
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } 
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


// var marks=[];
// var oMarks=0;
// var tMarks=300;
// var percentage;
// var Grade;
// var Subject=["Mathematics" , "English" , "Physics"];

// for(var i=0;i<3;i++){
//     marks[i]=+prompt("Enter Marks for " + Subject[i]);
//     oMarks=marks[i]+oMarks;
    
//  }
//  percentage=parseInt((oMarks/tMarks)*100);


//     document.write("Total marks    : " + tMarks+"<br>");
//     document.write("Marks obtained : " + oMarks + "<br>");
//     document.write("Percentage : " + percentage + "%"+"<br>");
//     document.write("Grade : ");

   

//     if(percentage>=80){

//         Grade='A-one';
//     }
//     else if(percentage>=70){
//         Grade='A';
//     }
//     else if(percentage>=60){
//         Grade='B';
//     }
//     else if(percentage<60){
//         Grade='FAIL';
//     }
//     else{
//         Grade="null";
//     }

//     if(Grade=='A-one'){
//         document.write(Grade + "<br>"+ "Remarks : Excellent");
//     }
//     else if(Grade=='A'){
//         document.write(Grade + "<br>"+ "Remarks : GOOD");
//     }
//     else if(Grade=='B'){
//         document.write(Grade + "<br>"+ "Remarks : You Need to Improve");
//     }
    
//     else if(Grade=='FAIL'){
//         document.write(Grade + "<br>"+ "Remarks : Sorry");
//     }




// var num=7;
// var sNum=+prompt("Enter Any Number from 1-10");
// if(sNum--==num){
//     document.write("Bingo Correct Answer ");
// }
// else if(sNum==num){
//     document.write("Close enough");
// }
// else{
//     document.write("next time");
// }



// var num;
// num=+prompt("Enter Number and check its divisiblity by 3");
// if(num%3==0){
//     document.write("Divisible");
// }
// else{
//     document.write("Not divisible");
// }



// var num;
// num=+prompt("Enter Number and check its divisiblity by 3");
// if(num%2==0){
//     document.write("even");
// }
// else{
//     document.write("Odd");
// }


// var temp;
// temp=+prompt("Enter Temperature");
// if(temp>40){
//     document.write("It is too hot outside");
// }
// else if(temp>30){
//     document.write("The Weather today is Normal");
// }
// else if(temp>20){
//     document.write("Today's Weather is cool");
// }
// else if(temp>10){
//     document.write("OMG! Today's weather is so Cool");
// }



// var fNum,sNum,result,operation;
// fNum=+prompt("Enter First Number");
// sNum=+prompt("Enter Second Number");
// operation=prompt("Enter Operation to be performed","+ * / -");
// switch(operation){
//     case "+" : result=fNum+sNum;
//     break;

//     case "-" : result=fNum+sNum;
//     break;
    
//     case "*" : result=fNum*sNum;
//     break;
    
//     case "/" : result=fNum/sNum;
//     break;
//     default : result="error";
//     break;
// }
// document.write(result);


// -----------------------------------------------------------------------------------

// chapter 12-13



// var letter;
// letter=prompt("Enter Any Letter : ");
// var convertedString=letter.charCodeAt();
// if(convertedString>=97){
//     if(convertedString<=122){
//         document.write("Lower Case");
//     }
// }
// else if(convertedString>=65){
//     if(convertedString<=90){
//         document.write("Upper Case");
//     }
// }
// else{
//     document.write("Number")
// }



// var num1=prompt("Enter Number-1");
// var num2=prompt("Enter Number-2");
// if(num1>num2){
//     document.write(num1);
// }
// else if(num2>num1){
//     document.write(num2);
// }
// else{
//     document.write("Both Are Equal");
// }



// var input=+prompt("Enter Number");
// if(input>0){
//     document.write("POSITIVE NUMBER");
// }
// else if(input<0){
//     document.write("NEGATIVE NUMBER");
// }
// else{
//     document.write("YOU HAVE ENTERED ZERO");
// }



// var l=prompt("Enter Any charachter");
// var property;
// if(l=='a' || l=='A' || l=='e' || l=='E'|| l=='i'|| l=='I'|| l=='o'|| l=='O'|| l=='u'|| l=='U' ){
// property="vowel";
// }
// else{
//     property="No Vowel";
// }
// document.write(property);



// var pass="shobii123";

// do{
//     userPass=prompt("Enter Your Password");
//     length=userPass.length;
// }while(length==0);

// if(userPass==pass){
//     document.write("Correct! The password you entered matches the original password");
// }
// else{
//     document.write("Incorrect");
// }


// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }


// var time=+prompt("Enter Time in 24hrs Clock","example : 1900=7pm");
// if(time>=0 && time<1200){
//     document.write("Good Morning");
// }
// else if(time>=1200 && time<1700){
//     document.write("Good Afternoon");
// }
// else if(time>=1700 && time<2100){
//     document.write("Good Evening");
// }
// else if(time>=2100 && time<2400){
//     document.write("Good Night");
// }
// else{
//     document.write("Wrong input of time")
// }


// var names1=[];
// var names2=[
//     {}
// ];
// var string=["abc","cdd"];
// var number=[1,2];
// var boolena=[true,false];
// var mixedarray=['abc',1,true];
// var qualification=["SSC", "HSC", "BCS", "BS","BCOM", "MS", "M", "Phil" ,"PhD"];
// for(var i=0;i<qualification.length;i++){
//     document.write(qualification[i]+"<br>");
// }


// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// var student=["shoaib","rehan","rayan"];
// var score=[470,450,100];
// for(var i=0;i<student.length;i++){

//     document.write("Score of " + student[i] + " is " + score[i] +". Percentage : "+ (score[i]/500)*100 + "%"+"<br>");
// }



// var Colour=["pink","yellow","green","blue","violet","purple"]
// document.write(Colour);

// var add=prompt("Enter the colour you wanna add");
// Colour.unshift(add);
// document.write(Colour);
// Colour.push(add);
// document.write(Colour);
// for(var i=0;i<2;i++){
//    Colour[i]= prompt("Enter Colours one by one");
// }
// document.write(Colour);
// Colour.shift();
// document.write(Colour);
// Colour.pop();
// document.write(Colour);
// var add=+prompt("Enter the position you wanna add");
// var nColour=prompt("Colour Name");
//  Colour[add]=nColour;
//  document.write(Colour);
// var a,b;
// a=+prompt("From where you wanna start deleting ");
// b=+prompt("How much you waant to delete");
// Colour.splice(a,b);
// document.write(Colour);

// var score=[320,230,480,120];
// var orderedcore=score.sort();
// document.write("Ordered score : "+orderedcore);
 
// var city=["Karachi","lahore","Islambad","Quetta","peshawar"];
// var selected=[];
// selected=city.slice(1,4);
// document.write(selected);

// var arr = [" This ", " is " , " my ", " cat "];
// document.write("Array : "+ arr + "<br>");
// var joinedarr=arr.join("");
// document.write("String : "+ joinedarr)

// var devices=["keyboard","mouse","printer","monitor"];
// // for(var i=0;i<devices.length;i++){
// // document.write("OUT : "+"<br>" + devices[i]+"<br>   ");
// // }
// var a=devices.length-1;
// for(var i=a;i>-1;i--){
//     document.write("OUT : "+"<br>" + devices[i]+"<br>   ");
// }


// var phone=["Apple","Samsung", "Motorola", "Nokia", "Sony" ," Haier"]
// document.write(phone);

// var multiarr=[[]];

// var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(matrix[0].join(" ")+ "<br>"+matrix[1].join(" ")+"<br>"+matrix[2].join(" "));

// for (var i=1;i<11;i++){
//     document.write([i]+"<br>");
// }

// var tableNumber=+prompt("Enter The number to show its multiplication table ");
// var length=+prompt("Enter length of table ");
// var b=length+1;
// for(var i=1;i<b;i++){

//     document.write(tableNumber +" * " + [i] + " = " + (tableNumber*[i]) + "<br>");
// }


//  var fruits=[ "apple","banna","mango","orange","strawberry" ];

//  for(var i=0;i<fruits.length;i++){
//     document.write("Element at index "+ [i] +" is "+ fruits[i]+"<br>");
//  }


// for(var i=1;i<16;i++){
//     document.write(i+",");
// }

// for(var i=10;i>0;i--)
// {
//     document.write(i+",");
// }

// for(var i=0;i<21;i++){

//     if(i%2==0){
//      document.write(i + ",");       
//     }
// }

// for(var i=0;i<20;i++){

//     if(i%2==1){
//      document.write(i + ",");       
//     }
// }

// for(var i=2;i<21;i++){

//     if(i%2==0){
//      document.write(i + "k,");       
//     }
// }

// var found=false
// var index;
// var A=["cake","apple pie","cookie","chips","patties"];
// var search=prompt("enter the word to be searched");
// for(var i=0;i<A.length;i++){
//     if(search==A[i]){
//         found=true;
//         index=i;
//         search==A[i];  
//     }
// }
//  if(found==true){
//     document.write(search+" is available at index "+index+" in our bakery");
//  }
//  else{  
//     document.write("We are sorry. "+search+ " is not available.");
//  }


// var A = [24, 53, 78, 91, 12];

// var sortedA=A.sort();
// var position=sortedA.length-1;
// document.write(sortedA[position]);
// document.write(sortedA[0]);


// for(var i=5;i<101;i++){
//     if(i%5==0){
//         document.write(i+",");
//     }
// }