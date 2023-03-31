import { useParams } from "react-router-dom";

const Contact = () => {
    const param = useParams();
    return <h2>Contact page: {param.contactId}</h2>
};

export default Contact;
