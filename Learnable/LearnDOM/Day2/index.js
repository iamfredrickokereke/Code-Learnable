

console.log('...............................................................................................................')


// GET ELEMENT BY TAG NAMEs



// returns a nodelist

// has a length property

// like an array but not an array, e.g cant use forEach

// it is index based

const list = document.getElementsByTagName('li');

console.log(list.length);

console.log(list);



list[0].style.border = '1px solid red';

// list.array.forEach(element => {
//     console.log(element);
// });



// using a spread operator with the forEach to loop through the node list

// let betterList = document.getElementsByTagName('li');

//   betterList = [...betterList];

const betterList = [...list];  // betterList works even when its not declared as a variable or constant

console.log(betterList);

betterList.forEach(element =>  console.log(element) );


//  GET ELEMENT BY CLASS NAME

console.log('.............................................................................................................................')

const special = document.getElementsByClassName('special');

special[1].style.color = 'red';   //  using index base

specials  = [...special];         // using the Es6 spread operator to convert html collection to an array

specials.forEach( element => console.log(element) );  // loop through the new array to get the list
console.log(special);


// GET ELEMENT BY QUERY SELECTOR



const queryResult = document.querySelector('#result');  // target the id of result using query selector

console.log(queryResult);

const querySpecial = document.querySelector('.special'); // target the class of special using  query selector  but returns only the first child element

console.log(querySpecial);

const querySpecialLast = document.querySelector('.last');

console.log(querySpecialLast);

const querySpecialLastOne = document.querySelector('li:nth-child(3)');

console.log(querySpecialLastOne);


const querySpecialLastOneAgain = document.querySelector('li:last-child');

console.log(querySpecialLastOneAgain);


// GET ELEMENT BY QUERY SELECTOR  ALL

console.log();




const queryAll = document.querySelectorAll('.specials'); // returns all classes with special

console.log(queryAll);


queryAll.forEach( item => console.log(item) )


queryAll.forEach( item =>  {

    item.style.color = 'white';
    item.style.padding = '10px';
    item.style.backgroundColor = 'green';
    item.style.liststyle = 'none';
    item.style.border = '1px solid black';

})

console.log('.............................................................................................................................')



// USING CHILD NODES, FIRST CHILD AND LAST CHILD


let node = document.querySelector('#result');

console.log(node.childElementCount);  // return count of elements

console.log(node.childNodes);  // returns all element and text element( this is white space)  ==nodelist

console.log(node.children); // returns child elements only == html collection



let c = [...node.children];  //using spread operator to convert html collection to an arraylist


// loop through a nodelist using forEach with spread operator

c.forEach( function (item) {
    console.log(item);
    
})


// loop through a nodelist using forEach without a spread operator

let d = node.childNodes;

d.forEach( 
    function (item) {
        console.log(item);
        
    }
)



console.log(node.firstChild); // returns  first child whether element or not

console.log(node.firstElementChild); // returns first child element only 


console.log(node.lastChild); // returns last child

console.log(node.lastElementChild); // returns last child element only




console.log('...........................................................................................................................')



// USING SIBLING NODES, NEXT AND PREVIOUS SIBLINGS


const nodelist = document.querySelector('.specials');

const firstChild = nodelist;  // because querySelector returns 

console.log(firstChild);

const secondChild = firstChild.nextElementSibling;

console.log(secondChild);

const thirdChild = firstChild.nextElementSibling.nextElementSibling;

console.log(thirdChild);


const zero = firstChild.previousSibling;

console.log(zero); // returns null

const betterZero = firstChild.parentElement;

console.log(betterZero);





// using TEXTCONTENT VS NODEVALUE  - OUTER TEXT, INNER TEXT INNER HTML

console.log(betterZero.textContent);
console.log(betterZero.firstElementChild.textContent);
console.log(betterZero.firstElementChild.innerHTML);
console.log(betterZero.firstElementChild.innerText);
console.log(betterZero.firstElementChild.outerHTML);
console.log(betterZero.firstElementChild.outerText);


// using  GET & SET ATTRIBUTES


const itemList = document.querySelector('#section-four');


const ul = itemList.firstElementChild;
ul.getAttribute('class')
console.log(ul);

ul.setAttribute('class', 'result-four')
console.log(ul);


const checkList = document.querySelectorAll('#section-four');

console.log(checkList);


// using CLASSNAME vs CLASSLIST  ==works on the exact element id or class


const first = document.getElementById('m');
const second = document.getElementById('b');
const third = document.querySelector('#p');

//get classname

const clasnames = first.className

//set class name

first.className = 'nav';
second.className = 'navigate';

// classname wipes previous class on element

first.className = 'navigate';


// using classlist

// third.classList.add('nav');
// third.classList.add('navigate');
// third.classList.add('font');


//or


third.classList.add('nav', 'navigate', 'font', 'others');

// to remove class

third.classList.remove('others');



// checking if an element contains a class

const classContain  = third.classList.contains('fonts');

if (classContain) {
    console.log('Yes, it contains the class:' + classContain)    
} else{
    console.log('No it doesn\'t')
}




//USING CREATEELEMENT  vs CREATETEXTNODE vs .APPENDCHILD ELEMENT

const  bodyDiv = document.createElement('div');

const heading = document.createElement('h1');

const  divText = document.createTextNode('I love to code');

const newElement = bodyDiv.appendChild(heading).appendChild(divText);

// document.body.firstElementChild.firstElementChild.appendChild(newElement);






