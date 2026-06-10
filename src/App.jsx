import Header from "./components/Header"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Feature from "./components/Feature"

function App() {

    const products = [
        {
            name: "コーヒー",
            price: 500
        },
        {
            name: "ケーキ",
            price: 600
        },
        {
            name: "サンドイッチ",
            price: 700
        }
    ]

    return (
        <>
            <Header 
                title="React学習 Day3"
                subtitle="フロントエンドエンジニアへの道" 
            />
            <Hero />
            <Feature />
            <Gallery items={products} />
        </>
    )
}

export default App
