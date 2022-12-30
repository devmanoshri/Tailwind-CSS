import React from "react";
import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button success warning rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button>Buy Now</Button>
      </div>
      <div>
        <Button>See Deal</Button>
      </div>
      <div>
        <Button>Hide Ads</Button>
      </div>
    </div>
  );
}

export default App;
