import landingImg from "../../../images/landingImg.png";

function MainAppPageLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-[#C4C4C4] flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* LEFT IMAGE BOX */}
        <div className="w-[580px] h-[722px] rounded-2xl overflow-hidden">
          <img
            src={landingImg}
            alt="Main Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CARD BOX */}
        <div className="w-[580px] h-[722px] bg-[#FFF9F9] rounded-2xl shadow-lg p-10 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
}

export default MainAppPageLayout;
