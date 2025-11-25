import Button from "../atoms/Button/Button";
import Title from "../atoms/Title/title";

export default function HomePage() {
  return (
    
    <div className="flex bg-[#F4F4F4]  items-center justify-center">
      
    
      <div className="w-3/5 p-8 space-y-6 text-center">
        <Title>Wellcome to Tictit</Title>
        <p className="text-gray-600">
          A to-do app is a simple, user-friendly digital tool designed to help individuals and teams organize tasks and manage their daily activities efficiently. Users can create, edit, and prioritize tasks, set deadlines or reminders, categorize items, and track their progress, all within an intuitive and accessible interface. These apps are essential for improving productivity, reducing stress, and ensuring that important responsibilities are not forgotten.
        </p>
        <Button>Go to tasks</Button>
      </div>
    </div>
  );
}
