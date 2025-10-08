import Banner  from "./assets/images/Banner.jpg";
import New from "./assets/images/New.jpg";
import New1 from "./assets/images/New1.jpg";
import Collection1 from "./assets/images/Collection1.jpg";
import Collection2 from "./assets/images/Collection2.jpg";
import Collection3 from "./assets/images/Collection3.jpg";
import Collection4 from "./assets/images/Collection4.jpg";
import Collection5 from "./assets/images/Collection5.jpg";
import { StaticImageData } from "next/image";

interface ImagesTypes{
    Banner: StaticImageData,
    New: StaticImageData,
    New1: StaticImageData,
    Collection1: StaticImageData,
    Collection2: StaticImageData,
    Collection3: StaticImageData,
    Collection4: StaticImageData,
    Collection5: StaticImageData,
}

const images: ImagesTypes = {
    Banner,
    New,
    New1,
    Collection1,
    Collection2,
    Collection3,
    Collection4,
    Collection5,

}