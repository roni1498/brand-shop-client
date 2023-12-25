import MobileImage from "../assets/mobile.png";
import LaptopImage from "../assets/leptop.png";
import SmartwatchImage from "../assets/watch.png";
import HeadphoneImage from "../assets/headphone.png";
import TVImage from "../assets/tv.png";
import CameraImage from "../assets/camera.png";

const ProductCategory = () => {
    const categories = [
        { "category": "Mobile", "image": MobileImage },
        { "category": "Laptop", "image": LaptopImage },
        { "category": "Smartwatch", "image": SmartwatchImage },
        { "category": "Headphone", "image": HeadphoneImage },
        { "category": "TV", "image": TVImage },
        { "category": "Camera", "image": CameraImage }
    ];

    return (
        <div className="relative rounded-md max-w-5xl flex justify-between items-center mx-auto bg-slate-300 p-4 md:-mt-20 -mt-12 bg-opacity-50">
            {
                categories.map(category => (
                    <div className="md:h-28 md:w-28 h-16 w-16 mx-auto" key={category.category}>
                        <img className="h-full w-full object-contain" src={category.image} alt={category.category} />
                    </div>
                ))
            }
        </div>
    );
};

export default ProductCategory;
