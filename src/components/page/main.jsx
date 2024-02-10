import React from "react";
import logo from "../../assets/img/logo.png"

const MainPage = () => {
    return (<div className="main">
        <div className="logo-div">
            <img src={logo} className="logo-img" />
            <p> — американский комедийный научно-фантастический анимационный
            сериал для взрослых, созданный Джастином Ройландом и Дэном Хармоном
            и выпускаемый в рамках блока Adult Swim на телеканале Cartoon Network.</p>
        </div>
    </div> );
}
 
export default MainPage;