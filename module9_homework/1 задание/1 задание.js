//Задание 1.
//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

//XML:
//<list>
//  <student>
//    <name lang="en">
//      <first>Ivan</first>
//      <second>Ivanov</second>
//    </name>
//    <age>35</age>
//    <prof>teacher</prof>
//  </student>
//  <student>
//    <name lang="ru">
//      <first>Петр</first>
//      <second>Петров</second>
//    </name>
//    <age>58</age>
//    <prof>driver</prof>
//  </student>
//</list>

// JS-объект:
// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

const parser = new DOMParser();

const xmlString = `
<list>
 <student>
   <name lang="en">
     <first>Ivan</first>
     <second>Ivanov</second>
   </name>
   <age>35</age>
   <prof>teacher</prof>
 </student>
 <student>
   <name lang="ru">
     <first>Петр</first>
     <second>Петров</second>
   </name>
   <age>58</age>
   <prof>driver</prof>
 </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');

const result = {
  list:[]
}

const students = listNode.querySelectorAll('student').forEach((student) => {
  const name = student.querySelector('name');
  const lang = name.getAttribute('lang');
  const first = name.querySelector('first');
  const second = name.querySelector('second');
  const age = student.querySelector('age');
  const prof = student.querySelector('prof');
  const push = result.list.push({
    name: first.textContent,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: lang
  })
 })

console.log(result)