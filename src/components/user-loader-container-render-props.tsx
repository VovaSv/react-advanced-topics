import axios from "axios";
import  { useEffect, useState } from "react";

export const UserLoaderRenderProps = ({render}: any) => {
    const [user, setUser] = useState<any>(null);
    useEffect(()=> {
       (async () => {
        const res = await axios.get('/api/current-user');
        console.log(res.data)
        setUser(res.data)
       })();

    }, []);
    return (
    <> 
        {user && render({user})}
    </>
)

};
  