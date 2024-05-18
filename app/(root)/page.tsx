import HeaderBox from "@/components/HeaderBox";
import RightBar from "@/components/RightBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    $id: "12345",
    email: "example@example.com",
    userId: "67890",
    dwollaCustomerUrl: "https://www.dwolla.com/customer/123456",
    dwollaCustomerId: "123456",
    firstName: "Joseph",
    lastName: "Floe",
    address1: "123 Main Street",
    city: "Anytown",
    state: "NY",
    postalCode: "12345",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces and manage your account and transaction everytime everywhere"
          />
          <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1896.97}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 1956.56},{currentBalance: 2088.39}]}
      />
    </section>
  );
};

export default Home;
