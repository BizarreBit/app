import { useEffect } from "react";

function Message() {
  useEffect(() => {
    console.log("Message Component Effect");
    return () => {
      console.log("Message Cleaning Effect");
    };
  });
  return <div>Hello</div>;
}

export default Message;
