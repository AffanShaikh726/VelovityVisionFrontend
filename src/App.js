import { useState } from "react";
import Card from "./components/cards/card";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigaiton";
import "./index.css";

function App() {
    const intialNoOfCards = 7;
    const [visibleCards, setVisibleCards] = useState(intialNoOfCards); // Initial number of visible cards
    const totalCards = 20; // Total number of cards (adjust as needed)

    const handleShowMore = () => {
        let incrementCardBy = visibleCards === intialNoOfCards ? 2 : 3;
        setVisibleCards((prev) => Math.min(prev + incrementCardBy, totalCards)); // Show 3 more cards, up to the total
    };

    const handleShowLess = () => {
        setVisibleCards(intialNoOfCards); // Reset to the original number of visible cards
    };

    return (
        <div className="App">
            <Navigation />
            <div className="appBox">
                <div className="cards-container">
                    {Array.from({ length: totalCards }).map(
                        (_, index) =>
                            index < visibleCards && (
                                <Card key={index} tnum={index + 1} />
                            )
                    )}
                </div>
                <div className="buttons-container">
                    {visibleCards < totalCards && (
                        <button
                            onClick={handleShowMore}
                            className="show-more-btn"
                        >
                            Show More
                        </button>
                    )}
                    {visibleCards > 9 && (
                        <button
                            onClick={handleShowLess}
                            className="show-less-btn"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
