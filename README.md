# Work Day Scheduler Starter Code
https://github.com/alam2tg/flexible-schedule
https://alam2tg.github.io/flexible-schedule/

## Description
My motivation to make this project was to create a useful tool that used APIs. While learning how to code, it became apparent that the 'learning' aspect took many forms. Individual study, group study, and learning from experts. I realized that I needed all three of these elements to learn as effectively as possible. With this, scheduler, I could properly allocate time to all these fields on my journey to learn how to code. 

Individual Study - Reading, Solving Coding Problems
Group Study - Projects, Discussing Code
Experts - Advice from professionals, Videos, Stack Overflow

## Installation
Creating this Work Day Scheduler required a few steps.
1. Getting the data. By using day.js as an API for current time, the scheduler is able to keep the current date as well as use the current time "now", as a reference.
2. In the scheduler, I've decided to organize the hours by color. 
- Past: Grey
- Present: Red
- Future: Green

3. The present hour block will simply be the hour we are on. So if it is 2:35, the 2pm hour block is considered "Present". 

## Usage
Using the scheduler is a simple matter of typing your data, and saving!
Each hour block of the scheduler is a text-box. Add any details of your schedule, then click "save" on the right.

![scheduler-demo](assets/images/scheduler-demo.gif)

## Credits
dayjs as API for current time - https://day.js.org 

## License
MIT License

Copyright (c) 2023 Aaron

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.