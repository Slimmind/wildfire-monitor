import { ReactComponent as Logo } from "../assets/fire.svg";

const Header = () => {
    return (
        <header className="header">
            <h1><Logo className="header-icon" />Wildfire Monitor (Powered by NASA)</h1>
        </header>
    );
}

export default Header;