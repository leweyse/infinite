import { Link } from '../';

const Nav = () => {
    const links = [
        {
            id: "blog",
            url: "https://github.com/Leweyse/infinite/blob/main/README.md",
            content: "Blog"
        },
        {
            id: "src",
            url: "https://github.com/Leweyse/infinite/blob/main/README.md",
            content: "Sources"
        },
        {
            id: "repo",
            url: "https://github.com/Leweyse/infinite",
            content: "Github"
        },
        {
            id: "extra",
            url: "https://github.com/Leweyse/infinite/blob/main/README.md",
            content: "Extras"
        },
    ]

    return(
        <nav>
            { links.map((link, idx) => 
                <Link
                    key={idx}
                    id={link.id} 
                    link={link.url} 
                    content={link.content}
                />
            )}
        </nav>
    )
}

export default Nav;