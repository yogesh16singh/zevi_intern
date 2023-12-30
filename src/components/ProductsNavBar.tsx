import "./ProductsNavBar.scss";
import zevi_logo from "../themes/SVGs/zevi_logo_svg.svg";
import { RiSearch2Line } from "react-icons/ri";

const ProductsNavBar = ({ quer, queryfun }: any) => {
    const submitHandler = (e: any) => {
        e.preventDefault();
    }
    return (
        <div className="products_navbar">
            <div></div>
            <form className="input_container" onSubmit={(e) => submitHandler(e)}>
                <input type="text" className="home_input" placeholder="Search..." value={quer} onChange={(e) => queryfun(e.target.value)} />
                <button className="search_icon_container" type="submit">
                    <RiSearch2Line size="24" />
                </button>
            </form>
            <img src={zevi_logo} alt="logo" />
        </div>
    );
};

export default ProductsNavBar;