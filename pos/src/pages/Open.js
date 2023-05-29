import styled from "styled-components";
import { COLOR } from "../styles/color";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";

function Open() {
  const [category, setCategory] = useState("음료");
  const categories = ["음료", "아이스크림", "디저트", "기타"];

  const ClickCategory = (c) => {
    setCategory((prevCategory) => (prevCategory === c ? "" : c));
    window.scrollTo(0, 0);
  };

  const Beveragemenu = [
    { name: "아메리카노", price: "3,000₩" },
    { name: "카페라떼", price: "3,500₩" },
    { name: "카라멜라떼", price: "4,500₩" },
    { name: "바닐라라떼", price: "4,500₩" },
    { name: "라임에이드", price: "6,000₩" },
    { name: "자몽에이드", price: "6,000₩" },
    { name: "레몬에이드", price: "6,000₩" },
    { name: "청포도에이드", price: "6,000₩" },
    { name: "초코라떼", price: "5,000₩" },
    { name: "녹차라떼", price: "5,500₩" },
    { name: "생딸기라떼", price: "5,500₩" },
  ];
  const Icecreammenu = [
    { name: "초코", price: "3,500₩" },
    { name: "딸기", price: "3,500₩" },
    { name: "녹차", price: "3,500₩" },
    { name: "바닐라", price: "3,500₩" },
    { name: "레몬", price: "3,500₩" },
    { name: "블루베리", price: "3,500₩" },
    { name: "체리", price: "3,500₩" },
    { name: "자몽", price: "3,500₩" },
    { name: "초코 젤라또", price: "4,500₩" },
    { name: "딸기 젤라또", price: "4,500₩" },
    { name: "녹차 젤라또", price: "4,500₩" },
    { name: "쌀 젤라또", price: "4,500₩" },
    { name: "자몽 젤라또", price: "4,500₩" },
    { name: "레몬 젤라또", price: "4,500₩" },
    { name: "블루베리 젤라또", price: "4,500₩" },
    { name: "피스타치오 젤라또", price: "4,500₩" },
    { name: "바닐라 젤라또", price: "4,500₩" },
    { name: "라임 젤라또", price: "4,500₩" },
  ];
  const Breadmenu = [
    { name: "마들렌", price: "3,500₩" },
    { name: "초코 마들렌", price: "3,800₩" },
    { name: "녹차 마들렌", price: "3,800₩" },
    { name: "휘낭시에", price: "3,500₩" },
    { name: "조각케이크", price: "6,800₩" },
    { name: "홀케이크", price: "42,000₩" },
  ];
  const Etcmenu = [
    { name: "생수", price: "1,500₩" },
    { name: "숫자초", price: "800₩" },
    { name: "캐릭터초", price: "2,000₩" },
  ];

  return (
    <StOpen>
      <StOpenHeader>
        <Link to="/home">
          <Logo className="logo" />
        </Link>
      </StOpenHeader>
      <StOpenContainer>
        <LeftOpenContainer></LeftOpenContainer>
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
                  <MenuButton key={item.name}>
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}</MenuPrice>
                  </MenuButton>
                ))}
              </MenuGrid>
            </Menu>
          )}
          {category === "아이스크림" && (
            <Menu>
              <MenuGrid>
                {Icecreammenu.map((item) => (
                  <MenuButton key={item.name}>
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}</MenuPrice>
                  </MenuButton>
                ))}
              </MenuGrid>
            </Menu>
          )}
          {category === "디저트" && (
            <Menu>
              <MenuGrid>
                {Breadmenu.map((item) => (
                  <MenuButton key={item.name}>
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}</MenuPrice>
                  </MenuButton>
                ))}
              </MenuGrid>
            </Menu>
          )}
          {category === "기타" && (
            <Menu>
              <MenuGrid>
                {Etcmenu.map((item) => (
                  <MenuButton key={item.name}>
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}</MenuPrice>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LeftOpenContainer = styled.div`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background: black;
`;

const RightOpenContainer = styled.div`
  float: right;
  width: 60%;
  height: 100%;
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
