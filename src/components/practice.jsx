import { useState, useEffect } from "react";

function Practice() {

    const [image, setImage] = useState("")

        const getCat = async () => {

            const response = await fetch(
                "https://api.thecatapi.com/v1/images/search"
            )

            const data = await response.json()

            setImage(data[0].url)
        }

        useEffect(() => {

            getCat()
        }, [])

        return (
            <>
                <h2>猫画像アプリ</h2>

                <img src={image} alt="猫の画像" />

            </>
        )
}

export default Practice