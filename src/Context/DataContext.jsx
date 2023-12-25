import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
const DataContext = createContext({});
import Products from "../components/Products";
const localeStorage = JSON.parse(localStorage.getItem("in_cart") || "[]");
/////validation schema//
const Schema = yup.object().shape({
  name: yup.string().required("field cannot be empty"),
  email: yup.string().email().required("field cannot be empty"),
  phonenumber: yup.number().required("field cannot be empty"),
  address: yup.string().required("field cannot be empty"),
  zipcode: yup.number().required("field cannot be empty"),
  city: yup.string().required("field cannot be empty"),
  country: yup.string().required("field cannot be empty"),
  //emoneynumber: yup.number().positive().integer().required(),
  //emoneypin: yup.number().positive().integer().required(),
});
/////
export const DataProvider = ({ children }) => {
  const [userselect, setUserselect] = useState(4);
  const [final, setFinal] = useState([]);
  const [add, setAdd] = useState(1);
  const [cartIsvisible, setCartIsvisible] = useState(false);
  const [cart, setCart] = useState(localeStorage);
  const [debt, setDebt] = useState([]);
  const [cashonelivery, setCashonDelivery] = useState(true);
  const [showmore, setShowmore] = useState(false);
  const [Successmodal, setSuccessmodal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  /////
  const onSubmit = (data) => {
    //console.log(data);
    setSuccessmodal(true);
  };

  ///////

  // seeproduct function
  const btn = () => {
    const onep = Products.find((onep) => onep.id === userselect);
    if (onep == undefined) {
      return;
    } else {
      setFinal([{ ...onep }]);
      localStorage.setItem("list", JSON.stringify(onep));
    }
  };
  //end of seeproduct function

  /////////////////////////////////

  //cart increment
  const Add = () => {
    setAdd((prevadd) => prevadd + 1);
  };
  //cart decrement
  const Minus = () => {
    if (add > 1) {
      setAdd((prevadd) => prevadd - 1);
    }
  };
  //clear-cart
  const ClearCart = () => {
    setCart([]);
  };
  /////////////////////////////////
  //calcuate vat&shipping fee for total product orderd
  function Calculate_vat_shipping() {
    let loogii = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    let subtoatal = loogii + 50;
    let vat = loogii * 0.2;
    let grandTotal = subtoatal + vat;

    setDebt({ ...debt, fvat: vat.toFixed(1), fgrandtotal: grandTotal });
  }
  /////////////////////////////////

  // Adjust quantity of product in cart (increment)
  const IncrementQuantity = (productid) => {
    let newcartquantity = cart.find((item) => item.id === productid.id);
    newcartquantity.quantity += 1;
    const updatepro = cart.map((updatedProduct) => {
      if (newcartquantity.id === updatedProduct.id) return newcartquantity;
      return updatedProduct;
    });
    setCart(updatepro);
  };
  // Adjust quantity of product in cart (decrement)
  const DecremtQuantity = (productid) => {
    setCart((prev) =>
      prev.flatMap((item) =>
        item.id === productid
          ? item.quantity > 1
            ? [{ ...item, quantity: item.quantity - 1 }]
            : []
          : [item]
      )
    );
  };

  /////////////////////////////////

  //prevent duplicate item in cart &update cart quantity/price
  const toCart = (product, cart) => {
    const existingp = cart.find((iteme) => iteme.id === product.id);
    if (existingp) {
      const updatecart = cart.map((iteme) => {
        if (iteme.id === product.id) {
          toast(`${iteme.ShortName} as been modified succesfully`);
          return {
            ...iteme,
            quantity: iteme.quantity + add,
          };
        }
        return iteme;
      });
      setCart(updatecart);
    } else {
      toast(`${product.ShortName} has been added to cart`);
      const newcart = {
        ...product,
        quantity: add,
        total_amount: parseInt(final[0].price * add),
      };

      setCart([...cart, newcart]);
    }
  };
  /////////////////////////////////

  //adds product to cart original
  const AddtoCart = (final) => {
    const updatecart = toCart(final, cart);
  };

  const ShowCart = () => {
    setCartIsvisible((prevcartIsvisble) => !prevcartIsvisble);
  };

  /////////////////////////////////

  //stores selected product to localstorage
  useEffect(() => {
    const fromStore = JSON.parse(localStorage.getItem("list"));
    if (fromStore !== undefined) {
      setFinal([{ ...fromStore }]);
    }
  }, []);
  //prevent scroll when cart is displayed
  useEffect(() => {
    if (cartIsvisible) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [cartIsvisible]);

  /////////////////////////////////

  useEffect(() => {
    localStorage.setItem("in_cart", JSON.stringify(cart));
    Calculate_vat_shipping();
  }, [cart]);

  useEffect(() => {
    btn();
  }, [userselect]);

  //scroll to top
  const PageUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <DataContext.Provider
      value={{
        showmore,
        register,
        Successmodal,
        onSubmit,
        handleSubmit,
        setSuccessmodal,
        setShowmore,
        setCashonDelivery,
        cashonelivery,
        PageUp,
        setUserselect,
        userselect,
        btn,
        final,
        Add,
        add,
        Minus,
        cart,
        AddtoCart,
        ShowCart,
        cartIsvisible,
        ClearCart,
        IncrementQuantity,
        DecremtQuantity,
        debt,
        errors,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
