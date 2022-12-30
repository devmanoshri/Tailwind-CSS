import React from "react";
import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button primary>Click Me!</Button>
      </div>
      <div>
        <Button secondary>Buy Now</Button>
      </div>
      <div>
        <Button success>See ya</Button>
      </div>
      <div>
        <Button warning>See Deal</Button>
      </div>
      <div>
        <Button danger>Hide Ads</Button>
      </div>
    </div>
  );
}

export default App;
