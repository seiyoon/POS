import { atom, selector } from "recoil";

export const totalAmountState = atom({
  key: "totalAmountState",
  default: 0,
});

export const totalSalesState = atom({
  key: "totalSalesState",
  default: 0,
});

export const totalPaymentCountState = atom({
  key: "totalPaymentCountState",
  default: 0,
});

export const totalAmountsState = selector({
  key: "totalAmountsState",
  get: ({ get }) => {
    const totalSales = get(totalSalesState);
    return totalSales;
  },
});

export const totalPaymentCountSelector = selector({
  key: "totalPaymentCountSelector",
  get: ({ get }) => {
    const totalPaymentCount = get(totalPaymentCountState);
    return totalPaymentCount;
  },
});
