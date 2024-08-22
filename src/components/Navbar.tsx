import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex gap-10 py-4 mx-auto font-medium w-fit text-blackish">
          <Link href={"#"} className="relative navbar__link">
            HOME
          </Link>
          <Link href={"#"} className="relative navbar__link">
            SHOP
          </Link>
          <Link href={"#"} className="relative navbar__link">
            MENS
          </Link>
          <Link href={"#"} className="relative navbar__link">
            WOMEN'S
          </Link>
          <Link href={"#"} className="relative navbar__link">
            OFFERS
          </Link>
          <Link href={"#"} className="relative navbar__link">
            ABOUT
          </Link>
          <Link href={"#"} className="relative navbar__link">
            CONTACT
          </Link>
          <Link href={"#"} className="relative navbar__link">
            BLOG
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
