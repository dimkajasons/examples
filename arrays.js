var actors = [
    {firstName: "Tom", lastName: "Cruise", year: 1962 },
    {firstName: "Jackie", lastName: "Chan", year: 1954 },
    {firstName: "Brad", lastName: "Pitt", year: 1963 },
    {firstName: "Jean-Claude", lastName: "Van Damme", year: 1960 },
    {firstName: "Bruce", lastName: "Willis", year: 1955 },
    {firstName: "Arnold", lastName: "Schwarzenegger", year: 1947 },
    {firstName: "Silvester", lastName: "Stallone", year: 1946 },
]

//1. Получить массив который будет содержать всех актеров родившихся до 1950го года
function getOldActors (arr) {
    return arr.filter((element) => element.year < 1950)
}
console.log(getOldActors(actors))


//2. Получить массив который будет содержать полное имя каждого актера
function getFullName(arr) {
    return arr.map((element) => element.firstName + ' ' + element.lastName)
}
console.log(getFullName(actors))


//3. Отсортировать массив по возрасту актеров - от старшего
function filterByAge(arr) {
    return arr.sort((a, b) => a.year - b.year)
}
console.log(filterByAge(actors));


//4. Какой общий возраст всех актеров (предположим что ворзраст актера равен 2018-actor.year)
function getTotalAge(arr) {
    return arr.reduce(function(prev, curr) {
        return prev + 2018-curr.year
    }, 0)
}
console.log(getTotalAge(actors));


var people = ['John, Lock', 'Colin, Hull', 'Jane, Fox', 'Nick, Milner', 'Sarah, Connor', 'David, Smith', 'Hannah, Rose',
'Peter, Todd', 'Frank, Sample', 'Luke, Pope', 'Alissa, Moss', 'Sam, Washington', 'Eddie, Cope', 'Lucy, Bower', 'Andre, Cox',
'Monica, Bell', 'Richard, Nowell', 'Chris, Paxton', 'John, Cho', 'Tom, Price', 'Kate, Ritter', 'Mike, Lee', 'Kristin, Spawn',]

//5. Отсортировать в алфовитном порядке по фамилии
function sortByLastName(arr) {
    let changedArr = arr.map((elem) => elem.split(', ').reverse().join(' '));
    return changedArr.sort()
}
console.log(sortByLastName(people))



var data = ['apple', 'banana', 'apple', 'orange', 'banana', 'orange', 'apple', 'lemon', 'pear', 'pear', 'banana']
//6*. посчитать количество каждого фрукта в массиве - вывести объект например - fruitsCount = {apple: 4, banana: 5, ...}
function counter(arr) {
    let result = {};
    arr.forEach(function(element) {
        !result[element] ? result[element] = 1 : result[element] += 1;
    });
    return result;
}
console.log(counter(data));

// {
//     if (!result[element]) {
//         result[element] = 1;
//     } else {
//         result[element] += 1;
//     }
// }