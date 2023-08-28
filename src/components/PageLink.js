const PageLink = ({ link, itemClass, closeMenu }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass} onClick={closeMenu}>
        {link.text}
      </a>
    </li>
  )
}
export default PageLink
