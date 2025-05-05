import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 w-full mx-auto flex flex-col items-start animate-slideFromDownAndFade">
      <Link
        href="/"
        className="text-medium inline-block font-medium no-underline"
      >
        Shoaib Sayyed
      </Link>
      <p className="paragraph font-medium">Frontend Engineer</p>
    </header>
  );
}
