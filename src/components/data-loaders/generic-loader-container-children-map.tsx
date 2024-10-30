import axios from "axios";
import React, { useEffect, useState } from "react";

export const GenericLoaderContainerChildrenMap = ({
  children,
  resourceUrl,
  resourceName,
}: any) => {
  const [resource, setResource] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(resourceUrl);
      console.log(res.data);
      setResource(res.data);
    })();
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<any>(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};
