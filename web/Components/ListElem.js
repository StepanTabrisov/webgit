
const Element = ({element}) => {
    return <li >Хозяин: {element.owner} Кличка: {element.name} Возраст: {element.age} Порода: {element.breed}</li>
}

export default Element;