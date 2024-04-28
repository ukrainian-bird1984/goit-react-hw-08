import css from "./Layout.module.css";
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;