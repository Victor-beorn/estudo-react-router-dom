import { Outlet, useParams, useSearchParams } from "react-router";
import "./styles.module.css";

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();
  return (
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs.get("segundo")}`}
      </h1>
      <Outlet />
    </div>
  );
};
