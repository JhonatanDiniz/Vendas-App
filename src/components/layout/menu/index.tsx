import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const Menu: React.FC = () =>{
    return(
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hiden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <MenuItem href = "#" label = "Home"/>
                <MenuItem href = "#" label = "Produtos"/>
                <MenuItem href = "#" label = "Clientes"/>
                <MenuItem href = "#" label = "Vendas"/>
                <MenuItem href = "#" label = "Sair"/>
            </ul>
        </aside>
    )
}

interface MenuItemProps{
    href: Url;
    label: String;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) =>{
    return(
        <li>
           <Link href={props.href}>
                <span className="icon">{props.label}</span>        
           </Link>           
        </li>
    )
}