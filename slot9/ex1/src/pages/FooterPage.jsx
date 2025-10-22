import Footer from "../components/Footer/Footer";

export default function FooterPage() {
    return (
       <div className="footer">
       <h2 style={{textAlign: "center", maxWidth: 600, margin: "0 auto"}}></h2>
       <Footer author="ThuyTien" email = "nguyenthithuytiensmstan@gmail.com" linkGithub="https://github.com/Tien-nu/ThuyTien-FER202.git" />
       </div>
    );
}
