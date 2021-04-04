import React from 'react';
import './style.css';

import { MassInterface } from '../../interfacesChecked';

interface PropsMenuBtns {
    arrInfo:MassInterface[],
    changeActive(index: number): void
}

const MenuBtns: React.FC<PropsMenuBtns> = ({ arrInfo, changeActive }) => {
    return (
        <div className="menu">
            <h2 className="menu__title">Select a city</h2>
            <div className="menu-btns">
                {arrInfo ?
                    arrInfo.map((item, index) => {
                        return (
                            <button
                                className="menu-btns__btn"
                                key={index}
                                onClick={() => changeActive(index)}>
                                    {item.name}
                            </button>
                        )
                    }) : null}
            </div>
        </div>
    );
};

export default MenuBtns;

