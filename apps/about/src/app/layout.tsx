import type { Metadata } from "next";
import "@/styles/global.scss";
import { BigShouldersDisplay, JetBrainsMono, D2 } from "@/app/fonts";
import styles from "./layout.module.scss";
import { Header } from "@/_components";

export const metadata: Metadata = {
  title: "About Developer Himchan",
  description: "프론트엔드 개발자 김힘찬입니다.",
};

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Licensing",
    url: "/licensing",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${BigShouldersDisplay.variable} ${JetBrainsMono.variable} ${D2.variable}`}
      >
        <Header navLinks={navLinks} />
        {children}
        <div className={styles["background-container"]}>
          <div className={styles["background-content-container"]}>
            <img className={styles["background-image"]} />
          </div>
        </div>
      </body>
    </html>
  );
}
