import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "../styles";
import { ICardDetailsType } from "../types";

export const CardInfo = () => {
  const {
    state: { id, cardsArray },
  } = useLocation();

  return (
    <>
      <GlobalStyles />
      <CardInfoWrapper>
        {cardsArray.map(
          (card: ICardDetailsType) =>
            id === card.id && (
              <>
                <CardAvatar src={card.avatar} />
                <p>
                  Name : <CardDetails>{card.name}</CardDetails>{" "}
                </p>
                <p>
                  Description : <CardDetails>{card.description}</CardDetails>
                </p>
                <p>
                  Priority: <CardDetails>{card.priority}</CardDetails>{" "}
                </p>
                <p>
                  Status : <CardDetails>{card.status}</CardDetails>
                </p>
                <p>
                  Type : <CardDetails>{card.type}</CardDetails>
                </p>
              </>
            )
        )}
      </CardInfoWrapper>
    </>
  );
};

const CardInfoWrapper = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 80%;
  padding: 30px 60px;
  gap: 20px;
`;

const CardAvatar = styled.img`
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;

const CardDetails = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;
