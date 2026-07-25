import { useParams } from "react-router-dom";

const Result = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div>Result for project: {projectId}</div>
  )
}

export default Result