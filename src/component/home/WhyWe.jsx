import React from "react";

function WhyWe() {
  return (
    <section className="why pt-[50px]">
      <h1 className="title">
        لماذا مؤسسة هيكلة الإعمار و البناء للمقاولات العامة
      </h1>
      <div className="cols mt-[20px] bg-[#ccc] p-9 grid grid-cols-[repeat(auto-fill,_minmax(350px,1fr))] gap-5 justify-center  text-center">
        <div className="col p-5 rounded-md bg-white">
          <img
            src="public/image/construction-team.jpg"
            className="w-[200px] h-[200px] rounded-full mx-auto"
            alt=""
          />
          <h3 className="text-[#F0B429] my-4">التنفيذ الاحترافي</h3>
          <p>مع فرق تنفيذية متخصصة في كافة مجالات البناء والتشييد</p>
        </div>
        <div className="col p-5 rounded-md bg-white">
          <img
            src="public\image\download.jfif"
            className="w-[200px] h-[200px] rounded-full mx-auto"
            alt=""
          />
          <h3 className="text-[#F0B429] my-4">الابتكار الخلاق</h3>
          <p>عبر سواعد متخصصة شابة تمتزج بالخبرة الطويلة</p>
        </div>
        <div className="col p-5 rounded-md bg-white">
          <img
            src="public\image\OIP.jfif"
            className="w-[200px] h-[200px] rounded-full mx-auto"
            alt=""
          />
          <h3 className="text-[#F0B429] my-4">التخطيط الدقيق</h3>
          <p>من خلال فريق عمل استشاري وإداري يمتلك أسباب التفرد والتميز</p>
        </div>
      </div>
    </section>
  );
}

export default WhyWe;
