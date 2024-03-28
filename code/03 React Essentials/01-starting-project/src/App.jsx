import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import configImg from "./assets/config.png";
import { CORE_CONCEPTS } from "./data.js";

function Header() {
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essensials</h1>
            <p>
                Fundamental React concepts you will need for almost any app you
                are going to build!
            </p>
        </header>
    );
}

function CoreConcepts(props) {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcepts
                            title="props"
                            description="Config of the prop"
                            image={configImg}
                        />
                        <CoreConcepts />
                        <CoreConcepts />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
