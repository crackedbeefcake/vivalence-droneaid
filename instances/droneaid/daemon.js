export const droneaid = {
  manifest: {
    type: "daemon",
    slug: "droneaid",
    version: "0.0.1",
    name: "DroneAid",
    description: "The workshop: build guides for the drones DroneAid assembles.",
    icon: { emoji: "🛠️" },
  },
  kernel: ["@droneaid/assembly/pt10"],
};
