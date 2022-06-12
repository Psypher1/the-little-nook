import Link from "next/link";
const SiteLayout = ({ children }) => {
  return (
    <>
      <nav className="justify-between flex items-center bg-teal-900 text-teal-100 gap-4 py-5 px-8 text-lg">
        <Link href="/">
          <a className="hover:font-semibold">The Little Nook</a>
        </Link>
        <Link href="/request">
          <a className="hover:font-semibold">Request A Book</a>
        </Link>
      </nav>
      <main className="px-8 py-16 min-h-screen max-w-4xl mx-auto">
        {children}
      </main>
    </>
  );
};

export default SiteLayout;
