import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("")

    return (
        <>
            <h2>名前入力</h2>

            <input 
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <p>こんにちは、{name}さん</p>
            <p>文字数：{name.length}</p>
            {name.length === 0 ? (
                <p>名前を入力してください</p>
            ) : (
                <p>入力ありがとうございます</p>
            )}
        </>
    )
}

export default NameInput