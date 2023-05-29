import styled from "styled-components";
import { COLOR } from "../styles/color";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";
import { ReactComponent as Trash } from "../assets/trash.svg";

function Open() {
  const [category, setCategory] = useState("음료");
  const [selectedMenus, setSelectedMenus] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const categories = ["음료", "아이스크림", "디저트", "기타"];

  const ClickCategory = (c) => {
    setCategory((prevCategory) => (prevCategory === c ? "" : c));
  };

  const updateTotalAmount = () => {
    const total = selectedMenus.reduce((acc, menu) => {
      return acc + menu.totalPrice;
    }, 0);
    setTotalAmount(total);
  };

  const handleMenuClick = (menu) => {
    const existingMenu = selectedMenus.find(
      (selectedMenu) => selectedMenu.id === menu.id
    );

    if (existingMenu) {
      const updatedMenus = selectedMenus.map((selectedMenu) => {
        if (selectedMenu.id === menu.id) {
          return {
            ...selectedMenu,
            quantity: selectedMenu.quantity + 1,
            totalPrice: selectedMenu.totalPrice + menu.price,
          };
        }
        return selectedMenu;
      });

      setSelectedMenus(updatedMenus);
    } else {
      setSelectedMenus((prevSelectedMenus) => [
        ...prevSelectedMenus,
        { ...menu, quantity: 1, totalPrice: menu.price },
      ]);
    }
  };

  useEffect(() => {
    updateTotalAmount();
  }, [selectedMenus]);

  const handleMenuDelete = (menu) => {
    setSelectedMenus((prevSelectedMenus) => {
      const updatedMenus = prevSelectedMenus
        .map((selectedMenu) => {
          if (selectedMenu.id === menu.id) {
            if (selectedMenu.quantity > 1) {
              return {
                ...selectedMenu,
                quantity: selectedMenu.quantity - 1,
                totalPrice: selectedMenu.totalPrice - menu.price,
              };
            }
            // 수량이 1일 경우, 해당 메뉴를 제거
            return null;
          }
          return selectedMenu;
        })
        .filter(Boolean); // null인 항목 제거

      return updatedMenus;
    });

    updateTotalAmount();
  };

  const Beveragemenu = [
    { id: 1, name: "아메리카노", price: 3000 },
    { id: 2, name: "카페라떼", price: 3500 },
    { id: 3, name: "카라멜라떼", price: 4500 },
    { id: 4, name: "바닐라라떼", price: 4500 },
    { id: 5, name: "라임에이드", price: 6000 },
    { id: 6, name: "자몽에이드", price: 6000 },
    { id: 7, name: "레몬에이드", price: 6000 },
    { id: 8, name: "청포도에이드", price: 6000 },
    { id: 9, name: "초코라떼", price: 5000 },
    { id: 10, name: "녹차라떼", price: 5500 },
    { id: 11, name: "생딸기라떼", price: 5500 },
  ];
  const Icecreammenu = [
    { id: 14, name: "초코", price: 3500 },
    { id: 15, name: "딸기", price: 3500 },
    { id: 16, name: "녹차", price: 3500 },
    { id: 17, name: "바닐라", price: 3500 },
    { id: 18, name: "레몬", price: 3500 },
    { id: 19, name: "블루베리", price: 3500 },
    { id: 20, name: "체리", price: 3500 },
    { id: 21, name: "자몽", price: 3500 },
    { id: 22, name: "초코 젤라또", price: 4500 },
    { id: 23, name: "딸기 젤라또", price: 4500 },
    { id: 24, name: "녹차 젤라또", price: 4500 },
    { id: 25, name: "쌀 젤라또", price: 4500 },
    { id: 26, name: "자몽 젤라또", price: 4500 },
    { id: 27, name: "레몬 젤라또", price: 4500 },
    { id: 28, name: "블루베리 젤라또", price: 4500 },
    { id: 29, name: "피스타치오 젤라또", price: 4500 },
    { id: 30, name: "바닐라 젤라또", price: 4500 },
    { id: 31, name: "라임 젤라또", price: 4500 },
  ];
  const Dessertmenu = [
    { id: 32, name: "마들렌", price: 3500 },
    { id: 33, name: "초코 마들렌", price: 3800 },
    { id: 34, name: "녹차 마들렌", price: 3800 },
    { id: 35, name: "휘낭시에", price: 3500 },
    { id: 36, name: "조각케이크", price: 6800 },
  ];
  const Etcmenu = [
    { id: 37, name: "생수", price: 1500 },
    { id: 38, name: "숫자초", price: 800 },
    { id: 39, name: "캐릭터초", price: 2000 },
  ];

  return (
    <StOpen>
      <StOpenHeader>
        <Link to="/home">
          <Logo className="logo" />
        </Link>
      </StOpenHeader>
      <StOpenContainer>
        <LeftOpenContainer>
          <MenuList>
            {selectedMenus.map((menu) => (
              <SelectedMenu key={menu.name}>
                <div className="name">{menu.name}</div>
                <div className="price">{menu.totalPrice}원</div>
                <div className="quantity">{menu.quantity}</div>
                <Trash
                  className="trash"
                  onClick={() => handleMenuDelete(menu)}
                />
              </SelectedMenu>
            ))}
          </MenuList>
          <TotalAmount>
            총 금액 : <span>{totalAmount}</span>원
          </TotalAmount>
          <PayButton>
            <LeftPay>취소</LeftPay>
            <RightPay>결제하기</RightPay>
          </PayButton>
        </LeftOpenContainer>
        <RightOpenContainer>
          <OpenCategory>
            {categories.map((c) => (
              <Category
                key={c}
                isSelected={c === category}
                onClick={() => ClickCategory(c)}
              >
                {c}
              </Category>
            ))}
          </OpenCategory>
          {category === "음료" && (
            <Menu>
              <MenuGrid>
                {Beveragemenu.map((item) => (
                  <MenuButton
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                  >
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}원</MenuPrice>
                  </MenuButton>
                ))}
              </MenuGrid>
            </Menu>
          )}
          {category === "아이스크림" && (
            <Menu>
              <MenuGrid>
                {Icecreammenu.map((item) => (
                  <MenuButton
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                  >
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}원</MenuPrice>
                  </MenuButton>
                ))}
              </MenuGrid>
            </Menu>
          )}
          {category === "디저트" && (
            <Menu>
              <MenuGrid>
                {Dessertmenu.map((item) => (
                  <MenuButton
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                  >
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}원</MenuPrice>
                  </MenuButton>
                ))}
              </MenuGrid>
            </Menu>
          )}
          {category === "기타" && (
            <Menu>
              <MenuGrid>
                {Etcmenu.map((item) => (
                  <MenuButton
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                  >
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}원</MenuPrice>
                  </MenuButton>
                ))}
              </MenuGrid>
            </Menu>
          )}
        </RightOpenContainer>
      </StOpenContainer>
    </StOpen>
  );
}

