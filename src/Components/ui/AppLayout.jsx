import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import Loader from "../ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      <div className="my-10 overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
