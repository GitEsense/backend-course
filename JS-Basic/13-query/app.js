//  Домашнее задание
/* 
    Написать функцию, которая принимает объект query параметров и возрвращает строку для вставки:
    {
        search: 'Вася',
        take: 10,
    }

    //  search=Вася&take=10
*/
const queryParams = {
    search: 'Вася',
    take: 10,
};

function objectToQueryString(query) {
    const queryArray = [];
    for (const [key, value] of Object.entries(query)) {
        queryArray.push(`${key}=${value}`);
    }
    return queryArray.join('&');
}

console.log(objectToQueryString(queryParams));
