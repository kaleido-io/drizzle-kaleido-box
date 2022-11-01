import MyComponent from "./MyComponent";
import { drizzleConnect } from '@drizzle/react-plugin'

const mapStateToProps = state => {
  return {
    SimpleStorage: state.contracts.SimpleStorage
  };
};

const MyContainer = drizzleConnect(MyComponent, mapStateToProps);

export default MyContainer;
