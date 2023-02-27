import Image from "next/image";
import Link from "next/link";

const callouts = [
  {
    name: "MES 노재내화물 관리 개발 1, 2차",
    date: "2021.08 ~ 현재(18개월)\n",
    partner: "고객사 / 근무회사 : (주)POSCO / (주)에스아이에스",
    desc: "1. 담당업무 \n " +
        "- 프로젝트 설계(업무/화면/DB/EAI) 및 개발 리더\n" +
        "- 핵심 업무(자재비, 인건비 정산) 로직 구현\n" +
        "- 설비수리등록 로직 구현\n" +
        "2. 사용기술\n" +
        "- MSA, JPA, Java, Spring Boot, React 외"
  },
  {
    name: "전사 제안관리시스템 개발",
    date: "참여기간 : 2020.11 ~ 2021.07(9개월)\n",
    partner: "고객사 / 근무회사 : (주)POSCO / (주)에스아이에스",
    desc: "1. 담당업무\n" +
        "- 프로젝트 설계(업무/화면/DB/EAI)\n" +
        "- 핵심 업무(제안서등록 및 심사편성) 모듈 개발\n" +
        "2. 사용기술\n" +
        "- Spring Framework, Java, JSP, Mybatis 외"
  },
  {
    name: "MES 철도관제시스템 개발",
    date: "참여기간 : 2019.09 ~ 2020.10(14개월)\n",
    partner: "고객사 / 근무회사 : (주)POSCO / (주)에스아이에스",
    desc: "에스아이에스\n" +
        "1. 담당업무\n" +
        "- Framework version upgrade에 따른 Migration\n" +
        "2. 사용기술\n" +
        "- Spring Framework, Java, JSP, Mybatis 외"
  },
  {
    name: "Smart Factory Posframe Platform개발",
    date: "참여기간 : 2018.09 ~ 2020.08(12개월)\n",
    partner: "고객사 / 근무회사 : (주)POSCO / (주)에스아이에스",
    desc: "1. 담당업무\n" +
        "- 빅데이터 처리 기술 Posframe Platform 개발\n" +
        "2. 사용기술\n" +
        " - Storm Framework, Java, Mybatis"
  },

];

export default function Skills() {
  return (
      <div>
        <div className="bg-white">
          <div
              className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6">
            <div className="max-w-7xl mx-auto px-4 ">
              <h4 className="font-['font-AlegreyaSans'] font-bold text-gray-800 text-xl">
                Skills
              </h4>
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6">
                {callouts.map((callout) => (
                    <div key={callout.name} className="group relative">
                      <div
                          className="relative w-full h-80 bg-white sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1">
                        <p className="text-justify text-sm text-gray-500">{callout.name}</p>
                        <p className="text-justify text-sm text-gray-500">{callout.date}</p>
                        <p className="text-justify text-sm text-gray-500">{callout.desc}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
