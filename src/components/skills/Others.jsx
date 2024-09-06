import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

export default function Others() {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Others</h3>
        <div className="skills__box">
            <div className="skills__data">
                <HiCheckBadge />
                <div>
                    <h3 className="skills__name">C++</h3>
                </div>
            </div>
            <div className="skills__data">
                <HiCheckBadge />
                <div>
                    <h3 className="skills__name">python</h3>
                </div>
            </div>
        </div>
    </div>
    );
}