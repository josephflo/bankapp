import HeaderBox from "@/components/HeaderBox";
import RightBar from "@/components/RightBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
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
