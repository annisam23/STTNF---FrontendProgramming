import { useState } from "react";
import Footer from "../components/Footer/Footer";
import FromCovid from "../components/FormCovid/FormCovid";
import Global from "../components/Global/Global";
import Hero from "../components/Hero/Hero";

import Navbar from "../components/Navbar/Navbar"
import Provinces from "../components/Provinces/Provinces";
import data from "../utils/constants/provinces";

const Main = () => {
    const [tableData, setTableData] = useState(data);
    return(
        <main>
            <Hero/>
            <Global/>
            <Provinces tableData={tableData} setTableData={setTableData}/>
            <FromCovid tableData={tableData} setTableData={setTableData}/>
        </main>
    )
}

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default Home;