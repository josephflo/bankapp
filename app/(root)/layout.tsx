import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "12345",
    email: "example@example.com",
    userId: "67890",
    dwollaCustomerUrl: "https://www.dwolla.com/customer/123456",
    dwollaCustomerId: "123456",
    firstName: "John",
    lastName: "Doe",
    address1: "123 Main Street",
    city: "Anytown",
    state: "NY",
    postalCode: "12345",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
          src={'/icons/logo.svg'}
          width={30}
          height={30}
          alt="menu-icon"
          />
        <div>
          <MobileNav user={loggedIn}/>
        </div>
        </div>
      {children}
      </div>
    </main>
  );
}
