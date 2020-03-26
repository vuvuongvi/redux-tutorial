import React from 'react';
const ButtonGroup = ({technologies}) => {
    <div>
        {technologies.map((tech, i) => {
            <button
                data-tech={tech}
            >

            </button>
        })}
    </div>
}