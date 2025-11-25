import { Link } from "react-router-dom";

function BottomLink({ text, to }) {
  return (
    <Link to={to} className="text-sm text-blue-600 underline mt-4 block text-center">
      {text}
    </Link>
  );
}

export default BottomLink;
