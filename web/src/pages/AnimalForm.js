import Heading from "Components/Heading"
import Nav from "Components/Navigation"
import { doPostFetch } from "./api/post"

const Form = () => {

    const SendForm = async (arg) => {
        arg.preventDefault();

        const AnimalForm = {
            owner: arg.target[0].value,
            name: arg.target[1].value,
            age: arg.target[2].value,
            breed: arg.target[3].value
        }

        await doPostFetch("/api/post", JSON.stringify(AnimalForm), {
            'Content-Type': 'application/json',
        })

        console.log(AnimalForm)
    }

    return <>
        <Nav />
        <Heading tags={'h1'} text={'Анкета'} />

        <form onSubmit={SendForm}>

        <div>
            <label>Хозяин: </label>
            <input></input>
        </div>

        <div>
            <label>Введите кличку: </label>
            <input></input>
        </div>

        <div>
            <label>Введите возраст: </label>
            <input></input>
        </div>

        <div>
            <label>Введите породу: </label>
            <input></input>
        </div>

        <div>
            <button type="submit"> Отправить анкету </button>
        </div>
        </form>

    </>
}

export default Form;