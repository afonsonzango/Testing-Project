import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

import Navbar from "../components/Navbar";

TopBarProgress.config({
    barColors: {
        "0": "rgb(103, 16, 189)"
    },
    shadowBlur: 0,
});

const General = () => {
    const [progress, setProgress] = useState(false);
    const [prevLoc, setPrevLoc] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname);
        setProgress(true);
        if (location.pathname === prevLoc) {
            setPrevLoc('');
        };
    }, [location]);

    useEffect(() => {
        setProgress(false);
    }, [prevLoc]);

    return (
        <>
            {progress && <TopBarProgress />}
            <Navbar />
        </>
    );
};

export default General;