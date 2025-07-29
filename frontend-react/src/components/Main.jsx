import React from "react";
import Button from "./Button";

const main = () => {
  return (
    <>
    <div className="container mt-5">
        <div className="pt-5 text-center bg-light-dark rounded pb-3">
            <h1 className="text-light">Stock Prediction Portal</h1>
            <p className="text-light lead">
                Stock prediction involves forecasting the future price of a company's stock based on historical data, market trends, and various financial indicators. Techniques such as machine learning, technical analysis, and fundamental analysis are commonly used to identify patterns and make informed predictions. While no method guarantees accuracy due to market volatility and external factors, stock prediction models can help investors make better decisions by estimating potential price movements.
            </p>
            <Button text="LogIn" class = "btn-outline-info"/>

        </div>

    </div>
    </>
  );
};

export default main;
