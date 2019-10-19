import React from 'react';

function App(props) {
    const facts = props.facts.map((fact, index) => {
        return <li key={index}>{fact.title}</li>
    });

    return (
        <ul>
            {facts}
        </ul>
    )
}

export default App;