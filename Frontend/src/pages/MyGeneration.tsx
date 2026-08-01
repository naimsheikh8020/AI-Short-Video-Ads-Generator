import { useEffect, useState } from "react"
import type { Project } from "../types"
import { dummyGenerations } from "../assets/assets"
import ProjectCard from "../components/ProjectCard"
import { PrimaryButton } from "../components/Buttons"
import Loader from "../components/Loader"

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
    <Loader />)

    : (
      <div className="min-h-screen text-white p-6 md:p-12 mb-28">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            {
              generations.length > 0 && (
                <>
                  <h1 className="text-3xl md:text-4xl font-semibold mb-4">My Generation</h1>
                  <p className="text-gray-400">View your generated content here</p>
                </>)
            }

          </header>

          {/* generations List */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {generations.map((gen) => {
              return <ProjectCard key={gen.id} gen={gen} setGeneration={setGenerations} />
            })}
          </div>

          {
            generations.length === 0 && (
              <div className="flex flex-col items-center justify-center mt-20 bg-white/5 border border-white/10 rounded-xl py-20">
                <p className="text-gray-400 text-lg">You have no generations yet.</p>
                <p className="text-gray-400 text-lg">Start generating content to see it here.</p>
                <PrimaryButton onClick={() => window.location.href = '/generate'} className="mt-4">
                  Generate Content
                </PrimaryButton>
              </div>
            )
          }
        </div>
      </div>
    )
}

export default MyGeneration