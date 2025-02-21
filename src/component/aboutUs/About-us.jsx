import React from "react";
import "./about-us.css";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="aboutUs-hero pt-10  ">
        <div className="content flex items-center justify-between">
          <div className="info w-[50%] ">
            <h1>عن مؤسسة هيكلة الإعمار و البناء للمقاولات العامة</h1>
            <p>
              تقدم Hawb معظم خدمات البناء والانشاءات المعمارية الحديثة بدءاً من
              التصميم وحتى التنفيذ مروراً بأعمال الحفر والانشاء والتشطيب وغيرها
              من متطلبات العمل كشركة مقاولات تسعى للنجاح في هذا المجال
            </p>
          </div>
          <img src="public\image\Hikala-Logo.png" alt="" />
        </div>
      </div>
      <div className="ser pt-[120px] pb-[100px] text-center">
        <h2>تعرف علينا أكثر</h2>
        <p>
          تعمل شركات المقاولات على إنجاز العديد من المشاريع ذات طابع خاص
          بالتشييد والبناء ومن تلك المشاريع التي تنفذها شركة أنظمة البناء
          للمقاولات هو كافة أنواع مجالات التشييد والبناء والترميم وكل ما يخص
          اعمال البناء والتشييد من (المجمعات السكنية ،والمراكز التجارية ،بناء
          المستشفيات والمدارس ،الأبراج والفنادق وكافة المنشآت والمرافق العامة
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
