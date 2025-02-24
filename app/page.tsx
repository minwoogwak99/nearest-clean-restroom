import NearestRestroom from "@/components/NearestRestroom"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1 className="text-2xl font-bold mb-4">Nearest Clean Restroom</h1>
      <NearestRestroom />
    </main>
  )
}

