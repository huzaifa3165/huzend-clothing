import Directory from "../../directory/directory.component";

import { StyleHomePageContainer } from "./homepage.styles";

const HomePage = (props) => {
  console.log(props);
  return (
    <StyleHomePageContainer>
      <Directory />
    </StyleHomePageContainer>
  );
};

export default HomePage;
