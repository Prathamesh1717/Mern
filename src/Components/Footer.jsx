import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; Prathamesh Walekar {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;