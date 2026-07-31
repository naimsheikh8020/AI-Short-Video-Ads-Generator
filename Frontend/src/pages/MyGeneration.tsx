import { useEffect, useState } from "react"
import type { Project } from "../types"
import { dummyGenerations } from "../assets/assets"
import { Loader2Icon } from "lucide-react"
import ProjectCard from "../components/ProjectCard"

const MyGeneration = () => {
  const [generations, setGenerations] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMyGenerations = async () => {
    setTimeout(() => {
      setGenerations(dummyGenerations);
      setLoading(false)
    }, 3000)
  }
  useEffect(() => {
    fetchMyGenerations()
  }, [])
  return loading ? (
    <div className="flex items-center justify-center min-h-screen mt-[-100px] md:mt-[-150px] xl:mt-[-200px]">
      <Loader2Icon className="size-20 animate-spin text-indigo-400" />
    </div>)

    : (
      <div className="min-h-screen text-white p-6 md:p-12 mb-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">My Generation</h1>
          <p className="text-gray-400">View your generated content here</p>
        </header>

        {/* generations List */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {generations.map((gen) => {
            return <ProjectCard key={gen.id} gen={gen} setGeneration={setGenerations} />
          })}
        </div>
      </div>
    </div>
    )
}

export default MyGeneration