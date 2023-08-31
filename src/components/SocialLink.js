const SocialLink = ({ itemClass, href, icon, text }) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className={`${itemClass} social-link`}>
        <i className={icon}></i>
        {text && <span className="social-link-text">{text}</span>}
      </a>
    </li>
  );
};
export default SocialLink;
