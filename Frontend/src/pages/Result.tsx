import { useEffect, useState } from "react";
import type { Project } from "../types";
import { dummyGenerations } from "../assets/assets";
import { Loader2Icon } from "lucide-react";
import Loader from "../components/Loader";

const Result = () => {
  const [project, setProjectData] = useState<Project>({} as Project);
  const [loading, setLoading] = useState<boolean>(true);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const fetchProjectData = async () => {
    setTimeout(() => {
      setProjectData(dummyGenerations[0]);
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    fetchProjectData()
  }, [])

  return loading ? (
    <Loader />
  )
    : (
      <></>
    )
}

export default Result