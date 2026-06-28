import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Feature from "./components/Feature"
import MenuList from "./components/MenuList"
import LikeButton from "./components/LikeButton"
import NameInput from "./components/NameInput"
import Todo from "./components/Todo"
import Practice from "./components/practice"

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
            <MenuList />
            <LikeButton />
            <NameInput />
            <Todo />
            <Practice />
        </>
    )
}

export default App
