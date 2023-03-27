import { useEffect } from "react";

const MountExample = () => {
    useEffect(() => {
        console.log("mounting");

        return () => {
            console.log("unmounting");
        };
    }, []);

    return <p>Mounting component</p>
};

export default MountExample;
