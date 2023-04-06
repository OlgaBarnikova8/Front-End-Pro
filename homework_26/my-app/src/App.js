import { useState } from 'react';
import Button from "./components/Button";
import Alert from "./components/Alert";
import GlobalFonts from './fonts/fonts';


const App = () => {

    const [isOpenedAlert, setOpenedAlert] = useState(false);

    const handleOpen = () => setOpenedAlert(true);

    const handleClose = () => setOpenedAlert(false);

    return (
        <>
            <GlobalFonts />
            <Button>label</Button>
            <Button disabled >label</Button>
            <Button color="primary" size="small">label</Button>
            <Button color="primary" size="large">label</Button>
            
            <Button color="secondary" >label</Button>
            <Button color="secondary" disabled >label</Button>
            <Button color="secondary" size="small" disabled >label</Button>
            
            
            <Alert>Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.
            </Alert>
            <Alert color="error">Trimpa is currently experiencing an outage. We appreciate your patience. Stay up to date at status.tripma.com.
            </Alert>
            <Alert color="warning">Tripma will be undergoing routine maintenance in 30 minutes. We expect this to take no longer than 15 minutes. 
            </Alert>

            <button onClick={handleOpen}>Open alert</button>
            {isOpenedAlert && <Alert color="primary" onClose={handleClose}>Some text</Alert>}
        </>
    )
};

export default App;
