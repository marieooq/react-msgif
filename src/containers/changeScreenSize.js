const changeScreenSize = size => {
  let docStyle = document.documentElement.style;

  if (size === "twitter") {
    docStyle.setProperty("--screenWidth", "512px");
    docStyle.setProperty("--screenHeight", "256px");
  } else if (size === "social") {
    docStyle.setProperty("--screenWidth", "400px");
    docStyle.setProperty("--screenHeight", "400px");
  }
};

export default changeScreenSize;
