export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-screen-sm border-t border-neutral-800">
      <div className="flex items-center justify-between px-0 pt-4 md:px-0">
        <p className="text-xs text-paragraph">
          © {new Date().getFullYear()} Shoaib Sayyed
        </p>
        <a
          href="https://x.com/thedreamydev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-[rgba(40,199,128,0.15)] rounded-full px-2 py-1 relative text-xs"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#039754]" />
          <span className="text-[#039754]">Available for Work</span>
        </a>
      </div>
    </footer>
  );
}
