import TaskCard from "../molecules/TaskCard/TaskCard";

export default function TodayPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Today’s Tasks</h1>
      
      <div>
                <TaskCard title="Today" />
              </div>
    </div>
  );
}
