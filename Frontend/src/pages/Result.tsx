import { useEffect, useState } from "react";
import type { Project } from "../types";
import { dummyGenerations } from "../assets/assets";
import { Loader2Icon, RefreshCwIcon } from "lucide-react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

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
      <div className="min-h-screen text-white px-6  mt-4">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-medium">Generation Result</h1>
            <Link to="/generate" className="btn-secondary text-sm flex items-center gap-2">
              <RefreshCwIcon className="w-4 h-4" />
              <p className="max-sm:hidden">New Generation</p>
            </Link>
          </header>
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Result Display */}
            <div className="lg-col-span-2 space-y-6">
              <div className="glass-panel inline-block p-2 rounded-2xl">
                <div className={`${project?.aspectRatio == '9:16' ? 'aspect-9/16' : 'aspect-video'} sm:max-h-200 rounded-xl bg-gray-900 overflow-hidden relative`}>
                  {
                    project.generatedVideo ? (<video src={project.generatedVideo} controls autoPlay loop className="w-full h-full object-cover" />) : (<img src={project.generatedImage} alt="Generated Result" className="w-full h-full object-cover" />)
                  }
                </div>
              </div>
            </div>


            {/* Side bar action */}
          </div>
        </div>
      </div>
    )
}

export default Result