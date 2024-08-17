interface ProfileStatistics {
  title: string;
  value: number;
  isPlus: boolean;
}

export const myStatistics: ProfileStatistics[] = [
  {
    title: "lines of code",
    value: 160000,
    isPlus: true,
  },
  {
    title: "pixels rendered",
    value: 301783509,
    isPlus: false,
  },
  {
    title: "cup of chai",
    value: 100,
    isPlus: true,
  },
  {
    title: "projects contributed",
    value: 22,
    isPlus: true,
  },
];
