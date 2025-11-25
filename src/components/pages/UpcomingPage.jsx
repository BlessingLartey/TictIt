import Title from "../atoms/Title/title";
import TaskCard from "../molecules/TaskCard/TaskCard";


export default function UpcomingPage() {
  return (
    <>
    <Title>Upcoming Task</Title>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full p-5">

        <div className="md:col-span-2">
          <TaskCard title="Today" />
        </div>

        <TaskCard title="Tomorrow" />

        <TaskCard title="This Week" />

      </div>
    </>
      
  );
}
