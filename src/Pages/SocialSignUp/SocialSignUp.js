import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import toast from "react-hot-toast";


const SocialSignUp = () => {

    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                toast('login successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="card-body">
            <div className="form-control">
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>LOGIN WITH GOOGLE <FcGoogle className='ml-2'></FcGoogle></button>
            </div>
        </div>
    );
};

export default SocialSignUp;