import Button from "./Button";

function Header(props){

    const handleClick = () => {
        alert("Hello World!");
    } 

    return (
        <header>
            <h1>{props.title}</h1>
            <Button onClick={handleClick}/>
        </header>

    );
};


export default Header;