import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import allStore from "./store/actions/index.js";
import LandingPage from "./views/home/before-login/index.jsx";
import Footer from "./views/components/footer/footer.jsx";
import RegisterUser from "./views/user/register-user/register-user.jsx";
import RegisterWO from "./views/weddingOrganizer/register/register-wo";
import LoginWO from "./views/weddingOrganizer/login/login-wo";
import DetailPackage from "./views/user/detail-package-user/detail-package.jsx";
import ProfileWO from "./views/weddingOrganizer/profile/profile-wo";
import ProfileUser from "./views/user/profile-user/profile-user.jsx";
import ListPackage from "./views/weddingOrganizer/package/listPackage/listPackage";
import FormAddPackage from "./views/weddingOrganizer/package/addPackage/formAddPackage";
import ProfileWoUser from "./views/user/profile-wo-user/profile-wo-user.jsx";
import ProfileWo from "./views/weddingOrganizer/profile-wo/profile-wo.jsx";
import ListReservation from "./views/weddingOrganizer/reservation/listReservation";
import FormEditPackage from "./views/weddingOrganizer/package/editPackage.jsx/editPackage";
import History from "./views/user/history-order/history.jsx";
import SearchPage from "./views/components/search-page/search-page.jsx";
import ListPayment from "./views/admin/admin-dasboard/list-payment.jsx";
import AdminLogin from "./views/admin/admin-login/admin-login.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch(allStore.ProfileUser());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/register" element={<RegisterUser />} />
        <Route path="/vendor/register" element={<RegisterWO />}></Route>
        <Route path="/vendor/login" element={<LoginWO />}></Route>
        <Route path="/detail/package/:id" element={<DetailPackage />}></Route>
        <Route path="/vendor/profile/edit" element={<ProfileWO />}></Route>
        <Route path="/user/profile" element={<ProfileUser />}></Route>
        <Route path="/user/history" element={<History />}></Route>
        <Route path="/vendor/packages" element={<ListPackage />}></Route>
        <Route path="/vendor/packages/add" element={<FormAddPackage />}></Route>
        <Route path="/user/detail/organizer/:id" element={<ProfileWoUser />}></Route>
        <Route path="/vendor/profile" element={<ProfileWo />}></Route>
        <Route path="/vendor/reservations" element={<ListReservation />}></Route>
        <Route path="/vendor/packages/edit/:id" element={<FormEditPackage />}></Route>
        <Route path="/search/package" element={<SearchPage />}></Route>
        <Route path="/admin/dashboard" element={<ListPayment />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
