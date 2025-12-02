import { Link } from "react-router-dom";
import BottomLink from "../atoms/BottomLinks/bottomLink";
import Button from "../atoms/Button/Button";
import Title from "../atoms/Title/title";
import MainAppPageLayout from "../organisms/LandingLayout/MainAppPageLayout";

export default function LandingPage() {
  return (
    <MainAppPageLayout >
      <div className="flex flex-col w-full gap-6">
      <Title>Welcome to Our App</Title>

      <p className="text-gray-700 md:w-[350px]">
Stay Organized, Get Things Done: Your Ultimate To-Do List App.
A todo list app is a digital task management tool designed to help users organize and prioritize their daily activities and responsibilities.      </p>

      <Button component={Link} to="/register">Get Started</Button>

      <BottomLink text="Already have an account? Login" to="/login" />
    </div>
    </MainAppPageLayout>
    
  );
}
