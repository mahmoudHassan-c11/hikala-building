import "./contact.css";
import { FaPhone } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import GoogleMapComponent from "../GoogleMapComponent/GoogleMapComponent ";
function Contact() {
  return (
    <section className="contact">
      <div className="contact-hero pt-[100px] h-[40vh] ">
        <div className="content flex items-center justify-between">
          <div className="info w-[50%] ">
            <h1>اتصل بنا</h1>
          </div>
        </div>
      </div>
      <div className="contact-form pt-[130px] pb-[100px] flex gap-[20px] justify-between">
        <div className="contact-details">
          <div className="content">
            <div className="contact-media mb-3">
              <h3 className="text-3xl text-[#FF832C] mb-4">وسائل الاتصال</h3>
              <p className="flex items-center gap-2 text-[#0170B9]">
                <i className="text-[#777] flex gap-1 items-center text-xl">
                  <FaPhone />
                  أرضي :
                </i>
                +966 55 424 7096⁩
              </p>
              <p className="flex items-center gap-2 text-[#0170B9]">
                <i className="text-[#777] flex gap-1 items-center text-xl">
                  <FaMobileAlt />
                  موبايل :
                </i>
                +966 55 424 7096⁩
              </p>
              <p className="flex items-center gap-2 text-[#0170B9]">
                <i className="text-[#777] flex gap-1 items-center text-xl">
                  <MdEmail />
                  إيميل :
                </i>
                info@bsceg.com
              </p>
            </div>
            <div className="contact-social mt-[50px]">
              <h3 className="text-3xl text-[#FF832C] mb-4">
                شاركنا عبر السوشيال ميديا{" "}
              </h3>
              <div className="social flex items-center justify-between gap-1 w-[20%] mt-2 mb-2">
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
            </div>
          </div>
        </div>
        <form>
          <h3 className="text-3xl text-[#FF832C] mb-4">أرسل لنا استفسارك …</h3>
          <div>
            <label htmlFor="">
              اسمك <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">
              بريدك الالكتروني
              <span>*</span>
            </label>
            <input type="emial" />
          </div>
          <div>
            <label htmlFor="">
              تليفونك
              <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">
              رسالتك
              <span>*</span>
            </label>
            <textarea type="text" />
          </div>
          <button className="btn-contact">إرسال</button>
        </form>
      </div>
      <div className="company-address pt-[100px]">
        <h1 className="title ">عنوان المقر الرئيسي</h1>
        <p className="text-center mt-8 text-[#777] text-xl">
          الرياض , ظهرة لبن شارع اسير
        </p>
        <div className="pt-9">
          <GoogleMapComponent />
        </div>
      </div>
    </section>
  );
}

export default Contact;
