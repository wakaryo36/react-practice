function Gallery({items}) {
    return (
        <>
            <h2>ギャラリーです</h2>

            {items.map((item, index) => (
                <div key={index}>
                    <p>商品名：{item.name}</p>
                    <p>価格：{item.price}</p>
                </div>
            ))}
        </>
        
    )
}

export default Gallery