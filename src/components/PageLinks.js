import { pageLinks } from '../data'
import PageLink from './PageLink'
const PageLinks = ({ parentClass, itemClass, closeMenu }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} closeMenu={closeMenu} />
      })}
    </ul>
  )
}
export default PageLinks
