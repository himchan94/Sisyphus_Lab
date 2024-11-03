import type { Metadata } from "next";
import "@/styles/global.scss";
import { BigShouldersDisplay, JetBrainsMono, D2 } from "@/app/fonts";
import Image from "next/image";
import styles from "./layout.module.scss";
export const metadata: Metadata = {
  title: "About Developer Himchan",
  description: "프론트엔드 개발자 김힘찬입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${BigShouldersDisplay} ${JetBrainsMono} ${D2}`}>
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
