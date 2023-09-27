import Link from "next/link";
import style from "../../styles/page.module.scss";
export default function TopNav() {
  return (
    <nav>
      <Link href="/" className={style.link}>
        Home
      </Link>
      <Link className={style.link} href="/blog">
        Blog
      </Link>
      <Link href="/about" className={style.link}>
        About
      </Link>
    </nav>
  );
}
