import { default as React, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import anklet from "../../../images/silver/anklet.png";
import bangle from "../../../images/silver/bangle.png";
import braclet from "../../../images/silver/bracelet.png";
import chain from "../../../images/silver/chain.png";
import fingerring from "../../../images/silver/fingerring.jpg";
import others from "../../../images/silver/others.png";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import { getUnits } from "../../../redux/actions/unitAction";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../NavBar/NavBar";

const categories = [
  "Silver Anklet",
  "Silver Bala",
  "Silver Bangal",
  "Silver Crown",
  "Silver Chur",
  "Silver Chain",
  "Silver Earrings",
  "Silver Finger Ring",
  "Silver Locket",
  "Silver Mangalsutra",
  "Silver Nosepin",
  "Silver Necklace",
  "Silver Pola",
  "Silver Shakha",
  "Silver Shitahar",
  "Silver Tiara",
  "Silver Tikli",
  "Silver Others",
];
const Silver = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("Silver Bala");

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const { keyword } = useParams();

  const { units } = useSelector((state) => state.units);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getUnits());
  }, [alert, dispatch, error]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, error, alert, keyword, currentPage, category]);

  console.log(products);
  console.log(units);

  return (
    <div>
      <NavBar></NavBar>
      <h1> Our Silver Products</h1>
      <Container style={{ width: "90%" }} className="row mb-5 ml-5  mx-auto">
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={anklet} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Anklet</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5 box " src={bangle} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Bangle</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={braclet} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Bracelet</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={chain} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Chain</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={fingerring} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Finger ring</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={others} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Others</h5>{" "}
          </button>
        </Col>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Silver;
