import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ShoppingContext } from "@/context/shoppingContextProvider";
import Link from "next/link";
import Image from "next/image";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = () => {
  const { db, READ_DATA, ADD_ITEM_TO_CART } = useContext(ShoppingContext);
  useEffect(() => {
    READ_DATA();
  }, []);

  const { products, cart } = db;

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="row no-gutters">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 bg-yellow-100 pt-4"
        id="owl-carousel-products"
      >
        <h2 className="font-navbar text-2xl md:text-3xl mb-6 md:text-center">
          Productos destacados
        </h2>
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            dots={false}
            animateIn={true}
            {...options}
          >
            {products && products.length > 0
              ? products.map((product) => {
                  return (
                    <div key={product.id} className="item float-left w-100">
                      <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                        <Link href="./products">
                          <div className="product float-left">
                            <span className="image text-center">
                              <Image
                                id={product.id}
                                src={product.image}
                                width={200}
                                height={200}
                                alt={product.name}
                                title={product.name}
                              />
                            </span>
                            <span className="w-100 text-center mt-1">
                              <h5 className="brand text-capitalize float-left">
                                {product.brand}
                              </h5>
                              <span className="name">{product.name}</span>
                              <br />
                              <strong className="itemPrice p-0">
                                Precio ${product.price}
                              </strong>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
