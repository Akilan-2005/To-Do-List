function Footer({ items }) {
  return (
    <p className="foot">
      {items} listed {items === 1 ? "item" : "items"}
    </p>
  );
}

export default Footer;
