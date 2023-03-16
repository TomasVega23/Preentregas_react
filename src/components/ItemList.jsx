import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
            <div className="col-md-3 p-2 m-0" key={item.index}>
                <Item item={item} />
            </div>
        ))}
        </div>
    )
}

export default ItemList;
