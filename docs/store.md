# localStorage structure

```markdown
{
  Nonograms: {
    theme: 'light' | 'dark'
    lang: 'en' | 'ru' | 'de' | 'fr'
    sound: { volume: number, muted: boolean },
    music: { volume: number, muted: boolean },
    records: [              # Palyed games
      {
        name: string,
        mode: number,
        time: number,
        turns: number,
        solution: number,
        score: number,
        date: number,
      }
    ],
    puzzles: [              # Custom puzzles
      {
        name: string
        puzzle: string
      }
    ]
    last: {
      game: {               # Last played game sate
        mode: number,
        puzzle: number,
        solution: number,
        turns: number,
        time: number,
        arr: string,
      },
      editor: {             # Last editor sate
        name: string,
        mode: number,
        arr: string,
      }
    }
  }
}
```
