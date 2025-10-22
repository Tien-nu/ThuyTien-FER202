import  Button from "react-bootstrap/Button";
import "./Footer.css";

function Footer({author, email, linkGithub}) {
  return (
    <footer>
      <p>Author: {author}</p>
      <p>Created by: {email} </p>
      <p>&copy; {new Date().getFullYear()} ThuyTien. All rights reserved </p>
      <Button variant="link" href="https://github.com/Tien-nu/ThuyTien-FER202.git" >{linkGithub}</Button>
    </footer>
  )
}
export default Footer;