import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/1.home/Home";
import Headphones from "./pages/2.headphones/Headphones";
import Speakers from "./pages/3.speakers/Speakers";
import Earphones from "./pages/4.earphones/Earphones";
import SeeHeadphoneproduct from "./pages/SeeheadphoneProductsection.jsx/SeeHeadphoneproduct";
import SeespeakerProductselect from "./pages/SeespekerProductselected.jsx/SeespeakerProductselect";
import SeeEarphoneproduct from "./pages/SeeearphoneProductselected.jsx/SeeEarphoneproduct";
import { DataProvider } from "./Context/DataContext";
import Zx7_Speakerpage from "./pages/SeespekerProductselected.jsx/ZX7_speakerpage/zx7_Speakerpage";
import Xx99_page from "./pages/SeeheadphoneProductsection.jsx/XX99_headphonepage/Xx99_page";
import Xx59_page from "./pages/SeeheadphoneProductsection.jsx/Xx59_page/Xx59_page";
import Check_Out from "./components/Check_Out";
import Scroolltotop from "./components/Scroolltotop";

function App() {
  return (
    <>
    
      <div className=" h-screen p-0">
        <DataProvider>
          <Router>
          <Scroolltotop/>
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/headphones" element={<Headphones />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/earphones" element={<Earphones />} />
              <Route
                path="/headphones_seeproduct"
                element={<SeeHeadphoneproduct />}
              />
              <Route
                path="/earphones_seeproduct"
                element={<SeeEarphoneproduct />}
              />
              <Route
                path="/speakers_details"
                element={<SeespeakerProductselect />}
              />
              <Route
                path="/zx7speakers_details"
                element={<Zx7_Speakerpage />}
              />
              <Route path="/xx9headpone_details" element={<Xx99_page />} />
              <Route path="/xx59headpone_details" element={<Xx59_page />} />

              <Route path="/checkout" element={<Check_Out />} />
            </Routes>
          </Router>
        </DataProvider>
      </div>
    </>
  );
}

export default App;
