import Button from "react-bootstrap/Button";
import './footer.css'
function MyFooter() {
  return (
    <footer>
      <p>Author: ThuyTien</p>
      <p>Created by: nguyenthithuytiensmstan@gmail.com </p>
      <p>&copy; {new Date().getFullYear()} ThuyTien. All rights reserved </p>
      <Button variant="link" href="https://github.com/Tien-nu/ThuyTien-FER202.git" >https://github.com/Tien-nu/ThuyTien-FER202.git</Button>
    </footer> 
  )
}
export default MyFooter;
