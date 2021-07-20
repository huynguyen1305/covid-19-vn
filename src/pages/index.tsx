import { Button } from "antd";
import styled from "styled-components";
import { useGetPostsQuery } from "../services/postApi";

const ButtonStyled = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
`;

export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();

  return (
    <div>
      <h1>Hello</h1>
      <ButtonStyled ghost block>
        Alo
      </ButtonStyled>
    </div>
  );
}
