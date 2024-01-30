import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import DropDownNav from "../dropDownNav/dropDownNav";
import styles from "./AppNav.module.css";
import imageLogo from "../../../assets/logo.svg";
import imageLogin from "../../../assets/usuario.svg";
import imageFavoritos from "../../../assets/me-gusta.png";
import UserContext from "../../../context/UserContext";
// import imageLupa from "../../../assets/xxxx.svg"; no tenemos esta imagen

const AppNav=() => {
const{user,logOut} = useContext(UserContext)
const navigate = useNavigate();

if (user) {

    return (
        <header className={styles.header}> 
            <div className={styles.headernav}>
                <Link to="/" className={styles.logocontent}>
                    <div><img className={styles.logo} src={imageLogo} alt="Logo Realista"/></div>
                    <div className={styles.name}>Realista</div>
                </Link>
                <Link to="/realestates/create" className={styles.navcontent}>
                    <button className={styles.buttonad} onClick={() =>navigate("http://localhost:3000/realestates/create")}>
                    Publica gratis tu anuncio
                    </button>
                </Link>
                <div className={styles.navcontent}>
                    <nav className={styles.nav}>
                        <ul className={styles.navlu}>
                        <div className={styles.navli}>
                            <img className={styles.user} src={imageFavoritos} alt="Me gusta"/>
                            <li className={styles.li}>Mis favoritos</li>
                        </div>
                        <div className={styles.navli}>
                                <button onClick={logOut}>LogOut</button>
                        </div>
                        </ul>    
                    </nav>
                </div>
                <div className={styles.logincontent}>
                        <img className={styles.user} src={imageLogin} alt="Iniciar sesión"/>
                        <span>Hola,{user.name}</span>
                </div>
            </div>            
        </header>
    )
    
    
} else {
    return (
        <header className={styles.header}> 
            <div className={styles.headernav}>
                <Link to="/" className={styles.logocontent}>
                    <div><img className={styles.logo} src={imageLogo} alt="Logo Realista"/></div>
                    <div className={styles.name}>Realista</div>
                </Link>
                <Link to="/realestates/create" className={styles.navcontent}>
                    <button className={styles.buttonad} onClick={() =>navigate("http://localhost:3000/realestates/create")}>
                    Publica gratis tu anuncio
                    </button>
                </Link>
                <div className={styles.navcontent}>
                    <nav className={styles.nav}>
                        <ul className={styles.navlu}>
                        <div className={styles.navli}>
                        </div>
                        <div className={styles.navli}>
                        </div>
                        </ul>    
                    </nav>
                </div>
                <Link to="/login">
                    <div className={styles.logincontent}>
                        <img className={styles.user} src={imageLogin} alt="Iniciar sesión"/>
                        <span>Iniciar sesión</span>
                    </div>
                </Link>
            </div>           
        </header>
    )
}

}
export default AppNav;