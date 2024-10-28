import axios from "axios";
import React, { useEffect, useState } from "react";

export const CurrentUserLoader = ({ children }: any) => {
    const [user, setUser] = useState<any>(null);
    useEffect(()=> {
       (async () => {
        const res = await axios.get('http://127.0.0.1:9090/current-user');
        console.log(res.data)
        setUser(res.data)
       })();

    }, []);
    return (
    <>
    {React.Children.map(children, child => {
        if(React.isValidElement<any>(child)) {
                return React.cloneElement(child, {user})
        }
        return child;
    })}
    </>
)

};
  