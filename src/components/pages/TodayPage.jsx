import Title from "../atoms/Title/title";
import TaskCard from "../molecules/TaskCard/TaskCard";

export default function TodayPage() {
  return (
    <div>
      <Title>Today’s Tasks</Title>
      
      <div>
                <TaskCard title="Today" />
              </div>
    </div>
  );
}
