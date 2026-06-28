function Practice() {

    function hello(name) {
        console.log("こんにちは" + name)
    }

    const hello2 = () => {
        console.log("こんばんは")
    }

    return (
        <>
            <h2>Day8 JavaScript学習</h2>
            
            <button onClick={hello}>
                hello
            </button>

            <button onClick={hello2}>
                hello2
            </button>
        </>
    )
}

export default Practice