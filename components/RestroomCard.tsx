import { MapPin, Star } from "lucide-react"

interface RestroomCardProps {
  restroom: {
    name: string
    address: string
    clean_score: string
  }
}

export default function RestroomCard({ restroom }: RestroomCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
      <h2 className="text-xl font-semibold mb-2">{restroom.name}</h2>
      <div className="flex items-center mb-2">
        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
        <p className="text-gray-600">{restroom.address}</p>
      </div>
      <div className="flex items-center">
        <Star className="w-4 h-4 mr-2 text-yellow-500" />
        <p className="text-gray-700">Cleanliness: {restroom.clean_score}</p>
      </div>
    </div>
  )
}

