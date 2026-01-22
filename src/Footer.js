


function Footer({ items }) {
    return (
        <>

            <p className="foot"> {items} listed {items === 0 ? "item" : "items"} </p>
        </>

    )
}

export default Footer;