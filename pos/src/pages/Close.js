import styled from "styled-components";
import { COLOR } from "../styles/color";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { totalPaymentCountState, totalSalesState } from "../core/totalAmount";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Close() {
  const totalSales = useRecoilValue(totalSalesState);
  const totalPaymentCount = useRecoilValue(totalPaymentCountState);

  //   console.log(totalSales);
  //   console.log(totalPaymentCount);

  const handleReceipt = () => {
    toast.success("영수증이 출력되었습니다.");
  };

  const resetRecoilValues = useResetRecoilState(totalSalesState);
  const resetPaymentCount = useResetRecoilState(totalPaymentCountState);

  const navigate = useNavigate();
  const handleExit = () => {
    resetRecoilValues();
    resetPaymentCount();
    navigate("/");
  };

  return (
    <StClose>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick // 클릭으로 알람 닫기
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <StCloseHeader>
        <Link to="/home">
          <Logo className="logo" />
        </Link>
      </StCloseHeader>
      <StCloseBack>
        <Link to="/home">
          <Back className="back" />
        </Link>
      </StCloseBack>
      <StCloseContainer>
        <PayAmount>
          <PayAmountBox>
            <div className="text">총 매출금액</div>
            <div className="money">{totalSales}원</div>
          </PayAmountBox>
          <PayAmountBox>
            <div className="text">총 고객수</div>
            <div className="money">{totalPaymentCount}명</div>
          </PayAmountBox>
        </PayAmount>
        <CloseButton>
          <button className="receipt" onClick={handleReceipt}>
            <p>영수증 출력</p>
          </button>
          <button className="exit" onClick={handleExit}>
            <p>종료하기</p>
          </button>
        </CloseButton>
      </StCloseContainer>
    </StClose>
  );
}

export default Close;

const StClose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StCloseBack = styled.div`
  width: 100%;
  margin-left: 100px;
  .back {
    display: flex;
    justify-content: left;
    margin-top: 50px;
    width: 50px;
    height: 50px;
  }
`;
const StCloseHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${COLOR.LIGHT_GRAY};
  .logo {
    width: 80px;
    margin-left: 20px;
  }
`;
const StCloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const PayAmount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  width: 100%;
`;
const PayAmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  width: 500px;
  height: 50px;
  background-color: ${COLOR.BRIGHT_GRAY};
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.5px;
  .money {
    font-size: 26px;
    font-weight: 800;
    color: ${COLOR.MAIN};
  }
`;
const CloseButton = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;

  p {
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
  }

  .receipt {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.LIGHT_GRAY};
    border: none;
    :hover {
      background-color: ${COLOR.MEDIUM_GRAY};
      color: ${COLOR.MAIN_WHITE};
    }
  }
  .exit {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.MAIN_HOVER};
    color: ${COLOR.MAIN_WHITE};
    border: none;
    :hover {
      background-color: ${COLOR.MAIN};
      color: ${COLOR.MAIN_WHITE};
    }
  }
`;
