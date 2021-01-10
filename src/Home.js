import InteractiveCategories from "./InteractiveCategories";
import {Container} from "react-bootstrap";


function Home() {
    return (
        <div className="App">
            <Container>
                <header>
                    <h1>Le mie Spese</h1>
                </header>
                <InteractiveCategories />
            </Container>
        </div>
    )
}

export default Home