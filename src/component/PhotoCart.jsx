
import { Card ,} from "@heroui/react";
import { Download, Heart } from "lucide-react";

const PhotoCart = ({ photos }) => {
    return (
        
            <Card className="p-5 rounded-3xl border p-3 shadow-sm">
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                    <img
                        src={photos.image}
                        alt={photos.title}
                        className="w-full h-60 object-cover"
                    />

                    {/* Tag */}
                    <span className="absolute top-3 right-3 bg-black px-3 py-1 rounded-full text-sm font-medium shadow">
                        {photos.category}
                    </span>
                </div>

                {/* Title */}
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {photos.title}
                    </h2>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-3 text-gray-600">
                    <div className="flex items-center gap-2">
                        <Heart size={18} fill="black" />
                        <span>{photos.like}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Download size={18} />
                        <span>{photos.download}</span>
                    </div>
                </div>

                {/* Button */}
                <button className="w-full mt-5 border rounded-full py-3 font-medium bg-black hover:text-white transition">
                    View
                </button>
            </Card>
        
    );
};

export default PhotoCart;