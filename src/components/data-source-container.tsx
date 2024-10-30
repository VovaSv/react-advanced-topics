import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataSourceContainer = ({
  getData,
  children,
  resourceName,
}: any) => {
  const [resource, setResource] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      console.log(data);
      setResource(data);
    })();
  }, [getData]);
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
