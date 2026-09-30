import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
