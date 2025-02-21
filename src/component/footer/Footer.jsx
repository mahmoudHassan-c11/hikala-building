import { Link } from "react-router-dom";
import "./footer.css";
import { FaPhone } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-2">
      <div className="overlay"></div>
      <div className="top">
        <p>لذلك ،، نسعى لتقديم أفضل خدمات الانشاءات والمقاولات</p>
        <Link to="contact">
          <button>اتصل بنا</button>
        </Link>
      </div>
      <div className="footer-bottom">
        <div className="footer-details basis-[40%]">
          <p>عن مؤسسة هيكلة الإعمار و البناء للمقاولات العامة</p>
          <p>
            شركة مقاولات عامة سعودية تعمل بمجال المقاولات العامة منذ عام 1445
            وعلى مدى السنوات أصبحت مؤسسة هيكلة الإعمار و البناء جزء من بناء
            المستقبل في السعودية بتنفيذ العديد من المشروعات الناجحة وذلك اعتمادا
            على الخبرات القوية لمؤسسيها وكفاءاتها الشابة الحديثة
          </p>
        </div>
        <div className="footer-links basis-[30%]">
          <ul>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="about-us">من نحن</Link>
            </li>
            <li>
              <Link to="services">خدماتنا</Link>
            </li>
            <li>
              <Link to="">مشروعاتنا</Link>
            </li>
            <li>
              <Link to="contact">اتصل بنا</Link>
            </li>
            <li>
              <Link>سياسة الخصوصية</Link>
            </li>
            <li>
              <Link>اتفاقية الاستخدام</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact basis-[30%]">
          <p className="flex items-center">
            <FaPhone />
            أرضي : +966 55 424 7096⁩
          </p>
          <p className="flex items-center">
            <div>
              <FaMobileAlt />
            </div>
            موبايل : 08022280 012 2+
          </p>
          <p className="flex items-center">
            <MdEmail /> إيميل : attar201189@yahoo.com
          </p>
          <div className="social flex items-center justify-between gap-1 w-[30%] mt-2 mb-2">
            <a href="" className="block text-3xl text-[#557DBC]">
              <FaFacebookSquare />
            </a>
            <a href="" className="block text-3xl text-[#1C86C6]">
              <FaLinkedin />
            </a>
            <a href="" className="block text-3xl text-[#8A3AB9]">
              <FaInstagram />
            </a>
          </div>

          <div className="logo  ">
            <img
              src="public/image/Hikala-Logo.png"
              alt=""
              className="w-[150px] h-[120px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
