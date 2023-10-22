import Container from "../../components/common/Container";
import SalesRevenueGraph from "./components/SalesRevenueGraph";
import TotalCards from "./components/TotalCards";

const AdminDashboard = () => {
  return (
    <Container>
      <TotalCards />
      <section className="py-6 grid grid-cols-1  md:grid-cols-2  gap-4 ">
        <SalesRevenueGraph />
      </section>
    </Container>
  );
};

export default AdminDashboard;
