import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

function Home () {
    return(
        <div className = "container mx-auto main-layout">
            <Header/>
            <Container/>
            <Footer />
        </div>
    )
}

export default Home;