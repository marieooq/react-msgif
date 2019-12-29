import store from "../reducers/store";

const handleMediaQuery = mq => {
  const docStyle = document.documentElement.style;

  // changeScreenSize(store.getState().screenSize);
  if (mq.matches) {
    if (store.getState().screenSize === "twitter") {
      docStyle.setProperty("--screenWidth", "256px");
      docStyle.setProperty("--screenHeight", "128px");
    } else if (store.getState().screenSize === "social") {
      docStyle.setProperty("--screenWidth", "200px");
      docStyle.setProperty("--screenHeight", "200px");
    }
  } else {
    if (store.getState().screenSize === "twitter") {
      docStyle.setProperty("--screenWidth", "512px");
      docStyle.setProperty("--screenHeight", "256px");
    } else if (store.getState().screenSize === "social") {
      docStyle.setProperty("--screenWidth", "400px");
      docStyle.setProperty("--screenHeight", "400px");
    }
  }
};

export default handleMediaQuery;
