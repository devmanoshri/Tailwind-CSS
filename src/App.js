import React from "react";
import Button from "./Button";
import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";
function App() {
  const handelClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onMouseEnter={handelClick}>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded onClick={handelClick}>
          <GoDatabase />
          Buy Now
        </Button>
      </div>
      <div>
        <Button success>
          <GoCloudDownload />
          See ya
        </Button>
      </div>
      <div>
        <Button warning outline>
          See Deal
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Hide Ads
        </Button>
      </div>
    </div>
  );
}

export default App;
