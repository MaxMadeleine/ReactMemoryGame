export function shuffleArray(array) {
    // Lav en kopi af arrayet for at undgå at ændre originalen
    const shuffled = [...array];
    // Brug sorteringsmetoden med en tilfældig værdi
    return shuffled.sort(() => Math.random() - 0.5);
  }
  