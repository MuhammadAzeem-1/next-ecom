import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbDeviceWatchStats, TbTruckDelivery } from "react-icons/tb";
import { TfiMobile } from "react-icons/tfi";

type sizeType = number | string | undefined;

const Icons = {
  TiStarFullOutline: (size: sizeType = undefined, className: string = "") => (
    <TiStarFullOutline size={size} className={className} />
  ),
  TiStarOutline: (size: sizeType = undefined, className: string = "") => (
    <TiStarOutline size={size} className={className} />
  ),
  TiStarHalfOutline: (size: sizeType = undefined, className: string = "") => (
    <TiStarHalfOutline size={size} className={className} />
  ),
  FaRegHeart: (size: sizeType = undefined, className: string = "") => (
    <FaRegHeart size={size} className={className} />
  ),
  FaArrowRight: (size: sizeType = undefined, className: string = "") => (
    <FaArrowRight size={size} className={className} />
  ),
  FaArrowLeft: (size: sizeType = undefined, className: string = "") => (
    <FaArrowLeft size={size} className={className} />
  ),

  AiOutlineSafetyCertificate: (
    size: sizeType = undefined,
    className: string = ""
  ) => <AiOutlineSafetyCertificate size={size} className={className} />,
  CiHeadphones: (size: sizeType = undefined, className: string = "") => (
    <CiHeadphones size={size} className={className} />
  ),
  HiOutlineCamera: (size: sizeType = undefined, className: string = "") => (
    <HiOutlineCamera size={size} className={className} />
  ),
  HiOutlineComputerDesktop: (
    size: sizeType = undefined,
    className: string = ""
  ) => <HiOutlineComputerDesktop size={size} className={className} />,
  RiCustomerServiceLine: (
    size: sizeType = undefined,
    className: string = ""
  ) => <RiCustomerServiceLine size={size} className={className} />,
  TbDeviceWatchStats: (size: sizeType = undefined, className: string = "") => (
    <TbDeviceWatchStats size={size} className={className} />
  ),
  TbTruckDelivery: (size: sizeType = undefined, className: string = "") => (
    <TbTruckDelivery size={size} className={className} />
  ),
  TfiMobile: (size: sizeType = undefined, className: string = "") => (
    <TfiMobile size={size} className={className} />
  ),
};

export default Icons;
