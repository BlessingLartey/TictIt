import landingImg from "../../../images/landingImg.png";

function MainAppPageLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-[#C4C4C4] flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">

        {/* LEFT IMAGE BOX */}
        <div className="hidden md:block w-[480px] h-[580px] rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src={landingImg}
            alt="Main Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CARD BOX */}
        <div className="w-full md:w-[480px] max-w-full bg-[#FFF9F9] rounded-2xl shadow-lg p-6 md:p-10 overflow-y-auto md:h-[580px]">
          {children}
        </div>

      </div>
    </div>
  );
}

export default MainAppPageLayout;
