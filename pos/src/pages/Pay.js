import styled from "styled-components";
import { COLOR } from "../styles/color";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { totalAmountState } from "../core/totalAmount";
import { totalSalesState, totalPaymentCountState } from "../core/totalAmount";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";
import { ReactComponent as Back } from "../assets/back.svg";

function Pay() {
  const totalAmount = useRecoilValue(totalAmountState);
  const [discountedAmount, setDiscountedAmount] = useState(totalAmount);
  const [isDiscount, setIsDiscount] = useState(false);

  const navigate = useNavigate();

  const [totalSales, setTotalSales] = useRecoilState(totalSalesState);
  const [totalPaymentCount, setTotalPaymentCount] = useRecoilState(
    totalPaymentCountState
  );

  const applyDiscount = () => {
    const discounted = totalAmount * 0.8; // 20% 할인된 금액 계산
    setDiscountedAmount(discounted);
    setIsDiscount((prevIsDiscount) => !prevIsDiscount);
  };

  const handlePayment = () => {
    toast.success("결제가 완료되었습니다.");

    setTotalSales((prevTotalSales) => prevTotalSales + totalAmount);
    setTotalPaymentCount((prevTotalPaymentCount) => prevTotalPaymentCount + 1);

    setTimeout(() => {
      navigate("/open");
    }, 2000);
  };

  console.log(totalSales);
  console.log(totalPaymentCount);

  return (
    <StPay>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick // 클릭으로 알람 닫기
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <StPayHeader>
        <Link to="/home">
          <Logo className="logo" />
        </Link>
      </StPayHeader>
      <StPayBack>
        <Link to="/open">
          <Back className="back" />
        </Link>
      </StPayBack>
      <StPayContainer>
        <PayAmount>
          <PayAmountBox>
            <div className="text">결제금액</div>
            <div className="money">{totalAmount}원</div>
          </PayAmountBox>
          {isDiscount && (
            <FinalAmountBox>
              <div className="text">최종금액</div>
              <div className="money">{discountedAmount}원</div>
            </FinalAmountBox>
          )}
        </PayAmount>
        <PayButton>
          <button
            className={`discount ${isDiscount ? "cancel" : ""}`}
            onClick={applyDiscount}
          >
            {isDiscount ? <p>임직원 할인 취소</p> : <p>임직원 할인</p>}
          </button>
          <button className="card" onClick={handlePayment}>
            <p>카드 결제</p>
          </button>
          <button className="cash" onClick={handlePayment}>
            <p>현금 결제</p>
          </button>
        </PayButton>
      </StPayContainer>
    </StPay>
  );
}

export default Pay;

const StPay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StPayBack = styled.div`
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
const StPayHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${COLOR.LIGHT_GRAY};
  .logo {
    width: 80px;
    margin-left: 20px;
  }
`;
const StPayContainer = styled.div`
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
  padding: 10px 30px;
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
const FinalAmountBox = styled(PayAmountBox)`
  margin-top: 30px;
  background-color: ${COLOR.BRIGHT_GRAY};
  .text {
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
  }
  .money {
    font-size: 30px;
    font-weight: 800;
    color: ${COLOR.MAIN};
  }
`;
const PayButton = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  p {
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
  }

  .discount {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.LIGHT_GRAY};
    border: none;
    :hover {
      background-color: ${COLOR.MAIN};
      color: ${COLOR.MAIN_WHITE};
    }
  }
  .discount.cancel {
    border: none;
    background-color: ${COLOR.MAIN};
    color: ${COLOR.MAIN_WHITE};
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.LIGHT_GRAY};
    border: none;
    :hover {
      background-color: ${COLOR.MAIN};
      color: ${COLOR.MAIN_WHITE};
    }
  }
  .cash {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.LIGHT_GRAY};
    border: none;
    :hover {
      background-color: ${COLOR.MAIN};
      color: ${COLOR.MAIN_WHITE};
    }
  }
`;
