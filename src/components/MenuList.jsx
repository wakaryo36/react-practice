import MenuCard from "./MenuCard";

function MenuList() {

    const menus = [
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
            <h2>メニュー一覧</h2>

            {menus.map((menu, index) => (
                <MenuCard
                    key={index}
                    name={menu.name}
                    price={menu.price}
                />
            ))}
        </>
    )
}

export default MenuList