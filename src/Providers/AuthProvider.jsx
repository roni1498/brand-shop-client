import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider )
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the auth change", currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        } ;
    }, [])

    // add to cart product
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://brandshop-backend.vercel.app/addToCart');
            const cartData = await response.json();
            setCart(cartData);
          } catch (error) {
            console.error('Error fetching cart data:', error);
          }
        };
    
        fetchData();
      }, []);
    

    const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
    };
  
    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
    };

    const authInfo = {
        cart,
        addToCart,
        removeFromCart,
        user,
        loading,
        createUser,
        login,
        logOut,
        googleSignIn
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;