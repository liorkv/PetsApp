import axios from "./axios";

export async function createPet(newPet) {
  const response = await axios.post("/pet", newPet);
  return response;
}
