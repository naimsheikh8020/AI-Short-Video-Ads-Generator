import { useEffect, useState } from "react"
import type { Project } from "../types"
import { dummyGenerations } from "../assets/assets"
import { Loader2Icon } from "lucide-react"

const Community = () => {
  const [project, setProject] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProject = async () => {
    setTimeout(() => {
      setProject(dummyGenerations);
      setLoading(false)
    }, 3000)
  }
  useEffect(() => {
    fetchProject()
  }, [])
  return loading ? (
    <div className="flex items-center justify-center min-h-screen mt-[-100px] md:mt-[-150px] xl:mt-[-200px]">
      <Loader2Icon className="size-20 animate-spin text-indigo-400"/>
    </div>)

    :
    (<div></div>)
}

export default Community