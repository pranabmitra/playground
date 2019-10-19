import fetch from 'isomorphic-fetch';

export default function getFacts() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json());
}

 