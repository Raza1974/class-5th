import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md"> {/* Set header background and text color */}
      <div className="container mx-auto py-4 flex items-center justify-between">
        <img
          src="https://avatars.githubusercontent.com/u/163816473?v=4"
          alt="Profile Pic"
          width={82}
          className="rounded-full border-2 border-white"
        />
        <ul className="flex gap-6 justify-end pr-10">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-yellow-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-yellow-300 transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/jobs" className="hover:text-yellow-300 transition duration-300">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/responsive" className="hover:text-yellow-300 transition duration-300">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/responsive-2" className="hover:text-yellow-300 transition duration-300">
              Info
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