export default Open;

const StOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StOpenHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${COLOR.LIGHT_GRAY};
  .logo {
    width: 80px;
    margin-left: 20px;
  }
`;
const StOpenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const LeftOpenContainer = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const MenuList = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
`;
const SelectedMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  align-items: center;
  width: 80%;
  padding: 20px 30px;
  border-bottom: 1px solid ${COLOR.LIGHT_GRAY};

  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }

  .name {
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    letter-spacing: 0.5px;
  }
  .quantity {
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    letter-spacing: 0.5px;
    color: ${COLOR.MAIN};
  }
  .price {
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 0.5px;
  }
  .trash {
    width: 22px;
    height: 22px;
  }
`;
const TotalAmount = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  span {
    font-weight: 800;
    font-size: 25px;
    color: ${COLOR.MAIN};
  }
`;
const PayButton = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  height: 15%;
`;
const LeftPay = styled.div`
  float: left;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.LIGHT_GRAY};
  color: ${COLOR.DARK_GRAY};
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  :hover {
    background-color: ${COLOR.BRIGHT_GRAY};
  }
`;
const RightPay = styled.div`
  float: right;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.MAIN};
  color: ${COLOR.MAIN_WHITE};
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  :hover {
    background-color: ${COLOR.MAIN_HOVER};
  }
`;

const RightOpenContainer = styled.div`
  float: right;
  width: 60%;
  height: 100%;
  background-color: "#F6F6F6";
`;
const OpenCategory = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 70px;
  background-color: ${COLOR.BRIGHT_GRAY};
`;
const Category = styled.button`
  margin-right: 20px;
  border: none;
  border-radius: 10px;
  padding: 12px 30px;
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.5px;
  background-color: ${(props) =>
    props.isSelected ? COLOR.MAIN : COLOR.MEDIUM_GRAY};
  color: ${(props) => (props.isSelected ? COLOR.MAIN_WHITE : COLOR.MAIN_WHITE)};
  cursor: pointer;
`;
const Menu = styled.div`
  padding: 20px;
`;
const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border: none;
  border-radius: 10px;
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.5px;
  background-color: ${COLOR.MAIN_HOVER};
  color: ${COLOR.MAIN_WHITE};
  cursor: pointer;
  :hover {
    background-color: ${COLOR.MAIN};
  }
`;
const MenuName = styled.span`
  margin-bottom: 6px;
`;
const MenuPrice = styled.span`
  font-weight: 500;
  font-size: 15px;
  opacity: 0.8;
`;
