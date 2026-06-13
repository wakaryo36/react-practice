function MenuCard({ name, price }) {
    return (
        <div className="menu-card">
            <h3>{name}</h3>
            <p>{price}円</p>
        </div>
    )
}

export default MenuCard