import background from "../assets/Slider-4.jpg"
import Login from "./Login";

const UserPage = () => {
    return (
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{
            backgroundImage: `url(${background})`,
          }}>
            <Login></Login>
        </div>
    );
};

export default UserPage;