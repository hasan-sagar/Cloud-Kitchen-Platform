export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-4 text-center">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="logo text-primary font-semibold">CouldEats</span>
        </p>
      </aside>
    </footer>
  );
}
