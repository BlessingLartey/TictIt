
export default function Button({ children, component: Component = 'button', ...props}) {
  return (
    <Component
      {...props}
      className="md:w-[382px] h-[40px] bg-[#76DE37] text-white rounded-md font-semibold flex justify-center items-center"
    >
      {children}
    </Component>
  );
}
