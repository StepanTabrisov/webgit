
import Element from "./ListElem";

const ListElem = ({array}) =>{
    return <ul>
    {array.map((el, index) => <Element key={index} element={el}/>)}
    </ul>
}

export default ListElem;