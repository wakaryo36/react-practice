function App() {
    const fruits = [
        "りんご",
        "みかん",
        "バナナ"
    ]

    return (
        <div>
            <h1>果物一覧</h1>

            {fruits.map((fruit, index) => (
                <p key={index}>{fruit}</p>
            ))}
        </div>
    )
}

export default App
