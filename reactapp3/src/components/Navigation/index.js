import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <div>
            <nav>
                <div>
                    <ul>
                        <Link to='/business'> Business News</Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;