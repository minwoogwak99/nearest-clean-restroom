import bathroomsData from "@/data/bathrooms.json"

export async function getBathrooms() {
  // In a real-world scenario, you would fetch this data from an API
  // For this example, we're using the imported JSON data
  return bathroomsData.bathrooms
}

