import styled from "styled-components";
import { categories2 } from "../data";
import { mobile } from "../responsive";
import CategoryItem3 from "./CategoryItem3";

const Container = styled.div`
  display: flex;
  padding: 0px;
  justify-content: space-between;
  margin-top: -20px;
  
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories3 = () => {
  return (
    <Container>
      {categories2.map((item) => (
        <CategoryItem3 item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Categories3;