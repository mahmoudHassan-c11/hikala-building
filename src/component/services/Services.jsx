import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import OurServices from "./OurServices";

function Services() {
  return (
    <Link to="/services">
      <div className="services pt-10 ">
        <div className="content flex items-center justify-between">
          <div className="info w-[50%] ">
            <h1>خدمات الشركة</h1>
            <p>
              تقدم مؤسسة هيكلة الإعمار و البناء للمقاولات العامة معظم خدمات
              البناء والانشاءات المعمارية الحديثة بدءاً من التصميم وحتى التنفيذ
              مروراً بأعمال الحفر والانشاء والتشطيب وغيرها من متطلبات العمل
              كشركة مقاولات تسعى للنجاح في هذا المجال
            </p>
          </div>
          <img src="public\image\4j1jh9w5.png" alt="" />
        </div>
      </div>
      <div className="ser pt-[120px] pb-[100px] text-center">
        <h2>خدمات مؤسسة هيكلة الإعمار و البناء للمقاولات العامة للمقاولات</h2>
        <p>
          تعمل شركات المقاولات على إنجاز العديد من المشاريع ذات طابع خاص
          بالتشييد والبناء ومن تلك المشاريع التي تنفذها شركة أنظمة البناء
          للمقاولات هو كافة أنواع مجالات التشييد والبناء والترميم وكل ما يخص
          اعمال البناء والتشييد من (المجمعات السكنية ،والمراكز التجارية ،بناء
          المستشفيات والمدارس ،الأبراج والفنادق وكافة المنشآت والمرافق العامة
        </p>
      </div>
      <OurServices />
      <div className="unique pt-[50px] pb-[50px]">
        <p className="w-fit mx-auto text-2xl text-[#FF6900]">وما يميزنا …</p>
        <div className="boxes flex items-center justify-between p-5 flex-wrap">
          <div className="box h-[370px] basis-[22%] bg-white p-4 ">
            <span className="w-[100px] mx-auto h-[100px] rounded-full bg-[#94BFE7] flex items-center justify-center">
              <i className="text-6xl text-[#186FAF]">
                <FaHandHoldingDollar />
              </i>
            </span>
            <p className=" text-center text-2xl my-[15px] text-[#186faf]">
              مرونة التسعير
            </p>
            <p className="text-[#777] text-justify">
              وتأتي مرونة تسعير المشروعات وفقاً لقراءة الوضع اﻻقتصادي أثناء
              التخطيط للوضع في الاعتبار تكاليف المعدات والعمالة ومواد البناء
              وتوفرها مع مراعاة المنافسة لإعطاء سعر تنافسي مرغوب
            </p>
          </div>
          <div className="box h-[370px] basis-[22%] bg-white p-4 ">
            <span className="w-[100px] mx-auto h-[100px] rounded-full bg-[#FFEEEE] flex items-center justify-center">
              <i className="text-6xl text-[#D64545]">
                <FaCheckSquare />
              </i>
            </span>
            <p className=" text-center text-2xl my-[15px] text-[#D64545]">
              دقة التنفيذ
            </p>
            <p className="text-[#777] text-justify">
              تلتزم شركة أنظمة البناء للمقاولات بدقة وسرعة تنفيذ المشروعات
              والإهتمام بدقة التفاصيل مع الإلتزام بمعايير الجودة والتوقيت للوصول
              بالمشروع إلى التنفيذ المثالي المطلوب
            </p>
          </div>
          <div className="box h-[370px] basis-[22%] bg-white p-4 ">
            <span className="w-[100px] mx-auto h-[100px] rounded-full bg-[#FFF3C4] flex items-center justify-center">
              <i className="text-6xl text-[#F0B429]">
                <IoTimerOutline />
              </i>
            </span>
            <p className=" text-center text-2xl my-[15px] text-[#F0B429]">
              الالتزام بموعد التسليم
            </p>
            <p className="text-[#777] text-justify">
              ويتم إنجاز المشروعات وتسليمها في مواعيدها المحددة ، مع الالتزام
              بمعايير الجودة نظراً لالزامنا بالخطة الموضوعة مسبقاً من فريق العمل
            </p>
          </div>
          <div className="box h-[370px] basis-[22%] bg-white p-4 ">
            <span className="w-[100px] mx-auto h-[100px] rounded-full bg-[#94BFE7] flex items-center justify-center">
              <i className="text-6xl text-[#186FAF]">
                <AiOutlineInsertRowAbove />
              </i>
            </span>
            <p className=" text-center text-2xl my-[15px] text-[#186faf]">
              مرونة التسعير
            </p>
            <p className="text-[#777] text-justify">
              وتأتي مرونة تسعير المشروعات وفقاً لقراءة الوضع اﻻقتصادي أثناء
              التخطيط للوضع في الاعتبار تكاليف المعدات والعمالة ومواد البناء
              وتوفرها مع مراعاة المنافسة لإعطاء سعر تنافسي مرغوب
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Services;
