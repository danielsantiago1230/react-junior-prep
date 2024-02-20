import React, { useState } from 'react';

const FunctionalComponentList: React.FC = () => {
    const [items] = useState(['Item1', 'Item2', 'Item3']);

    return (
        <div>
            <h2>Functional Component List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default FunctionalComponentList;