# F1 Academy Leaderboard
A web app built Angular, Tailwind CSS and DaisyUI. The app shows a leaderboard for [F1 Academy](https://www.f1academy.com/Racing-Series/Calendar) race timing. Users can add and view race entries, which are automatically sorted by lap time.
## Features
 - Add new leaderboard entries (name, lap time, color)
 - Entries are automatically sorted by lap time, fastest to slowest
 - Colored badge with dynamic text contrast
 - Light and dark mode with Tailwind and DaisyUI

## Usage
1. Type the driver's name
2. Pick a color to represent the driver using the color picker, or leave the color picker as-is to use the default black color
3. Type a lap time using only digits: the time will be formatted as you type
4. Click "Add to Leaderboard": the entry will appear in the leaderboard ranked by lap time

## Installation
```bash
cd leaderboard
ng serve
```
Visit `http://localhost:4200/` to view the app.