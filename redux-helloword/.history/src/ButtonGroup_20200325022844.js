import React from 'react';
const ButtonGroup = ({technologies}) => {
    function dispatchBtnAction() {
        const tech = e.target.dataset.tech;
        
    }
    <div>
        {technologies.map((tech, i) => {
            <button
                data-tech={tech}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        })}
    </div>
}
export default ButtonGroup;