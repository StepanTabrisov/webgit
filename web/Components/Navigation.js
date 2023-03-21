
import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <Link href="/"> Главная </Link>
            <Link href="/Content"> Контент </Link>
            <Link href="/AnimalForm"> Анкета </Link>
            <Link href="/ListForms"> Список анкет </Link>
        </div>
    )
}

export default Nav;