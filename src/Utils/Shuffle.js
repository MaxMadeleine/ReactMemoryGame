export function shuffleArray(array) {

    const shuffled = [...array];

    return shuffled.sort(() => Math.random() - 0.5);
  }
  