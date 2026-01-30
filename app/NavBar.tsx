import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
    </>
  );
};

export default NavBar;
