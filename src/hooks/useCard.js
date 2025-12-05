import { useState } from "react";

export const CARD_STATUS = {
  default: "default",
  true: "true",
  false: "false",
  verifying: "verifying",
  disabled: "disabled",
};
export const useCard = (news) => {
  const title = news.title;
  const description = news.description;
  const [status, setStatus] = useState(CARD_STATUS.default);
  const verifyCard = async () => {
    setStatus(CARD_STATUS.verifying);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    switch (news.isReal) {
      case true:
        setStatus(CARD_STATUS.true);
        break;
      case false:
        setStatus(CARD_STATUS.false);
        break;
    }
  };

  return { title, description, status, setStatus, verifyCard };
};
