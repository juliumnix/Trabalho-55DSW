import { Navigate } from 'react-router-dom';

export default function PrivatedRoute({ children }) {
    console.log(localStorage.getItem("authLogin"))
    if (localStorage.getItem("authLogin")) {
        return <Navigate to='/' />
    } else {
        return children
    }
}